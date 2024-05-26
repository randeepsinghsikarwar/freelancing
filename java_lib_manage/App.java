import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.Scanner;

// app class
public class App {
    public static void main(String[] args) {

        // creating an instance of library class.
        Library lib = new Library();
        Scanner sc = new Scanner(System.in);
        int choice = -1;

        do {
            System.out.println("\nWelcome to the library management applicaiton!");
            System.out.println("1. Add a book");
            System.out.println("2. Remove a book");
            System.out.println("3. Find a book");
            System.out.println("4. View all book");
            System.out.println("5. Exit");
            System.out.print("\nPlease select an option from above: ");

            try {
                choice = sc.nextInt();
            } catch (InputMismatchException ime) {
                System.out.println("Non number input not allowed!");
            } catch (Exception e) {
                System.out.println("Unknown Error!");
            }

            sc.nextLine();

            switch (choice) {
                case 1:
                    System.out.println("Enter the title: ");
                    String title = sc.nextLine();
                    System.out.println("Enter the author: ");
                    String author = sc.nextLine();
                    System.out.println("Enter the genre: ");
                    String genre = sc.nextLine();
                    System.out.println("Enter the price: ");
                    float price = sc.nextFloat();

                    Book newBook = new Book(title, author, genre, price);
                    if (lib.addBook(newBook)) {
                        System.out.println("'" + title + "'" + " has been added to the library!");

                    } else {
                        System.out.println("A book with the title '" + title + "' already exists. Book not added!");
                    }

                    break;
                case 2:
                    System.out.println("Enter title of the book you wish to remove: ");
                    String remTitle = sc.nextLine();

                    if (lib.removeBook(remTitle) == true) {
                        System.out.println("'" + remTitle + "' has been removed.");
                    } else {
                        System.out.println("Could not remove '" + remTitle + "'. Title not foud.");
                    }
                    break;
                case 3:
                    System.out.println("Enter the value you want to search for: ");
                    String val = sc.nextLine();

                    ArrayList<Book> searchResult = lib.searchBooks(val);
                    if (searchResult.isEmpty()) {
                        System.out.println("No results found");
                    } else {
                        System.out.println("Found " + searchResult.size() + " books matching '" + val + "' ");
                        for (Book b : searchResult) {
                            System.out.println(b.printBook());
                        }
                    }
                    break;
                case 4:
                    ArrayList<Book> allBooks = lib.viewAllBooks();
                    if (allBooks.isEmpty()) {
                        System.out.println("There are no books in library!");
                    } else {
                        for (Book b : allBooks) {
                            System.out.println(b.printBook());
                        }
                    }
                    break;
                case 5:
                    System.out.println("Thanks for using the applicaiton!");
                    break;
                default:
                    System.out.println("Invalid input, please try again!");
            }
        } while (choice != 5);

        sc.close();
    }
}


// library class
class Library {
    // array that will store all the books.
    private ArrayList<Book> books;

    // constructor.
    public Library() {
        this.books = new ArrayList<>();
    }

    // function to add book to library.
    public boolean addBook(Book book) {
        for (Book b : books) {
            if (b.getTitle().equalsIgnoreCase(book.getTitle())) {
                return false;
            }
        }
        books.add(book);
        return true;
    }

    // function to remove a book from library.
    public boolean removeBook(String title) {
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                books.remove(book);
                return true;
            }
        }
        return false;
    }

    // function to search for books.
    public ArrayList<Book> searchBooks(String val) {
        ArrayList<Book> a = new ArrayList<>();
        for (Book book : books) {
            if (book.getTitle().equalsIgnoreCase(val) ||
                    book.getAuthor().equalsIgnoreCase(val) ||
                    book.getGenre().equalsIgnoreCase(val)) {
                a.add(book);
            }
        }
        return a;
    }

    // function to view all the books.
    public ArrayList<Book> viewAllBooks() {
        return books;
    }
}

//book class
class Book {
    // book attributes
    private String title;
    private String author;
    private String genre;
    private float price;

    // constructor
    public Book(String title, String author, String genre, float price) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.price = price;
    }

    // getter functions to get book details.
    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getGenre() {
        return genre;
    }

    public float getPrice() {
        return price;
    }

    // function to print details of a book.
    public String printBook() {
        return "Title: " + title + ", Author: " + author + ", Genre: " + genre + ", Price: " + price;
    }
}
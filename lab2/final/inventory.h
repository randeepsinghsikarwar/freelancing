#include <iostream>
#include <fstream>
#include <string>
using namespace std;

struct ProductRec
{
    int product_code;
    string product_description;
    double product_price;
};

class Inventory
{
private:
    ProductRec products[25];
    int number_of_products;
    int maximum_products;

    //used to search the array for a specific product code.
    int searchProduct(int code)
    {
        int i = 0;
        for (i = 0; i < 25; i++)
        {
            if (products[i].product_code == code)
            {
                return i;
            }
        }
        // have to return actual number of products of code not found in the arr.
        return i;
    }

public:
    //constructor for the Inventory class.
    Inventory(string fileName, int maximum_products = 25)
    {

        // validating if the maxx is in the range, i.e. not more than size of array products.
        maximum_products <= 25 ? this->maximum_products = maximum_products : maximum_products = 25;

        fstream file;
        int i = 0;
        file.open(fileName);
        if (!file.is_open())
        {
            cout << "failed to open the file" << endl;
        }
        else
        {
            int code;
            string desc;
            double product_price;

            while ((file >> code >> desc >> product_price) && i < this->maximum_products)
            {
                products[i].product_code = code;
                products[i].product_description = desc;
                products[i].product_price = product_price;

                i++;
            }
        }
        file.close();
        number_of_products = i;
    }

    //display's product's description and price.
    void showProduct(int code)
    {
        for (int i = 0; i < 25; i++)
        {
            if (products[i].product_code == code)
            {
                cout << code << " " << products[i].product_description << " " << products[i].product_price << endl;
                return;
            }
        }
        cout << "product not found!" << endl;
    }

    //writes all the products in the array ti o/p file or screen. 
    void writeInventory(ostream &out)
    {
        out << "Product Code\t\tDescription\t\tPrice" << endl;
        for (int i = 0; i < number_of_products; i++)
        {
            out << products[i].product_code << "\t\t" << products[i].product_description << "\t\t" << products[i].product_price << endl;
        }
        out << "Number of products in the array: " << number_of_products << endl;
    }

    // reutrn the actual number of products in the product array.
    inline int getNoProducts()
    {
        return number_of_products;
    }

    //increases the price of the product of the specified code. 
    void increasePrice(int code, double product_price)
    {

        for (int i = 0; i < 25; i++)
        {
            if (products[i].product_code == code)
            {
                if (products[i].product_price + product_price <= 1000)
                {
                    products[i].product_price += product_price;
                }
                else
                {
                    cout << "The maximum product_price of $1000 was assignid" << endl;
                    products[i].product_price = 1000;
                }
                return;
            }
        }
        cout << "product does not exist in the data" << endl;
    }
};

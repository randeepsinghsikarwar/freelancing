#include <iostream>
#include <fstream>
#include <string>

struct ProductRec
{
    int product_code;
    std::string product_description;
    double product_price;
};

class Inventory
{
private:
    ProductRec products[25];
    int number_of_products;
    int maximum_products;

    int searchProduct(int code);

public:
    Inventory(std::string fileName, int maximum_products = 25);
    void showProduct(int code);
    void writeInventory(std::ostream &out);
    int getNoProducts();
    void increasePrice(int code, double product_price);
};


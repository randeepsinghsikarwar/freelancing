#include "inventory.h"
using namespace std;


int Inventory::searchProduct(int code)
{
    int i = 0;
    for (i = 0; i < 25; i++)
    {
        if (products[i].product_code == code)
        {
            return i;
        }
    }
    return i;
}

Inventory::Inventory(string fileName, int maximum_products)
{
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

void Inventory::showProduct(int code)
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

void Inventory::writeInventory(ostream &out)
{
    out << "Product Code\t\tDescription\t\tPrice" << endl;
    for (int i = 0; i < number_of_products; i++)
    {
        out << products[i].product_code << "\t\t" << products[i].product_description << "\t\t" << products[i].product_price << endl;
    }
    out << "Number of products in the array: " << number_of_products << endl;
}

int Inventory::getNoProducts()
{
    return number_of_products;
}

void Inventory::increasePrice(int code, double product_price)
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
                cout << "The maximum product_price of $1000 was assigned" << endl;
                products[i].product_price = 1000;
            }
            return;
        }
    }
    cout << "product does not exist in the data" << endl;
}


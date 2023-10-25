#include "inventory.h"

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

Inventory::Inventory(std::string fileName, int maximum_products)
{
    maximum_products <= 25 ? this->maximum_products = maximum_products : maximum_products = 25;

    std::fstream file;
    int i = 0;
    file.open(fileName);
    if (!file.is_open())
    {
        std::cout << "failed to open the file" << std::endl;
    }
    else
    {
        int code;
        std::string desc;
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
            std::cout << code << " " << products[i].product_description << " " << products[i].product_price << std::endl;
            return;
        }
    }
    std::cout << "product not found!" << std::endl;
}

void Inventory::writeInventory(std::ostream &out)
{
    out << "Product Code\t\tDescription\t\tPrice" << std::endl;
    for (int i = 0; i < number_of_products; i++)
    {
        out << products[i].product_code << "\t\t" << products[i].product_description << "\t\t" << products[i].product_price << std::endl;
    }
    out << "Number of products in the array: " << number_of_products << std::endl;
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
                std::cout << "The maximum product_price of $1000 was assigned" << std::endl;
                products[i].product_price = 1000;
            }
            return;
        }
    }
    std::cout << "product does not exist in the data" << std::endl;
}


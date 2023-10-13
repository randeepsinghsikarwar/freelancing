#include<iostream>
#include<string>
#include<fstream>
using namespace std;

const int arrSize = 10;

struct ProductRec{
    int productCode;
    string description;
    double price;
};

int loadArray(ProductRec *arr){
    fstream file;
        int i = 0;
    file.open("inventory.dat",ios::in);
    if(!file.is_open()){
        cout<<"not"<<endl;
        return 0;
    }else{
        int code;
        string desc;
        double price;

       while(file >> code >> desc >> price){
            arr[i].productCode = code;
            arr[i].description = desc;
            arr[i].price = price;

            i++;
       }
    }

    file.close();
    return i;
}

void showArray(ProductRec *arr, int i){
    fstream outputFile("product.txt");
    if(!outputFile.is_open()){
        cout<<"unable to open file"<<endl;
        return;
    }else{
        outputFile<<"Product Code\tDescription\tPrice"<<endl;
        for(int j = 0;j<i;j++){
            outputFile<<arr[j].productCode<<"\t\t"<<arr[j].description<<"\t\t"<<arr[j].price<<endl;
        }
    }
    outputFile.close();

}

int main(){
    ProductRec arr[arrSize];
    int arrLen = loadArray(arr);
    showArray(arr, arrLen);
    system("type product.txt");

}
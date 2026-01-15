#include <iostream>

int main(){
    std::string typed_text;
    std::cout << "Enter a number: " << std::endl;
    std::cin >> typed_text;
    std::cout << typed_text << " is your chosen number";
    return 0;
}
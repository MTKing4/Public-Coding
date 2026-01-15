// C++ Functions
// In C++, any code that executes at runtime must be inside a function (usually main() or one it calls).
// However, you can still have declarations and definitions outside of functions, such as: int globalVar = 10;  // Global variable, class MyClass {};     // Class definition, void helper();        // Function declaration
// main:

#include <iostream>                         // include is a keyword to import a library, <iostream> is one of the files in the standard library, stands for input output stream, in this file, we have capability for printing something on the screen or getting input from the user

int main() {                                // int is the type of value that main function returns, the value that this function returns tells the operating system if our program terminated successfully or not, the value is 0 if successful, and 1 if errors were encountered, the () can contain parameters
    std::cout << "Hello World";             // std::, short for standard library, is a container for the feature that are currently available to us, that we imported using #include, cout is short for character output, used to print something on the screen, << indicates the direction the character is going so in: cout << "Hello World" you can see that "Hello World" is pointing towards cout

    return 0;                               // this means main() function will return 0 if the function terminated successfully.
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

// Variables

#include <iostream>

int main() {
    int file_size;                         // Declaring a variable, if we add an initial value, then it's initializing a variable, it's best practice to always initialize variables, say with 0
    double sales = 9.99;                   // Initializing a variable
    int file_1 = 0, file_2 = 0;            // we can declare/initialize multiple variables on the same line, but it's discouraged to do so, best practice is single variable per line
    std::cout << file_size;                // printing an uninitialized variable will result in random numbers, we call that garbage, ex. 32758, which is the date that is currently in memory
    return 0;
}
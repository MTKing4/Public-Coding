//------------------------------------------------------------------------------
//--------------------------------- Dart ---------------------------------------
//------------------------------------------------------------------------------


// Compilation Processes
// 1. Just In Time (JIT)
// 2. Ahead of time (AOT)

// During development dart uses JIT for fast iteration immediate feedback
// it means you can make changes to your code and see the results without waiting for compilation

// But when it's time to deploy your dart app you use the AOT compiler, which compiles your dart
// code into optimized native machine code, this results in faster execution and improved performance
// making your application really efficient


void main() {
  print("hello");
}

// comment

/*
multi
line
comment
 */

//------------------------------------------------------------------------------

// Variables

// Syntax:
// <datatype> <variableName> = value;

int firstNumber
double    // Allows Decimal points


//------------------------------------------------------------------------------

// Datatypes


void main() {

  int number = 34;
  double decNumber = 234.3;
  String name = "Mohammad";
  bool isCorrect = true;

  // Dynamic datatype
  dynamic value1 = 10;      // dynamic can store any datatype
  dynamic value2 = 1.2;
  dynamic value3 = "string";
  dynamic value4 = false;


  // int properties (among many)

  print(number.isEven);
  print(number.isOdd);
  print(number.bitLength);
  print(number.abs());
  print(number.ceil());
  print(number.isNaN);


  // String properties (among many)

  print(name.isEmpty);
  print(name.isNotEmpty);
  print(name.isNotEmpty);
  print(name.length);
  print(name.endsWith("d"));
  print(name.trim());

  // dynamic properties
  print(value1.runtimeType);    //Returns the dynamic datatype on runtime

  // incrementing values
  value += 1

  //Combining strings

  //  1. using plus +

    String greeting = "Hello";
    greeting = greeting + "Man";
    print(greeting);

  //  2. using string interpolation

  String greeting = "Hello";
  greeting = '$greeting Man';     // can use {} when there is a property with the method like ${greeting.length}
  print(greeting);

  // adding a normal $ sign
  String Currency = "\$20";

  // multi line text

  // 1. using '''
  String longText = '''this
is
multi line
text
  ''';

  // 2. using \n (more elegant)
  String longText = 'this \nis \nmy \ntown';

}

//------------------------------------------------------------------------------

// using var, final , const

void main() {

  var value1 = '10';  // var takes any type but once defined it becomes static, unlike dynamic, its type can't be changed after defining it
  final value2 = '10';
  const value3 = '10';


  // the deference between the 3 is

  // 1. var can change its value later but not its type, var means variable, it's mutable (means the value can be changed after setting it)
  // 2. final can't change its value because it's a runtime constant, it's immutable
  // 3. const can't change its value because it's a compile time constant, it's immutable

  value1 = '11'; // the other values can't be changed like so


  // deference between final and const

  // DateTime.now() retrieves the current date and time at runtime
  // so is the value cannot be known until the program is executed

  final time1 = DateTime.now(); // runtime constant
  // const time2 = DateTime.now(); // compile time constant, won't work here because const needs the value at compile time (before the code is executed) i.e it's not a constant


  final DateTime time3 = DateTime.now(); // can also type it like that
  final String time4 = 'string'; // or that
}

//------------------------------------------------------------------------------

// nullable variables / optional variables

void main() {


  // Optional variables
  // means your variables can have two values either one or the other at a time

  // first value can be String/int/bool
  // second value can be null

  // int value1 = null; // this won't work in dart sdk 2.0 and above, instead do:
  int? value2 = null;   // optional variable

  // final? value3 = null; // final can't be an optional variable, this won't work
  final value3 = null; // this works but it sets the type as dynamic

  // you also can set null by not setting anything, it will be set to null anyway

  String? value4;
  print(value4);

  value4 = "text";
  print(value4);

  value4 = null;
  print(value4);

  // The ability to null variables back and forth like the above example
  // is called sound null safety
  // why is it called safety?
  // Because you can do this

  String? value5;
  print(value5);

  value5 = "text";
  print(value5.length);

  value5 = null;
  // print(value5.length);  // here the linter will warn you because the type
  //                           is null it has no length property
  //                           this is the safety it provides

  // you can force execution by adding ! that will ignore the linter but you will
  // get the error at runtime instead

  // print(value5!.length);

  // You also can use ? here, it will basically say if it's null print null and
  // if it's not null get me the length

  print(value5?.length);

}

// if the optional variable was defined outside of the main function, it will not have
// the context to know that it is, so we will have to use ! or ? in that case

String? value6;

void main(){
  print(value6);
  value6 = null;
  print(value6?.length); // without ? You will get: Error: Property 'length' cannot be accessed on 'String?'
  // because it is potentially null. Try accessing using ?. instead.

  // if you want null to show as 0 to the user you use ??
  print(value6?.length??0);   // ??0 means if the value is null, show 0

}


//------------------------------------------------------------------------------


// if statements

void main() {
  int age = 13;

  if (age >= 18) {
    print('ADULT');
  }
  else {
    print('CHILD');
  }


// other usable keywords, else if, &&, and ||

// Ternary Operator
  String value1 = "Hello";
  String value2 = value1.startsWith('h') ? "nice" : "damn it";
  print(value2);


  // Switch Statement
  switch(value1){
    case "hello":
      print(true);
    case "Helloo":
      print('aah');
    case "pep" when age >30:    //if both conditions are met, value1 = "pep" and age is less than 30
      break;
    default:
      print(value1);
  }

}


//------------------------------------------------------------------------------


// loops

// for loop

void main() {

  for(int count=0; count<=10; count++){
    String hello = 'Hello world';
    print(hello.substring(5,11));   // substring takes part of the string

  }
}


// while loop

void main() {

  String text = "Hello";

  int count = 0;

  while(count<text.length){

    print(text[count]);
    count++;

  }
}


// do while loop

void main() {

  String text = "Hello";

  int count = 0;
  do{
    print(text[count]);
    count++;
  }
  while(count<text.length);
}

// other keywords, break, continue


//------------------------------------------------------------------------------


// Functions

// Syntax

/*
<functiontype> FunctionName(){
}
 */


// void means this function doesn't return anything
void main(){
  function1();
  print(function2());
  print(function3());
  print(function4());

  // records and ghettos

  var record = function4(); // this function returns a record of multiple datatypes
  print(record.$4);   // Get only one of the returned values, known as ghettos

  // destructuring the record
  var (name, age, isAdult, comment) = function4();
  print(comment);

  // parameters and arguments
  function6(name);

  // required and optional arguments (keyword arguments)
  function7(name: "mohammad");

  // you can mix positional and keyword arguments nomrally
  function8("Hello", name: "mohammad", age: 50, city: "mosul");

  // two other ways to return from a record
  // 1.
  (int, String) stuff = function9();
  print(stuff);

  // 2
  final (value1, value2) = function9();
  print(value1);
  print(value2);


  // named and optional records
  final stuff2 = function10();
  print(stuff2.name);
  print(stuff2.age);

  // returning a function from a function
  final stuff3 = function11();
  stuff3();

  // arrow functions
  function12();
}


void function1(){
  print("mohammad");
}


// String means this function will return a string
String function2(){
  return "sheesh";
}


// int means this function will return an int
int function3(){
  return 12;
}


// returning multiple datatypes, this is called a record
(String, int, bool, String) function4(){
  return ("meow", 12, true, "barf");
}


// returning nullable variables
String? function5(){
  return null;
}


void function6(String name){
  print(name);
}


void function7({required String name, int? age, String? city}) {  // just make the parameters optional by using ?
  print(name);
  print(age);
  print(city);
}


// this function has positional and keyword parameters
void function8(greeting, {required String name, int? age, String? city}) {
  print(name);
  print(age);
  print(city);
}


(int, String) function9(){
  return (12, 'mohammad');
}


({int age, String name}) function10(){
  return (age: 132, name: 'mohad');
}


Function function11(){
  return () {           // returning an anonymous function
    print("wow");
  };
}

void function12() => print("arrow");    // arrow function


//------------------------------------------------------------------------------


// Classes

void main(){
  print(Cookie().shape);    // We either use Cookie() like that every time we want to access something from the class or instantiate it only once as a variable (object)

  Cookie cookie = Cookie();   // Instantiating a class object with type of class name (instead of int, String etc)
  cookie.baking();
}


class Cookie {
  String shape = "Circle";
  double size = 15.2;

  void baking(){
    print("baking started");
  }

  bool isCooling(){
    return false;
  }
}


// constructors

void main(){
  final cookie = Cookie("Square", 14);
  print(cookie.shape);
  print(cookie.size);
}


class Cookie {
  String shape;
  double size;
  Cookie(this.shape, this.size){    // Constructor can work without {} block, but we need them if we want to execute a method or some code
    print("constructor start");
    baking();

  }

  void baking(){
    print("baking started");
  }

  bool isCooling(){
    return false;
  }
}


// Another way to define constructors (long version)

void main(){
  final cookie = Cookie("Square", 14);
  print(cookie.shape);
  print(cookie.size);

  // private variable
  print(cookie._height);

  // getter
  print(cookie.height);

  //setter
  cookie.setHeight = 15;
  print(cookie.height);

}


class Cookie {
  String? shape = 'cookie';
  double? size;
  Cookie(String shape, double size){
    print(this.shape);    // This will print the default property before it gets assigned to the constructor parameters (only possible with long version)
    this.shape = shape;
    this.size = size;
  }

  // Private Variables (file Level)

  int _height = 12;    // This is private to this file from anywhere (in a class or function and out of them)


  // Getters and Setters

  // Getter
  // used to get a private variable out of its scope
  // read only value, cant' be edited
  int get height => _height;

  // Setter
  // used to edit the variable
  set setHeight(int h){
    _height = h;
  }

  void baking(){
    print("baking started");
  }

  bool isCooling(){
    return false;
  }
}


//------------------------------------------------------------------------------


// Static Variables and Static Functions

// Static variables are used to store constants in one place in a class
// that can be used anywhere without creating an object therefore saving memory

void main() {
  final constants = Constants();

  print(Constants.greeting);
  print(Constants.bye);
  print(Constants.returnSomeValue());
}

class Constants {
  static String greeting = 'Hello';
  static String bye = 'Bye';

  // static functions
  static int returnSomeValue(){
    return 10;
  }

// NOTE: Static variables can only be used with static functions
}


//------------------------------------------------------------------------------


// Inheritance

void main(){

  Car car = Car();
  print(car.noOfWheels);

  // can also make the type Vehicle but then you have to set the type of car as Car individually
  // Vehicle car = Car();
  // print((car as Car).noOfWheels);

  // As keyword can be used with dynamic variables as well
  dynamic number = 14;
  print((number as int).runtimeType);
}

class Vehicle {
  int speed = 10;
  bool  isEngineWorking = false;
  bool isLightOn = true;

  void accelerate(){
    speed += 10;
  }
}

class Car extends Vehicle{
  int noOfWheels = 4;

  void printSomething(){
    print(noOfWheels);
  }
}


// Multiple Inheritance is not supported in Dart but multilevel inheritance is allowed
// multilevel inheritance and method overriding


void main(){

  Car car = Car();
  car.accelerate();
  print(car.speed);
}


class Vessel {
  int speed = 5;


  void accelerate(){
    speed += 10;
  }
}

class Vehicle extends Vessel {
  int speed = 10;
  bool  isEngineWorking = false;
  bool isLightOn = true;

  @override           // Method overriding: when identical methods are present, the one with this keyword is the one considered
  void accelerate(){
    speed += 15;
  }
}

class Car extends Vehicle{
  int noOfWheels = 4;

  void printSomething(){
    print(noOfWheels);
  }
}


// Class Implements


void main(){

  Car car = Car();
}

class Vessel {
  int speed = 5;


  void accelerate(){
    print("speeding");
  }
}

class Vehicle {
  bool isEngineWorking = false;
  bool isLightOn = true;
  int noOfWheels = 4;

}

class Car implements Vehicle{

  @override
  bool  isEngineWorking = false;
  @override
  bool isLightOn = true;
  @override
  int noOfWheels = 4;
}

class Truck extends Vessel{

  // super (doesn't work with implement)

  @override
  void accelerate() {
    super.accelerate();
  }
}

class Bike extends Vehicle implements Vessel{   // can have extend and implement two different classes
  @override
  int speed = 5;

  void accelerate(){
    print("speeding");
  }
}


// abstract class
// class only meant to have its methods overridden in its children classes (must)

// syntax:
// abstract class ClassName{
//  void method();


//------------------------------------------------------------------------------


// mixin classes

// is a class that can be used to be mixed in with other classes without setting uo
// a parent child relationship

void main(){

}

mixin Jump{
  int jumping = 10;
}

class Animal with Jump{

  void jump(){
    print(jumping);
  }
}


//------------------------------------------------------------------------------


// other class types


sealed class Animal {}      // Sealed: Can only be extended, implemented, or mixed in within the same library. Useful for defining a fixed set of subtypes.
final class Animal2 {}      // Final: Cannot be extended, implemented, or mixed in outside its library. Can still be instantiated normally.
base class Animal3 {}       // Base: can't be Implemented but can be extended, Intended for inheritance, but any subclass must also be marked base, final, or sealed. Prevents unrestricted implementation.
interface class Animal4 {}  // Interface: Can be implemented by other classes, but cannot be extended outside its library. Useful for defining a public contract with protected implementation details.
mixin class Animal6 {}      // Can be used as a class and mixin

// proper interface in dart (one that can't be constructed)
abstract interface class Animal7 {}


//------------------------------------------------------------------------------


// lists

void main() {

  List list1 = [10, 20, 30, 'hello', false];

  // type list
  List<int> list1 = [10, 20, 30, 'hello'];

  print(list1[2]);
}


//------------------------------------------------------------------------------



// void main() {
//
//   List list1 = [10, 20, 30, 'hello', false];
//
//   // type list
//   List<int> list2 = [10, 20, 30];       // <int> here is called generics
//
//   print(list1[2]);
// }
//

//------------------------------------------------------------------------------


// Generics

// These are just conventional names for generic type parameters.
// They don't have any special meaning to Dart itself,
// but developers use them to communicate intent.
// Without generics, you'd have to use dynamic:


// | Name | Common Meaning                  | Example     |
// | ---- | ------------------------------- | ----------- |
// | T    | Type (any type)                 |  Box<T>     |
// | E    | Element (items in a collection) |  List<E>    |
// | K    | Key                             |  Map<K, V>  |
// | V    | Value                           |  Map<K, V>  |

// Why not just use dynamic?
// Generics give you:
// - Type safety
// - Better autocomplete in IDEs
// - Compile-time error checking
// - Reusable code


void main() {
  // final student = Student(20);    // this is good because any type i add here it will be recognized
  // final student = Student<String>('20');    // can also specify what do i want it to be then it would type check it for me

  // print(student.name.runtimeType);


  List<Student> students = [      // this is a list of instances of the student class of type student
    Student('mohammad'),
    Student('mostafa'),
    Student('ahmad'),
    Student('abdalla'),
    Student('sameer')
  ];

  final student = students[4];
  print(student.name);


  // List Methods

  //changing a value in the list
  students[4] = Student('New Kid');
  print(students[4].name);

  students.add(Student('end'));
  students.insert(0, Student('start'));
  students.remove(students[0]);
  print(students);



}


class Student<T> {
  final T name;

  Student(this.name);

  @override
  String toString() => '$name';   // this is to see the list elements, we overridden the dart method toString()
}


//------------------------------------------------------------------------------


// Maps (Key value pairs)

void main() {

Map<int, String> marks = {
  10: '10',
  20: '20',
  30: '30'
};




// Map within a list

  Map<String, int> studentMarkA = {
    'Math': 70,
    'Science': 65,
    'English': 97
  };

  List<Map<String, int>> marks = [
    {
      'Math': 90,
      'Science': 85,
      'English': 95
    },
    {
      'Math': 80,
      'Science': 75,
      'English': 85
    },
    studentMarkA
  ];

// Printing out the values in the list of maps

  marks.map((element) {             // anonymous function
    element.forEach((key, value){
      print('$key : $value');
    });
  }).toList();

}


//------------------------------------------------------------------------------


// Enums

void main(){

  final employee1 = Employee("Mohammed", EmployeeType.it);    // Choosing the employee type defined in the enum
  final employee2 = Employee("Mostafa", EmployeeType.accounting);
  final employee3 = Employee("Mohannad", .marketing);   // Apparently typing it like that also works

  print((employee3.type));
  employee2.employeeDescription();
  employee1.employeeDescription();
}

enum EmployeeType {     // The enum is used to prevent a type value from being other than what's been defined in the enum
  it,
  accounting,
  marketing
}

class Employee{
  final String name;
  final EmployeeType type;      // Instead of a String we use Employee type that we created

  Employee(this.name, this.type);

  void employeeDescription(){
    switch(type)  {
      case EmployeeType.it:
        print("Information Technology");
      case EmployeeType.accounting:
        print("Accountant");
      default:
        print("Marketing");
    }
  }
}



// Enhanced Enums


void main(){

  final employee1 = Employee("Mohammed", EmployeeType.it);    // Choosing the employee type defined in the enum
  final employee2 = Employee("Mostafa", EmployeeType.accounting);
  final employee3 = Employee("Mohannad", .marketing);   // Apparently typing it like that also works

  print((employee3.type));
  employee1.employeeDescription();
  employee2.employeeDescription();
  employee3.employeeDescription();
}

enum EmployeeType {     // The enum is used to prevent a type value from being other than what's been defined in the enum
  it(200000),
  accounting(250000),
  marketing(150000);

  final int salary;         // Enhanced Enums, only for dart, used to pass a value to the enum, makes enums more like classes
  const EmployeeType(this.salary);      // enhanced enums use constructors
}

class Employee{
  final String name;
  final EmployeeType type;      // Instead of a String we use Employee type that we created

  Employee(this.name, this.type);

  void employeeDescription(){
    print('${type.name}: ${type.salary}');
  }
}


//------------------------------------------------------------------------------


// Exception Handling

void main(){

  print(10~/3);       // Truncating division ( divide by 3 then convert to int)
  print(10/0);

  try{
    print(10~/0);
  }
  on IntegerDivisionByZeroException catch (error){
    print(error);
  }
  finally{
    print("code complete");
  }
}


//------------------------------------------------------------------------------


// Futures (Promises in JS)

// here we can use Future<void> or just void, it will work, but there are differences between the two
// Use void for synchronous code or "fire-and-forget" tasks where you do not care when the action completes.
// Use Future<void> for asynchronous tasks when the caller needs to wait for completion or catch execution errors.

void main() async {           // we have to add async and await to return a value from a future function
  print("start");
  print(await giveAResultAfter2Sec());
  print("end");
}


// Future<String> giveAResultAfter2Sec() async {   // Asynchronous function, Type Future returning a <String>
//   return "Done";
// }

// This equates to the same function above without using async
// Future<String> giveAResultAfter2Sec() {      // when we remove Async we can't return a String Type
//   return Future((){                          // Future is a class, to return a string we add an anonymous function then return the string inside it
//     return "Done";
//   }
// }

// adding a delay
Future<String> giveAResultAfter2Sec() {
  return Future.delayed(Duration(seconds: 2), () async {
    return "Done";
  });
}


// then
// using then instead of async await will execute the code without waiting for the asynchronous line and execute it only when ready
// while async await paused all upcoming code until the it was done waiting and executing the asynchornous line

void main() {
  print("start");
  giveAResultAfter2Sec().then((value) {
    print(value);
  });
  print("end");
}

Future<String> giveAResultAfter2Sec() {
  return Future.delayed(Duration(seconds: 2), () async {
    return "Done";
  });
}


//------------------------------------------------------------------------------

// Streams
// an asychronous generator, which allows to produce a sequenece of values over time


import 'dart:async';

void main() async{

  countDown().listen((value){
    print(value);
  }, onDone: (){
    print("Done");
  });
}


Stream<int> countDown() async* {        // async* is for streams

  for(int count=5; count>0; count--){
    yield count;          // streams use yeild instead of return
    await Future.delayed(Duration(seconds: 1));
  }
}


// returning peroidic values
// Stream<int> countDown() {        // removed async* so that we can return a stream instead of a Future
//     return Stream.periodic(Duration(seconds: 1), (value) {
//       return value;
//     });
// }


//------------------------------------------------------------------------------


// controllers

// using a controller to create our own stream

void main() async{

  countDown();
}

void countDown() {
  final controller = StreamController<int>();          // controller to control the stream, puase, stop etc
  controller.sink.add(1);             //The sink is the input side of the controller. "Send the integer 1 into the stream." values are pushed into the stream one after another.
  controller.sink.add(4);
  controller.sink.add(2);
  controller.sink.add(1);
  controller.sink.add(14);
  controller.sink.addError('error');
  controller.sink.close();            // closing the stream controler sink
  controller.stream.listen((value){   // controller.stream gives access to the stream that listeners can subscribe to. listen() subscribes to the stream. "Whenever this stream emits a value, run this callback."
    print(value);
  }, onError: (error){    // to handle the error we pushed to the stream
    print(error);
  }
  );

  controller.close();   // closing the controller
}


//------------------------------------------------------------------------------


// creating a record (like tuples in python)

void main () {
  final records = (4.5, greeting:"Hi", isAdult:true, 2);    // we can add named arguments (keywords arguments)
  print(records.$1);
  print(records.isAdult);


  //nullable records
  (double, int)? name = (4.5, 2);
  print(name);
  name = null;
  print(name);


  // equality of records

  ({int x, int y, int z}) point = (x: 1, y:2, z:3);
  ({int e, int y, int z}) point2 = (e: 1, y:2, z:3);

  // print(point == point2);   // can be equated because they have different named arguments
}


// list destructuring

void main() {
  final list = [1, 2, 3];
  final [a, b, c] = list;         // here each item will be assigned to the item on its same index in the list
  print ('$a $b $c');
}


// destructuring when the number of items isn't equal between the lists
void main() {
  final list = [1, 2, 3, 4, 5, 6, 7, 8, 9];     // this will return a Pattern matching error
  final [a, b, c, ...] = list;         // adding ... will fix the error and take only the minimum number of items
  print ('$a $b $c');
}


// making the remaining items into a list

void main() {
  final list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  final [a, b, c, ...d] = list;       // d will contain the remaining items from list and put them as a list
  print ('$a $b $c $d');
}


// skipping an element from asignement
void main() {
  final list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  final [a, _, c, ...d] = list;       // _ means we'll skip the number 2 in list, _ isn't a variable, it's undefined
  print ('$a $c $d');
}



// map destructuring


void main(){
  final jsoned = {
    "userId" : 1,
    "id": 1,
    "title": "potato tomato kotato",
    "body": "shrmsh karmsh titish"
  };

  // standard map accessing
  print(jsoned["userId"]);

  // dart 3 way (map destructuring)
  final {"userId": userId, "title": title} = jsoned;

  print(userId);
  print(title);

  // using a special if case condition (also works with switch, replacing else with default:)
  if(jsoned case {"userId": int userId, "title": String title}){    // provides types and type checking to the variables
    print(userId);
    print(title);
  }
  else{
    print("wrong format");
  }
}


//------------------------------------------------------------------------------

// Class Destructuring

void main(){
  final human = Human("Human Name", 2);

  // printing the properties using pattern matching
  // final Human(:name, :age) = human;

  // can also rename the properties
  final Human(name:newName, age:newAge) = human;

  print(newName);

}


class Human {
  final String name;
  final int age;
  Human(this.name, this.age);
}


//------------------------------------------------------------------------------


// list content check and comparison

void main(){


  List<String> listItems = ["HI", "MAN"];

  switch(listItems) {
    case ["HI" || "hi", "MAN" || "man"]:      // each item can be all caps OR small
      print("Match!");
  }
}


//------------------------------------------------------------------------------


// Arrow switches

// used inside a variable to assign it a value based on another variable

void main() {
  int page = 1;
  int lastPage = 1;

  final text = switch(page){
    0 => "it's zero",
    1 when lastPage == 1 => "it's one",
    _ => "it's the Default"
  };

  print(text);
}


//------------------------------------------------------------------------------


// Extentions

// methods that the user can create to use on the datatypes of the user's choice
// performing actions not available in dart by default like capitalize first letter


void main() {
  String motivation = 'nice weather today';

  motivation = motivation.captializeFirstLetter();
  print(motivation);
}

extension CapitalizeFirstLetter on String {   // the extention
  String captializeFirstLetter() {            // the method within the extention
    return this[0].toUpperCase() + substring(1);    // this here is the string we'll apply the method one, substring is this.substring
  }
}


//------------------------------------------------------------------------------
//--------------------------------- Flutter ------------------------------------
//------------------------------------------------------------------------------

// Creating a flutter project
// Ctrl + J to open the terminal then type the following commmand
// flutter create currency_converter

//-----

// showing text in the app screen
import 'package:flutter/material.dart';   // importing material.dart from flutter package

void main() {
  runApp(Text("text", textDirection: TextDirection.ltr));         // runApp() is a function from flutter package
}


//------------------------------------------------------------------------------


// State & Widget Types


import 'package:flutter/material.dart';

void main() {
  runApp(const App());      // made it constant to declare the constructor as a compile time constant
                            // passing a key to the App() will assign a key to that particular instance of a widget
}

// Widgets
// Types of widges
// 1. StatelessWidget
// 2. statefulWidget
// 3. IheritedWidget


class App extends StatelessWidget {
  const App({super.key});   // key is from StatelessWidget abstract class which is from Widget abstract class
                            // key is a class that helps flutter identify and differentiate between widgets

  @override
  Widget build(BuildContext context) {        // StatelessWidget is abstract so we need to override it, build() function is defined there so we need to redefine it
    return const Text("text", textDirection: TextDirection.ltr);    // here we need to return a widget so we did, also added constant to improve performace (no need to rebuild widgets each time)
  }
}


//------------------------------------------------------------------------------


// Types of App design Schools of thought (Design System)

// 1. Material Design (By Google - Andriod)
// 2. Cupertino Design (By Apple - IOS)


import 'package:flutter/material.dart';

void main() {
  runApp(const App());
}


class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(         // Material App is android style, it has a home property we used
      home: Scaffold(           // to Stylize the text we use a Scaffold (it has AppBar (header), and body, like html)
        body: Center(           // center to put widgets in the center of the scaffold, has a child property we used
          child: Text("Meowwwwwww"))
      )
    );
  }
}


//------------------------------------------------------------------------------


// Same Example as above but separated by modules


//-----------------------------File: main.dart----------------------------------


import 'package:currency_converter/converter_material.dart';
// line below is the same as the line above: 
// import './converter_material.dart';

import 'package:flutter/material.dart';

void main() {
  runApp(const App());
}


class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: ConverterMaterial(),
      );
  }
}


//------------------------File: converter_material.dart------------------------


import 'package:flutter/material.dart';

class ConverterMaterial extends StatelessWidget {
  const ConverterMaterial({super.key});
  
  @override
  Widget build(BuildContext context){       // BuildContext a flutter class that tells flutter where this converter widget is in widget tree
    return const Scaffold(
        body: Center(
          child: Text("Meowwwwwww"))
      );
  }
}


//------------------------------------------------------------------------------


// NOTE there are three types of modes for flutter applications
// 1. debug mode
// 2. release mode: doesn't have debug prints and all
// 3. profile mode (mix between debug and release): runs the app in relase mode but show the debug messages and print statements


//------------------------------------------------------------------------------


// Currency Converter App (stateless, doesn't update state)


//-----------------------------File: main.dart----------------------------------



import 'package:currency_converter/converter_material.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const App());
}


class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: ConverterMaterial(),
      );
  }
}


//------------------------File: converter_material.dart------------------------


import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class ConverterMaterial extends StatelessWidget {
  const ConverterMaterial({super.key});


  @override
  Widget build(BuildContext context) {
    debugPrint('rebuilt');
    double result = 0;
    final TextEditingController textEditingController = TextEditingController();    // this is used to get the input from the TextField and make it available everywhere

    // a border that will be reused with focusedBorder and enabledBorder
    final inputBorder = OutlineInputBorder(
      // add border to all sides
      borderSide: const BorderSide(
        // color format 0xAARRGGBB (2 digits for each alpha, red, green, blue)
        color: Color.fromARGB(255, 26, 127, 170),
        width: 5.0,
        strokeAlign: BorderSide.strokeAlignOutside,
      ),

      // borderRadius: BorderRadius.all(Radius.circular(40)),      // all means radius for all sides
      // borderRadius: BorderRadius.horizontal(        // horizontal, can also do .vertical with top and bottom properties, can also use .only to manually set each side
      //   right: Radius.circular(40)              // only curved on the right
      borderRadius: BorderRadius.circular(
        60,
      ), // this gives an error because we're returning a const scaffold so we removed it and added const to all children widgets and not parent ones to get rid of this error and use this without a const
      // the above garbage line is the same as .all just made me add consts everywhere for no reason apparently
    );

    return Scaffold(
      backgroundColor: Color.fromARGB(142, 27, 147, 184),
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(203, 33, 149, 243),
        title: Text('Currency Converter', style: TextStyle(color: Colors.amberAccent),),
        centerTitle: true,
        actions: [Icon(Icons.list_rounded)],      // right side of app bar
        leading: Icon(Icons.arrow_back)           // left side of app bar
      ),
      body: Center(
        // child: ColoredBox(
          // color: Color.fromRGBO(159, 146, 145, 1),
          child: Column(        // we used column to add multiple widgets,
            mainAxisAlignment: MainAxisAlignment.center, // column main axes is vertical so we used this, this is an enum and has propreries like center to put the text in the center vertically
            // crossAxisAlignment: CrossAxisAlignment.end,     // to put text to the end of the widget horizontally
            children: [           // children is a list allowing multiple widgets
               Text(result.toString(),      // convert to string
                style: TextStyle(
                  fontSize: 35,
                  fontWeight: FontWeight.bold,
                  color: Color.fromARGB(255, 255, 255, 255),
                ),
              ),
              // ctrl + Shift + R to wrap something with a widget (powerful)
              Padding(                // can also use container with same implementation, padding has 1 widget option but container has many
                padding: const EdgeInsets.only(left: 8.0, right: 8.0),
                child: TextField(
                  controller: textEditingController,      // this controller will give us access to all the user's inputs
                  style: const TextStyle(
                    color: Colors.white,), // style of the typed text
                  decoration: InputDecoration(
                    label: Text(
                      'please enter the amount in USD',
                      style: const TextStyle(
                        color: Colors.white,
                      ), // style of the label
                    ),
                    hintText: '\$15',
                    hintStyle: TextStyle(color: Colors.white38),
                    prefixIcon: const Icon(Icons.monetization_on,), // suffixIcon and suffixIconColor if you want the icon right to left
                    prefixIconColor: Colors.white38,
                    filled: true,
                    fillColor: Color.fromARGB(255, 24, 74, 154),
                    focusedBorder: inputBorder,         // enabledBorder: UnderlineInputBorder()   // adds border only below
                    enabledBorder: inputBorder,
                  ),
                  keyboardType: TextInputType.numberWithOptions(      // use it for ios because it sucks, android works with .number just fine
                    decimal: false,
                    signed: true,
                  ), // force the keyboard to only show numbers
                ),
              ),

              //raised buttons
              // text buttons
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: ElevatedButton(          // can use TextButton here without changing the code or ElevatedButton and use elevation property which has no effect on TextButton
                  onPressed: () {
                    if (kDebugMode) {               // kDebugMode is to check if we are in debug mode
                      // debugPrint('count clicked',); // recommended printing in debug mode
                      result = double.parse(textEditingController.text) * 1530;       // double.parse() is how to convert something to double, also can do int.parse()
                      build(context);
                    }
                  },
                  // style: const ButtonStyle(
                  //   backgroundColor: WidgetStatePropertyAll(Colors.white70),        // to avoid typing WidgetStatePropertyAll each time, we can use button.styleFrom()
                  //   foregroundColor: WidgetStatePropertyAll(Colors.blueAccent),
                  //   minimumSize: WidgetStatePropertyAll(Size(double.infinity, 40),),     // double.infinity: take the maximum width size for this button, works with minimumSize and not fixedSize (good to be identical on different devices)
                  //   elevation: WidgetStatePropertyAll(15),
                  //   shape: WidgetStatePropertyAll(CircleBorder())   // can change the button shape like CircleBorder() or OvalBorder()
                  // ),

                  // using style from instead of WidgetStatePropertyAll()

                  style: TextButton.styleFrom(
                    backgroundColor: Colors.white70,
                    foregroundColor: Colors.blueAccent,
                    minimumSize: Size(double.infinity, 40),
                    elevation: 15,
                    shape: CircleBorder()
                  ),

                  child: const Icon(Icons.calculate),
                ),
              ),
            ],
          ),
        //),      // removing the ColoredBox
      ),
    );
  }
}


//------------------------------------------------------------------------------


// Currency Converter App (stateful)


// using initstate()

//-----------------------------File: main.dart----------------------------------



import 'package:currency_converter/converter_material.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const App());
}


class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(       // removed const from here
      home: CurrencyConverterMaterialPage(),
      );
  }
}




//------------------------File: converter_material.dart-------------------------

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class CurrencyConverterMaterialPage extends StatefulWidget {        // statefulWidget has a constant constructor so we can't add mutable variables here, instead we do it in State class
  CurrencyConverterMaterialPage({super.key}){     // removed const from here as well
    debugPrint("constuctor");
  }
  
  @override
  State<CurrencyConverterMaterialPage> createState() {    // createState method  is something StatefulWidget uses, it requires a type of state, and we can't create an instance of the State class because it is an abstract class, to create the state we need to create our own class that extends state and call it here
   debugPrint("create state");
   return _CurrencyConverterMaterialPageState();
  } 
}

//<CurrencyConverterMaterialPage> is just a generic to make sure the returned state type is that, it's fine if we don't add it but it is better to do so
// since we added the generic to the state above we need to add it the State that our class is extended from below

class _CurrencyConverterMaterialPageState extends State<CurrencyConverterMaterialPage> {     // _private class because we don't want to access this class outside of this file
  
  late double result;   // late keyword (like in Dart or Swift) used to declare a variable that will be initialized later in the code, rather than exactly when it is created

  @override
  void initState(){     // is a method from State class that gets executed before the build function
    super.initState();
    debugPrint('Rebuilt');
  }

  @override
  Widget build(BuildContext context) {
    debugPrint('build function');
    double result = 0;
    final TextEditingController textEditingController = TextEditingController();
    final inputBorder = OutlineInputBorder(
      borderSide: const BorderSide(
        color: Color.fromARGB(255, 26, 127, 170),
        width: 5.0,
        strokeAlign: BorderSide.strokeAlignOutside,
      ),

      borderRadius: BorderRadius.circular(
        60,
      ),
    );

    return Scaffold( /* rest of the code */ );
}
}

//------------------------------------------------------------------------------

// Currency Converter App (stateful) (Final)
// without initstate()
// with Cupertino Design as well


//-----------------------------File: main.dart----------------------------------


import 'package:currency_converter/converter_cupertino.dart';
import 'package:currency_converter/converter_material.dart';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';


void main() {
  runApp(const App());      // put CopertinoExample here to run Cupertino
}


class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      home: CurrencyConverterMaterialPage(),
      );
  }
}


class CupertinoExample extends StatelessWidget {
  const CupertinoExample({super.key});

  @override
  Widget build(BuildContext context) {
    return const CupertinoApp(
      home: ConverterCupertino(),
      );
  }
}


//------------------------File: converter_material.dart-------------------------


import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class CurrencyConverterMaterialPage extends StatefulWidget {
  const CurrencyConverterMaterialPage({super.key});

  @override
  State<CurrencyConverterMaterialPage> createState() =>
      _CurrencyConverterMaterialPageState();
}

class _CurrencyConverterMaterialPageState
    extends State<CurrencyConverterMaterialPage> {
  double result = 0;
  final TextEditingController textEditingController = TextEditingController();

  void convert() {
    if (kDebugMode) {
      setState(() {
        // setState to update values live, tells build function to rebuild
        result = double.parse(textEditingController.text) * 1530;
      });
    }
  }

  @override
  void dispose(){       // used to dispose of widgets and controllers no longer needed to avoid memory leaks and improve performance
    textEditingController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    debugPrint('rebuilt');
    final inputBorder = OutlineInputBorder(
      borderSide: const BorderSide(
        color: Color.fromARGB(255, 26, 127, 170),
        width: 5.0,
        strokeAlign: BorderSide.strokeAlignOutside,
      ),

      borderRadius: BorderRadius.circular(60),
    );

    return Scaffold(
      backgroundColor: Color.fromARGB(142, 27, 147, 184),
      appBar: AppBar(
        backgroundColor: const Color.fromARGB(203, 33, 149, 243),
        title: Text(
          'Currency Converter',
          style: TextStyle(color: Colors.amberAccent),
        ),
        centerTitle: true,
        actions: [Icon(Icons.list_rounded)],
        leading: Icon(Icons.arrow_back),
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                '${result != 0 ? result.toStringAsFixed(2) : result.toStringAsFixed(0)}', // put maximum 2 floating numbers
                style: TextStyle(
                  fontSize: 35,
                  fontWeight: FontWeight.bold,
                  color: Color.fromARGB(255, 255, 255, 255),
                ),
              ),
              TextField(
                controller: textEditingController,
                style: const TextStyle(color: Colors.white),
                decoration: InputDecoration(
                  label: Text(
                    'please enter the amount in USD',
                    style: const TextStyle(color: Colors.white),
                  ),
                  hintText: '\$15',
                  hintStyle: TextStyle(color: Colors.white38),
                  prefixIcon: const Icon(Icons.monetization_on),
                  prefixIconColor: Colors.white38,
                  filled: true,
                  fillColor: Color.fromARGB(255, 24, 74, 154),
                  focusedBorder: inputBorder,
                  enabledBorder: inputBorder,
                ),
                keyboardType: TextInputType.numberWithOptions(
                  decimal: false,
                  signed: true,
                ),
              ),
              const SizedBox(
                height: 10,
              ), // puts some space between button and textbox, Container also does this but we can't put const behind it causing it to rebuild everytime so we used SizedBox instead which is only used for width, height etc, where as container is used for all sorts of stuff
              ElevatedButton(
                onPressed:
                    convert, // we type our function here like that without ()
                style: TextButton.styleFrom(
                  backgroundColor: Colors.white70,
                  foregroundColor: Colors.blueAccent,
                  minimumSize: Size(double.infinity, 40),
                  elevation: 15,
                  shape: CircleBorder(),
                ),

                child: const Icon(Icons.calculate),
              ),
            ],
          ),
        ),
      ),
    );
  }
}


//------------------------File: converter_cupertino.dart-------------------------


import 'package:flutter/cupertino.dart';

// Cupertino Design Code (can't test because i don't have mac)

// typing stfl will generate stateful widget boilerplate

class ConverterCupertino extends StatefulWidget {
  const ConverterCupertino({super.key});

  @override
  State<ConverterCupertino> createState() => _ConverterCupertinoState();
}

class _ConverterCupertinoState extends State<ConverterCupertino> {
  double result = 0;
  final TextEditingController textEditingController = TextEditingController();

  void convert() {
    setState(() {
      // setState to update values live, tells build function to rebuild
      result = double.parse(textEditingController.text) * 1530;
    });
  }

  @override
  Widget build(BuildContext context) {
    debugPrint('rebuilt');

    return CupertinoPageScaffold(
      backgroundColor: Color.fromARGB(142, 27, 147, 184),
      navigationBar: const CupertinoNavigationBar(
        backgroundColor: const Color.fromARGB(203, 33, 149, 243),
        middle: Text(
          'Currency Converter',
          style: TextStyle(color: CupertinoColors.systemGrey3),
        ),
      ),
      child: Center(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                '${result != 0 ? result.toStringAsFixed(2) : result.toStringAsFixed(0)}', // put maximum 2 floating numbers
                style: TextStyle(
                  fontSize: 35,
                  fontWeight: FontWeight.bold,
                  color: Color.fromARGB(255, 255, 255, 255),
                ),
              ),
              CupertinoTextField(
                controller: textEditingController,
                style: const TextStyle(color: CupertinoColors.white),
                decoration: BoxDecoration(
                  color: CupertinoColors.white,
                  border: Border.all(),
                  borderRadius: BorderRadius.circular(5),
                ),
                placeholder: '\$15',
                prefix: const Icon(CupertinoIcons.money_dollar),
                keyboardType: TextInputType.numberWithOptions(
                  decimal: false,
                  signed: true,
                ),
              ),
              const SizedBox(height: 10),
              CupertinoButton(
                onPressed: convert,
                color: CupertinoColors.black,

                child: const Icon(CupertinoIcons.number_circle),
              ),
            ],
          ),
        ),
      ),
    );
  }
}


//------------------------------------------------------------------------------


// State Managers

// 1. Provider
// 2. Riverpod

// Provider State Manager
// has 4 types
// 1. Provider (Read Only value)
// 2. ChangeNotifierProvider  (change the values and notify the widgets listening to it)
// 3. FutureProvider (listen to future, subscribe to them and show the changes)
// 4. StreamProvider (Providing a stream)


//------------------------------------------------------------------------------


// Shop App


//------------------------File: lib\main.dart-----------------------------------


import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shop_app/pages/home_page.dart';
import 'package:shop_app/providers/cart_provider.dart';

void main() {
  runApp(const ShopApp());
}

class ShopApp extends StatelessWidget {
  const ShopApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(              // state manager
      create: (context) => CartProvider(),     // this value can be returned anywhere in the app now
      child: MaterialApp(         // we didn't set anything for navigation here but MaterialApp will handle it here
        title: "Shopping App",
        theme: ThemeData(         // defines the theme for the whole app
          fontFamily: 'Lato',
          colorScheme: ColorScheme.fromSeed(
            seedColor: const Color.fromRGBO(254, 206, 1, 1),    // make a colorScheme from a seed color
            primary: const Color.fromRGBO(254, 206, 1, 1),),    // forced a specific primary color for the color Scheme
            appBarTheme: const AppBarTheme(
              backgroundColor: Color.fromRGBO(120, 139, 162, 1),
              titleTextStyle: TextStyle(
                fontSize: 20,
                color: Colors.black,
              ),
            ),
          inputDecorationTheme: InputDecorationTheme(
            hintStyle: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 16,),
            prefixIconColor: Color.fromRGBO(119, 119, 119, 1),
          ),
          textTheme: TextTheme(
            titleMedium: TextStyle(
             fontWeight: FontWeight.bold,
             fontSize: 20, 
            ),
            bodySmall: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 16,
            ),
            titleLarge: TextStyle(fontWeight: FontWeight.bold, fontSize: 35),
          ),
          useMaterial3: true,
        ),
        home: HomePage()      // home: Provider(create: (context){return 'meow';}, child: HomePage()),       // this will be returned now instead of the first provider because it is the nearest widget in the widget tree
      ),
    );
  }
}



//------------------------File: lib\global_variables.dart-----------------------


final products = [
  {
    'id': '0',
    'title': 'Men\'s Nike Shoes',
    'price': 44.52,
    'imageUrl': 'assets/images/shoes_1.png',
    'company': 'Nike',
    'sizes': [9, 10, 11, 12],
  },
  {
    'id': '1',
    'title': 'Addidas Shoes',
    'price': 20.12,
    'imageUrl': 'assets/images/shoes_2.png',
    'company': 'Addidas',
    'sizes': [9, 10, 12],
  },
  {
    'id': '2',
    'title': 'Bata Women\'s Shoes',
    'price': 28.95,
    'imageUrl': 'assets/images/shoes_3.png',
    'company': 'Bata',
    'sizes': [8, 9, 10],
  },
  {
    'id': '3',
    'title': 'Jordan Shoes',
    'price': 420.69,
    'imageUrl': 'assets/images/shoes_4.png',
    'company': 'Nike',
    'sizes': [8, 9, 10],
  },
];


//------------------------File: lib\pages\cart.dart-----------------------------


import "package:flutter/material.dart";
import 'package:shop_app/providers/cart_provider.dart';
import 'package:provider/provider.dart';

class Cart extends StatefulWidget {
  const Cart({super.key});

  @override
  State<Cart> createState() => _CartState();
}

class _CartState extends State<Cart> {

  @override
  Widget build(BuildContext context) {
    // debugPrint(Provider.of<String>(context));     // printing value from state manager provider

    final cart = Provider.of<CartProvider>(context).cart;
    // final cart = context.watch<CartProvider>().cart;      // shorter syntax to the same line above

    return Scaffold(
      appBar: AppBar(title: Text('Cart')),
      body: ListView.builder(
        itemCount: cart.length,
        itemBuilder: (context, index) {
          final cartItem = cart[index];

          return ListTile(              // used with ListView, useful for displaying a list
            leading: CircleAvatar(      // leading to add something before our widget, Circle avatar is like the profile circle image
              backgroundImage: AssetImage(cartItem['imageUrl'] as String),
              radius: 45,
            ),
            trailing: IconButton(
              onPressed: (){
                showDialog(
                context: context,
                barrierDismissible: false,      // disallow clicking outside of the diaglog and dismiss it
                builder: (context){
                  return AlertDialog(
                    title: Text("Delete Item.", style: Theme.of(context).textTheme.titleMedium,),
                    content: Text("Are you sure you want to remove the item?"),
                    actions: [
                      TextButton(
                        onPressed: () {
                          // context.read<CartProvider>().removeProduct(cartItem);      shorter syntax for the same line below
                          Provider.of<CartProvider>(context, listen: false).removeProduct(cartItem);
                          Navigator.of(context).pop();
                        },
                        child: Text("Yes", style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
                      ),
                      TextButton(
                        onPressed: () {Navigator.of(context).pop();},     // dismiss with pressing no using pop
                        child: Text("No", style: TextStyle(color: Colors.blue, fontWeight: FontWeight.bold)),
                      ),
                    ],
                  );
                });
              },
            icon: const Icon(Icons.delete, color: Colors.red,)),
            title: Text(
              cartItem['title'].toString(),
              style: Theme.of(context).textTheme.bodySmall,
            ),
            subtitle: Text('Size: ${cartItem['size']}'),
          );
        },
      ),
    );
  }
}



//------------------------File: lib\pages\home_page.dart------------------------


import 'package:flutter/material.dart';
import 'package:shop_app/widgets/product_list.dart';
import 'package:shop_app/pages/cart.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
    
    int currentPage = 0; 
    List<Widget> pages = const [
      ProductList(),
      Cart(),
    ];


  @override
  Widget build(BuildContext context) {


    return Scaffold(
      body: IndexedStack(       // pages[currentPage] also works but IndexedStack preserves the state of pages, so if we scroll down then switch the page and back we will preseve the scrolling state
        index: currentPage,
        children: pages,
      ),
      bottomNavigationBar: BottomNavigationBar(       // bottom bar
        iconSize: 30,
        // selectedFontSize: 0,
        // unselectedFontSize: 0,     // make both of these 0 to remove the label altogether
        onTap: (value){
          setState(() {
            currentPage = value;
          });
        },
        currentIndex: currentPage,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: 'Cart'),
        ],
      ),
    );
  }
}



//------------------------File: lib\pages\product_details.dart------------------


import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shop_app/providers/cart_provider.dart';

class ProductDetails extends StatefulWidget {
  final Map<String, Object> product;
  const ProductDetails({super.key, required this.product});

  @override
  State<ProductDetails> createState() => _ProductDetailsState();
}

class _ProductDetailsState extends State<ProductDetails> {
  
  int selectedSize = 0;

  void addToCart(){
    if(selectedSize != 0){
      Provider.of<CartProvider>(context, listen: false)      // another argument used here is listen : false, used for functions and buttons because they don't need continuous listening
      .addProduct({
          'id': widget.product['id'],
          'title': widget.product['title'],
          'price': widget.product['price'],
          'imageUrl': widget.product['imageUrl'],
          'company': widget.product['company'],
          'size': selectedSize,
        });

        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Item Added to Cart'))       // used to pop up a message in the app
        );
    }
    else{
      ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Please Select a size'))       // used to pop up a message in the app
        );
    }
  }
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Details')),
      body: Column(
        children: [
          Text(
            widget.product['title'] as String,
            // widget.product['title'] as String,
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const Spacer(flex: 1,), // Spacer is a dynamic space between objects (best for images spacing), flex is the size of the space compared to the total flexes in the screen, total flexes is the sum of flex of all the spacers in the screen, right now we have 2 spacers, and 3 flexes, in this case, 1 flex is 1 third of the flexes, so it is 1/3,
          Padding(
            padding: const EdgeInsets.all(18.0),
            child: Image.asset(widget.product['imageUrl'] as String, height: 250,),     // we use widget. because it is in a stateful widget
          ),
          const Spacer(flex: 2,), // flex size here is 2/3, two thirds the size of the total flex
          Padding(
            padding: const EdgeInsets.all(8.0),
            child: Container(
              height: 250,
              width: double.infinity, // double.infinity makes it take the entire width
              decoration: BoxDecoration(
                color: const Color.fromARGB(125, 179, 174, 216),
                borderRadius: BorderRadius.circular(40),
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    '\$${widget.product['price'] as double}',
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  const SizedBox(height: 10),
                  SizedBox(
                    height: 50,
                    child: ListView.builder(
                      scrollDirection: Axis.horizontal,
                      itemCount: (widget.product['sizes'] as List<int>).length,
                      itemBuilder: (context, index) {
                        final size = (widget.product['sizes'] as List<int>)[index];
                        return Padding(
                          padding: const EdgeInsets.all(5.0),
                          child: GestureDetector(
                            onTap: () {
                              setState(() {
                                selectedSize = size;
                              });
                            },
                            child: Chip(label: Text(size.toString(),),
                            backgroundColor: selectedSize == size ? Theme.of(context).colorScheme.primary
                            : null,
                            ),
                          ),
                        );
                      },
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(20.0),
                    child: ElevatedButton.icon(
                      icon: Icon(Icons.shopping_cart_outlined),
                      onPressed: addToCart,
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Theme.of(context).colorScheme.primary,
                        fixedSize: Size(350, 50),     // can also use double.infinity to get the maximum size for the available screen size
                        iconColor: Colors.black
                      ),
                      label: const Text(
                        'Add To Cart',
                        style: TextStyle(color: Colors.black, fontSize: 18),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}



//------------------------File: lib\providers\cart_provider.dart----------------


import 'package:flutter/material.dart';

class CartProvider extends ChangeNotifier {
  final List<Map<String, dynamic>> cart = [];

  void addProduct(Map<String, dynamic> product) {
   cart.add(product);
   notifyListeners();       // without this the widgets won't get updated
  }

  void removeProduct(Map<String, dynamic> product) {
    cart.remove(product);
    notifyListeners();
  }
}


//------------------------File: lib\widgets\product_card.dart-------------------


import 'package:flutter/material.dart';

class ProductCard extends StatelessWidget {
  final String title;
  final double price;
  final String image;
  final Color backgroundColor;
  const ProductCard({
    super.key,
    required this.title,
    required this.price,
    required this.image,
    required this.backgroundColor,
    });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.all(20),
      padding: const EdgeInsets.all(16.0),
      decoration: BoxDecoration(
        color: backgroundColor,      // moved color in the decoration because we can't have a color and a decoration
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,     // makes everything start from left side
        children: [
          Text(title, style: Theme.of(context).textTheme.titleMedium,),
          const SizedBox(height: 5,),
          Text('\$$price', style: Theme.of(context).textTheme.bodySmall,),
          const SizedBox(height: 5,),
          Center(child: Image.asset(image, height: 175,)),
        ],
      ),);
  }
}


//------------------------File: lib\widgets\product_list.dart-------------------


import "package:flutter/material.dart";
import 'package:shop_app/global_variables.dart';
import 'package:shop_app/widgets/product_card.dart';
import 'package:shop_app/pages/product_details.dart';

class ProductList extends StatefulWidget {
  const ProductList({super.key});

  @override
  State<ProductList> createState() => _ProductListState();
}

class _ProductListState extends State<ProductList> {
  final List<String> filters = const ['All', 'Addidas', 'Nike', 'Bata'];

  // made it late and assigned it to filters[0] in init instead of here
  // because you can't use an initialized list in another initilized value
  late String selectedFilter;

  @override
  void initState() {
    super.initState();
    selectedFilter = filters[0];
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(     // Inherited Widget vs Inherited Model: using sizeOf to listen only to the size changes, this is called Inherited Model, whereas .of listens to all changes, which is the case with Inherited Widget
      context); // MediaQuery gives useful information, like current platfrom, screen height, width, screen orientation, etc
            // MediaQuery.of(context).size    == Inherited Widget
            // MediaQuery.sizeOf(context)     == Inherited Model
            // other option to use is LayoutBuilder which uses constraints, it's the same but Layout builder is affected by constraints imposed by its parent widgets
    const border1 = OutlineInputBorder(
      borderSide: BorderSide(color: Color.fromRGBO(167, 167, 167, 1)),
      borderRadius: BorderRadius.horizontal(left: Radius.circular(50)),
    );


  Widget buildGestureDetector(BuildContext context, int index){
    final product = products[index];

    return GestureDetector(
            onTap: () {
              Navigator.of(context).push(
                // setting up naviagtion, pressing the card to navigate somewhere, push() puts a new screen on top, pop removes it (used for back button)
                MaterialPageRoute(
                  // MaterialPageRoute is platform Adaptive, works on android and ios
                  builder: (context) {
                    return ProductDetails(product: product);
                  },
                ),
              );
            },
            child: ProductCard(
              title: product['title'] as String,
              price: product['price'] as double,
              image:
                  product['imageUrl']
                      as String, // the map is saying this is an object so we need to tell it that it's a string value
              backgroundColor: index.isEven
                  ? const Color.fromRGBO(216, 240, 253, 1)
                  : const Color.fromARGB(125, 179, 174, 216),
            ),
          );
  }

    return Scaffold(
      body: SafeArea(
        // safeArea used to not place things on top bar or bottom bar
        child: Column(
          children: [
            Row(
              children: [
                Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text(
                    " Shoes\n Collection",
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                ),
                const Expanded(
                  // Expanded used to take as much space as possible dynamically depending on the device
                  child: TextField(
                    decoration: InputDecoration(
                      hintText: 'Search',
                      prefixIcon: Icon(Icons.search),
                      border: border1,
                      enabledBorder: border1,
                    ),
                  ),
                ),
              ],
            ),
            SizedBox(
              height: 120,
              child: ListView.builder(
                // views a list of items
                itemCount: filters.length,
                scrollDirection: Axis.horizontal,
                itemBuilder: (context, index) {
                  final filter = filters[index];
                  return Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 4.0),
                    child: GestureDetector(
                      onTap: () {
                        setState(() {
                          selectedFilter = filter;
                        });
                      },
                      child: Chip(
                        // the filter buttons
                        backgroundColor: selectedFilter == filter
                            ? Theme.of(context)
                                  .colorScheme
                                  .primary // Theme.of(context) is using inherited widget, going to the nearest Theme widget up the inheritance tree and bring its properties here, we used the primary color from our color scheme when it is the selected filter
                            : const Color.fromRGBO(245, 247, 249, 1),
                        side: const BorderSide(
                          color: Color.fromRGBO(230, 206, 97, 0.831),
                        ),
                        label: Text(filter),
                        labelStyle: const TextStyle(fontSize: 14),
                        padding: EdgeInsets.symmetric(
                          horizontal: 25,
                          vertical: 14,
                        ),
                        shape: StadiumBorder(),
                      ),
                    ),
                  );
                },
              ),
            ),

            Expanded(
              child: size.width > 1080
                  ? GridView.builder(               // using gridview for Chrome view
                      itemCount: products.length,
                      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        childAspectRatio: 2
                      ),
                      itemBuilder: (context, index) {
                        return buildGestureDetector(context, index);
                      },
                    )
                  : ListView.builder(         // or listview for mobile app
                      itemCount: products.length,
                      itemBuilder: (context, index) {
                        return buildGestureDetector(context, index);
                      },
                    ),
            ),
          ],
        ),
      ),
    );
  }
}



//------------------------File: pubspec.yaml------------------------------------


// changed or added stuff to it


dependencies:
  flutter:
    sdk: flutter
  provider: ^6.1.5+1            // added state manager library


flutter:
  // actual files exist only in the project folders
  assets:
    - assets/images/shoes_1.png         // all images added need to be added here in assets if locally, urls if links
    - assets/images/shoes_2.png
    - assets/images/shoes_3.png
    - assets/images/shoes_4.png


  fonts:
  - family: Lato                  // external font added needs to be defined here as well
    fonts:
      - asset: assets/fonts/Lato-Light.ttf
      - asset: assets/fonts/Lato-Bold.ttf
        weight: 700



//------------------------------------------------------------------------------
//------------------------------ Course End ------------------------------------
//------------------------------------------------------------------------------
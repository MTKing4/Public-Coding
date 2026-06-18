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


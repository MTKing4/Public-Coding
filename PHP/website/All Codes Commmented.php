<?php // <?php is the opening tag for PHP code
    echo "Potato Chap"; // echo is text output
    echo "Potato Chap PC <br>"; // <br> is a line break
    /* this is how you comment in multiple lines
    ?> is the closing tag for PHP code */
?> 

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!-- this whole HTML Block was added by presssing ! + TAB -->
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <br>
    <button>Order A Potatoe</button>
</body>
</html>


<?php //Variables
    $name = "Mohammad"; // this is how to declare a variable
    echo "Hello $name <br>";
    echo "Hello {$name}"; // both of these lines give the same output, as text

?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<?php //Variable Types
    $name = "Mohammad"; // string
    $food = "Potato Chap";
    $age = 25; // integer
    $quantity = 5;
    $price = 5.99; // float


    $employee = true; // boolean
    $online = false; // nothing is displayed when it is false, but when it is true, 1 is displayed

    $total = null; // can use null for empty variables

    echo "The price is \${$price}"; // \ is an escape character, it was used to allow the dollar sign to be printed
    echo "<br>";
    echo "You have {$quantity} {$food}s<br>";
    $total = $price * $quantity;
    echo "total is \${$total}";

?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<?php // Athrmetic Operators
    $x = 10;
    $y = 3;
    $z = null;

    $z = $x + $y; //Addition
    $z = $x - $y; //subtraction
    $z = $x * $y; //multiplication
    $z = $x / $y; //division
    $z = $x ** $y; // Raise a base to a given power
    $z = $x % $y; // Modulous

    echo $z // can use echo without quotes for Integers and Floats

?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<?php // Increment/Decrement Operators
    $counter = 0;

    $counter = $counter + 1;
    $counter ++; // this does the same as the line above\
    $counter --; // Decrement
    $counter += 3; // increment by 3
    $counter -= 3; // Decrement by 3

    echo $counter;
?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<?php
    //Order Precedence
    // ()
    // **
    //
    // * / %
    // + -

    $total = 1 + 2 - 3 * 4 / 5 ** 6;
    echo $total; 
?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<?php // $_GET, $_POST, $_REQUEST (Super Global Variables)
    // $_GET is an array that holds the values of the variables passed to the current script via the URL parameters
    // $_POST is an array that holds the values of the variables passed to the current script via the HTTP POST method
    // $_REQUEST is an array that holds the values of the variables passed to the current script via the URL parameters, POST method, and cookies

    // $_GET
    // http://localhost/index.php?name=John&age=25
    // echo $_GET['name']; // John
    // echo $_GET['age']; // 25

    // $_POST
    // <form method="post" action="index.php">
    //     <input type="text" name="name">
    //     <input type="text" name="age">
    //     <input type="submit">
    // </form>
    // echo $_POST['name'];
    // echo $_POST['age'];

    // $_REQUEST
    // echo $_REQUEST['name'];
    // echo $_REQUEST['age'];



    //$_GET =  Data is Appended to the url
    //         NOT SECURE
    //         char limit
    //         Bookmark is possible w/ values
    //         GET requests can be cached
    //         Better for a search page


    //$_POST = Data is packaged inside the body of the HTTP request
    //         MORE SECURE
    //         No data limit
    //         cannot bookmark
    //         GET requests are not chached
    //         Better for submitting credentials

?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- $GET Method -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action ="index.php" method="get">  <!-- this is a form that sends data to the server, the action attribute is the file that the data is sent to, and the method attribute is the way the data is sent, get is the easiest way to send data, but it is not secure, post is more secure, but it is more complicated -->
        <label>Username:</label><br>
        <input type="text" name="username"><br> 
        <label>Password:</label><br>
        <input type="password" name="password"><br>
        <button type="submit">Log In</button>
    </form>
</body>
</html>

<?php
    echo $_GET["username"] . "<br>"; // this is how to get data from the URL, the data is stored in an associative array, the key is the name attribute of the input field, and the value is the data that was entered
    echo $_GET["password"] . "<br>"; // "." is used to concatenate strings
    echo "{$_GET["username"]} <br>"; // this is another way to concatenate strings

?>

------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- Same Code as above but using $_POST Method -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action ="index.php" method="post">
        <label>Username:</label><br>
        <input type="text" name="username"><br> 
        <label>Password:</label><br>
        <input type="password" name="password"><br>
        <button type="submit">Log In</button>
    </form>
</body>
</html>

<?php
    echo $_POST["username"] . "<br>"; // this is how to get data from the URL, the data is stored in an associative array, the key is the name attribute of the input field, and the value is the data that was entered
    echo $_POST["password"] . "<br>"; // "." is used to concatenate strings
    echo "{$_POST["username"]} <br>"; // this is another way to concatenate strings

?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- Order Page for a restaurant --->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action ="index.php" method="post">
        <label>Quantity: </label>
        <input type = "text" name = "quantity"> <br>
        <input type = "submit" value = "Total">

        
    </form>
</body>
</html>

<?php
    $item = "Potatoe";
    $price = 5.50;
    $quantity = $_POST["quantity"]; //if you use $_GET here, user can change the quantity from the url and affect the total price
    $total = $quantity * $price;

    echo "You have ordered {$quantity} {$item}s, the total is \${$total}"

?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- Math Functions --->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "index.php" method ="post">
        <label>x: </label>
        <input type = "text" name = "x"><br>
        <label>y: </label>
        <input type = "text" name = "y"><br>
        <label>z: </label>
        <input type = "text" name = "z"><br>
        <input type = "submit" value = "Total">
    </form>
</body>
</html>

<?php
    $x = $_POST["x"];
    $y = $_POST["y"];
    $z = $_POST["z"];
    $total = null;

    $total = abs($x); //Absolute Value of a number
    $total = round($x); //Round a decimal number
    $total = floor($x); //Always round down
    $total = ceil($x);  //Always round up
    $total = sqrt($x); // square root
    $total = pow($x, $y); //Raise A base to a Given Power ex. 2^3
    $total = max($x, $y, $z); //picks biggest Number from the given numbers in tha parentheses
    $total = min($x, $y, $z); // picks the minimum number
    $total = pi(); // pi function, 3.14
    $total = rand(1, 6); // gives random a number up to 2 Billions, can assign minimum and maximum numbers to choose from

    echo $total;

?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- Math Functions Example (Radius, Circumference, Area, Volume) --->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "index.php" method = "post">
        <label>Radius</label>
        <input type = "text" name = "radius">
        <input type = "submit" value = "Calculate">
    </form><br>
</body>
</html>


<?php
    $radius = $_POST["radius"];
    $circumference = null;
    $area = null;
    $volume = null;
    

    $circumference = 2 * pi() * $radius;
    $circumference = round($circumference, 2); //rounds the number to 2 decimal places

    $area = pi() * pow($radius, 2);
    $area = round($area, 2);

    $volume = (4/3) * pi() * pow($radius, 3);
    $volume = round($volume, 2);

    echo " The Circumference is: {$circumference} <br> ";
    echo " The area is: {$area}<br>";
    echo " Volume is: {$volume}"


?>

--------------------------------------------------------------------------------------------------------------------------------------

<?php //If Statements
    $age = 4;

    if ($age >= 100)
    {
        echo "old bitch";
    }

    elseif ($age >= 18)
    {
        echo "Welcome";
    }

    elseif($age <= 0)
    {
        echo "you suck";
    }
    else 
    {
        echo "Fuck you";
        
    }




?>

-------------------------------------------------------------------------------------------------------

<?php // If using Booleans
    $adult = false;

    if($adult == true) // can also be like so: if($adult) // that is checking if it is true
    {
        echo "enter";
    }
    else
    {
        echo "fuck you";
    }

?>

--------------------------------------------------------------------------------------------------------

<?php //salary and overtime calculator with if
    $hours = 50;
    $rate = 15;
    $weekly_pay = null;

    if ($hours <= 0)
    {
        $weekly_pay = 0;
        echo "your salary this week is {$weekly_pay}";
    }

    elseif ($hours <= 40)
    {  
        $weekly_pay= $hours * $rate;
        echo "your salary this week is {$weekly_pay}";
    }
    
    else
    {
        $weekly_pay = ($rate * 40) + (($hours - 40) * ($rate * 1.5));
        echo "your salary this week is {$weekly_pay}";
    }


?>

------------------------------------------------------------------------------------------------------

<?php //logical Operators
    $temp = 25;
    $cloudy = true;

    if ($temp < 0 || $temp > 30) // || is the OR operator and && is the AND operator
    {
        echo "bad<br>";
    }
    else
    {
        echo "good<br>";
    }

    if (!$cloudy) // ! here means NOT
    {
        echo "not Cloudy";
    }
    else
    {
        echo "Cloudy";
    }


?>

------------------------------------------------------------------------------------------------------

<?php //logical Operators example
    $age = 25;
    $citizen = true;

    if($age >= 18 && $citizen)
    {
        echo "You are eligible to vote";
    }
    else
    {
        echo "You are not eligible to vote";
    }
    
?>

------------------------------------------------------------------------------------------------------

<?php //switch, replaces the old if-else-if-else statement
    
    $grade = "A";

    switch($grade) 
    {
        case "A":
            echo "Great";
            break;          //break is like the end of the statement, without it the code will continue to run the next case
        case "B":
            echo "Good";
            break;
        default:            //default is like else
            echo "fuck you";
            
    }

    
?>

------------------------------------------------------------------------------------------------------------

<?php //switch, replaces the old if-else-if-else statement
    
    $date = date("l"); //date() function returns the current date and time, Details in the comments below
    echo $date . "<br>";

    switch($date) {
        case "Monday":
            echo "It's Monday!";
            break;
        case "Tuesday":
            echo "It's Tuesday!";
            break;
    }
?>

----------------------------------------------------------------------------------------------------

<?php // Date Function
    /*
            date() function is used to format the date and time in PHP.
            date("l") returns the current day of the week
            date("d") returns the current day of the month in 2 digits
            date("D") returns the current day of the week in 3 letters
            date("m") returns the current month in 2 digits
            date("M") returns the current month in 3 letters
            date("y") returns the current year in 2 digits
            date("Y") returns the current year in 4 digits
            date("h") returns the current hour in 12 hour mode
            date("H") returns the current hour in 24 hour mode
            date("i") returns the current minute
            date("s") returns the current second
            date("S") returns the suffix of the current day of the month 
            date("j") returns the Day of the month without leading zeros
            date("a") returns the current time of the day (AM or PM)
            date("A") returns the current time of the day (am or pm)
            date("h:i:sa") returns the current time of the day in hours, minutes, seconds, and AM or PM
            date("Y/m/d") returns the current date in year, month, and day
            date("l", mktime(0, 0, 0, 7, 1, 2000)) returns the day of the week of July 1, 2000
            date("Y/m/d", mktime(0, 0, 0, 7, 1, 2000)) returns the date of July 1, 2000 in year, month, and day
            date("Y") + 1 returns the current year plus 1
            date("Y") - 1 returns the current year minus 1
    */
?>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<?php // for loops

    for ($times = 1; $times <=5; $times++ ) // for loop, same as C++, can use times+=2, it will count by 2s (useful for even numbers when starting at 0, and odd numbers when starting at 1), can use tiems-=2, etc.
    {  
        echo $times . "<br>";
    }

?>

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- Form to count to a number with a for loop --->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label>Enter a number to count to</label><input type="text" name="counter">
        <input type="submit" value="Start">
    </form>
</body>
</html>

<?php // for loops

    $counter = $_POST['counter'];

    for ($counter = 0; $counter <= 10; $counter++) {
        echo $counter . "<br>";
    }
    
?>

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <label>Enter a number to count to</label><input type="text" name="counter">
        <input type="submit" value="Start">
    </form>
</body>
</html>

<?php // for loops

    $counter = $_POST['counter'];

    for ($i = 1; $i < $counter; $i++)  // count up from 1 to the number entered
    {
       echo $i . "<br>";
    }
    {
       echo $i . "<br>";
    }
    
    for ($i = $counter; $i > 0; $i--)  // count down from the number entered to 0
    {    
        echo $i . "<br>";
    }
?>

----------------------------------------------------------------------------------------------------------------

<?php //while loop, not good for limited amount of times, better used in an infinite amount of tinmes
    $counter = 0;
    while ($counter <= 10);
    {
        $counter++;
        echo $counter . "<br>";
    }
?>

----------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- counting using while loop until a stop button is pressed --->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "index.php" method = "post">
        <input type = "submit" name = "stop" value = "stop">
    </form>
</body>
</html>

<?php 
    $seconds = 0;
    $running = true;
    $stop = $_POST["stop"];

    while($running)
    {
        if (isset($stop)) //isset() function is used to check whether a variable is set or not, in other words, it is used to check whether a variable is declared or not. in this case, it is used to check whether the stop button is clicked or not.
        {
            $running = false;
        }
        else
        {
            $seconds++;
            echo $seconds . "<br>";
        }
        
    }
    
?>

----------------------------------------------------------------------------------------------------------------

<?php //arrays

    $foods = array("apple", "orange", "banana", "coconut"); //index starts with 0
    
    echo $foods[1] . "<br>"; // can only access one element at a time with echo
    echo $foods[3] . "<br>";

    $foods[1] = "grapes"; //changing the value of an element
    echo $foods[1] . "<br>";
    echo "<br>";

    array_push($foods, "pinapple"); // array_push() function adds an element to the end of an array
    array_push($foods, "pear", "watermelon"); //can add multiple elements at once
    array_pop($foods); // array_pop() function removes the last element from an array
    array_shift($foods); // array_shift() function removes the first element from an array
    array_unshift($foods, "kiwi"); // array_unshift() function adds an element to the beginning of an array
    array_unshift($foods, "grapefruit", "blueberry"); //can add multiple elements at once
    array_splice($foods, 2, 0, "mango"); // array_splice() function adds an element to an array at a specific index, the first parameter is the array, the second parameter is the index where the element will be added, the third parameter is the number of elements to be removed, the fourth parameter is the element to be added
    array_splice($foods, 3, 2); //can remove multiple elements at once
    $reversed_foods = array_reverse($foods); // array_reverse() function reverses the order of the elements in an array, it does not change the original array, therefore, you must assign the result to a new variable or the original array like so $foods = array_reverse($foods)
    echo count($foods) . "<br>"; // count() function returns the number of elements in an array

    foreach($foods as $food) //foreach loop to access all elements, $food is a variable that will hold the value of each element, the as keyword is used to assign the value of each element to the variable $food, without it, the loop will not work
    {
        echo $food . "<br>";
    }
    echo "<br>";

    echo "<b>Reversed Array</b>". "<br>";

    foreach ($reversed_foods as $reversed_food)
    {
        echo $reversed_food . "<br>";
    }
?>

----------------------------------------------------------------------------------------------------------------

<?php //Associative array = key + value pairs
    //associative array syntax: $arrayName = array("key" => "value", "key" => "value", ...);
    $capitals = array("USA" => "Washingtion", "Iraq" => "Baghdad");

    echo $capitals["USA"] . "<br>"; // to output one value from the array using its key, this will output "Washington", the value associated with the key "USA"

    $capitals["USA"]  = "Las Vegas"; // to change the value associated with the key "USA" to "Las Vegas"
    $capitals["France"] = "Paris"; // to add a new key + value pair to the array
    array_pop($capitals); // to remove the last key + value pair from the array
    array_shift($capitals); // to remove the first key + value pair from the array
    $keys = array_keys($capitals); // to output all the keys in the associative array
    $values = array_values($capitals); // to output all the values in the associative array
    $capitals_FLP = array_flip($capitals); // to flip the keys and values in the associative array, will return a new associative array, or reassign the flipped array to the original array
    $capitals_REV = array_reverse($capitals); // to reverse the associative array, will return a new associative array, or reassign the reversed array to the original array
    echo count($capitals); // to output the number of key + value pairs in the associative array

    foreach($capitals as $key => $value) // to output all the values in the associative array
    {
        echo "{$key}, {$value} <br>";
    }

    foreach($keys as $key) // to output all the keys in the associative array
    {
        echo $key . "<br>";
    }

    //the flipped array
    foreach($capitals_FLP as $key => $value) // to output all the values in the associative array
    {
        echo "{$key}, {$value} <br>";
    }

    //the reversed array
    foreach($capitals_REV as $key => $value) // to output all the values in the associative array
    {
        echo "{$key}, {$value} <br>";
    }

?>

----------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- Associative array Excersice -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "index.php" method = "post">
         <label>Enter your Country</label>
         <input type = "text" name = "country"> <!-- add the name attribute to the textbox to get the text value of the country and print out the capital with the php code -->
         <input type ="submit">
    </form>
</body>
</html>

<?php

    $capitals = array("USA" => "Washingtion", "Iraq" => "Baghdad");

    //print like this, My version
    $capital = $_POST["country"]; //get the value of the country that the user entered in the textbox and store it in the variable country
    echo "Your Capitale ise " . $capitals[$capital] . "<br>"; //print out the capital of the country that the user entered in the textbox

    //OR, ,,, Teacher version
    $capital = $capitals[$_POST["country"]]; //this code does the same as the one above
    echo "your Capital is {$capital}"; //print out the capital of the country that the user entered in the textbox

?>

----------------------------------------------------------------------------------------------------------------

<?php //isset() and empty() functions
    // isset() function is used to check whether a variable is set or not, it returns true if variable is set and not null. including (0, false, "", true)
    // empty() function is used to check whether a variable is empty or not, it returns true if variable is empty, false, null or ""
    $username = false;

    echo isset($username); // Output: 1, i.e. true, if it was null, it would return nothing, i.e. false

    if(isset($username)) 
    {
        echo "this variable is set" . "<br>";
    }
    else
    {
        echo "this variable is not set" . "<br>";
    }

    echo empty($username);

    if(empty($username)) 
    {
        echo "this variable is empty" . "<br>";
    }
    else
    {
        echo "this variable is not empty" . "<br>";
    }
?>

----------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- isset() and empty() excercise --->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action ="index.php" method = "post">
        <label>Username: </label>
        <input type = "text" name = "username"><br>
        <label>password: </label>
        <input type = "text" name = "password"><br>
        <input type = "submit" name = "login" value = "Log In">

    </form>
</body>
</html>

<?php

    foreach ($_POST as $username => $password) //$_POST is an associative array, and displaying it will display everything in the form
    {
        echo "{$username} = {$password} <br>";
    }
    // the part above is just to display the values of the form, it is not necessary

    if(isset($_POST["login"])) //my own code, teacher assigned the $_POST parameters to variables, which makes it easier to read
    {
        if(empty($_POST["username"]) && empty($_POST["password"]))
        {
            echo "Please Enter your username and password! <br>";
        }

        elseif(empty($_POST["username"]))
        {
            echo "Please Enter your username! <br>";
        }

        elseif(empty($_POST["password"]))
        {
            echo "Please Enter your password!";
        }
        else
        {
            echo "Welcome, ". $_POST["username"] . "! your password is" . $_POST["password"];
        }  
    }
    
?>

----------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- Radio Buttons --->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <input type="radio" name="Fruit" value="Potato">Potato <br>
        <input type="radio" name="Fruit" value="Tomato">Tomato <br>
        <input type="radio" name="Fruit" value="Macho">Macho <br>
        <input type="radio" name="Fruit" value="Bambino">Bambino <br>
        <input type="submit" name="confirm" value="Confirm"> <br>
</body>
</html>

<?php
    /*
    foreach ($_POST as $name => $value)
    {
        echo $name . " " . $value . "<br>";
    }
    */

    if(isset($_POST["confirm"]))
    {   
        if(empty($_POST["Fruit"]))
            {
                echo "Please choose a fruit <br>";
            }
        else
            {
                $Fruit = $_POST["Fruit"];
            
                    if($Fruit == "Potato")
                        {
                            echo "you have selected {$Fruit} <br>";
                        }
                    else if($Fruit == "Tomato")
                        {
                            echo "you have selected {$Fruit} <br>";
                        }
                    else if($Fruit == "Macho")
                        {
                            echo "you have selected {$Fruit} <br>";
                        }
                    else if($Fruit == "Bambino")
                        {
                            echo "you have selected {$Fruit} <br>";
                        }

                    //Solving the problem using switch case

                    switch($Fruit)
                    {
                        case "Potato":
                            echo "you have selected {$Fruit} <br>";
                            break;
                        case "Tomato":
                            echo "you have selected {$Fruit} <br>";
                            break;
                        case "Macho":
                            echo "you have selected {$Fruit} <br>";
                            break;
                        case "Bambino":
                            echo "you have selected {$Fruit} <br>";
                            break;
                    }
            }
        
        
    }
    
?>

----------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- Checkboxes --->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <input type="checkbox" name="potato" value="Potato">Potato <br> <!--- Checkboxes had different names and different valuse, therefore they are not an associative array. --->
        <input type="checkbox" name="tomato" value="Tomato">Tomato <br>
        <input type="checkbox" name="macho" value="Macho">Macho <br>
        <input type="checkbox" name="bambino" value="Bambino">Bambino <br>
        <input type="submit" name="confirm" value="Confirm"> <br>
</body>
</html>

<?php
        if(isset($_POST["confirm"]))
        {
            if(isset($_POST["potato"])) //no else statement so that all if statements will be executed
            {
                echo "Potato!!!! <br>";
            }

            if(isset($_POST["tomato"]))
            {
                echo "Tomato!!!! <br>";
            }

            if(isset($_POST["macho"]))
            {
                echo "Macho!!!! <br>";
            }

            if(isset($_POST["bambino"]))
            {
                echo "Bambino!!!! <br>";
            }

            if(empty($_POST["potato"]))
            {
                echo "NOT Potato!!!! <br>";
            }

            if(empty($_POST["tomato"]))
            {
                echo "NOT Tomato!!!! <br>";
            }

            if(empty($_POST["macho"]))
            {
                echo "NOT Macho!!!! <br>";
            }

            if(empty($_POST["bambino"]))
            {
                echo "NOT Bambino!!!! <br>";
            }
        }

?>

----------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- Checkboxes with an associative array, all values are linked with the same key "name" --->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <input type="checkbox" name="Fruits[]" value="Potato">Potato <br> <!--- Checkboxes had different names and different valuse, therefore they are not an associative array. --->
        <input type="checkbox" name="Fruits[]" value="Tomato">Tomato <br>
        <input type="checkbox" name="Fruits[]" value="Macho">Macho <br>
        <input type="checkbox" name="Fruits[]" value="Bambino">Bambino <br>
        <input type="submit" name="confirm" value="Confirm"> <br>
</body>
</html>

<?php
        if(isset($_POST["confirm"]))
            {
            $fruits = $_POST["Fruits"];
            echo $fruits[0]; // To print the first element of the array of the selected checkboxes.

            foreach($fruits as $fruit) // To print all the elements of the array of the selected checkboxes.
            {
                echo $fruit . "<br>";
            }
            
        }
?>

----------------------------------------------------------------------------------------------------------------

<?php //Functions

    function happy_birthday($firstname, $age) //how to define a function, within the parenthesis are the parameters, parameters are like temporary variables, placeholders for data that you pass into the function, but they are only available within the function, can have multiple parameters, separated by commas
    {
        echo "Heppi parthdey, {$firstname}<br>";
        echo "yo now {$age} Y.O <br>";

        return "Happy Birthday, {$firstname}! You are now {$age} years old!"; //return statement, alternative to echo, to be used properly, you must assign the function to a variable, and then echo the variable, like so: $message = happy_birthday("spinner", 14); echo $message; "$message" here is the variable that the return function is storing the value in. return ends the function, so anything after it will not be executed.
    }
    

    happy_birthday("spinner", 14); //how to call a function, within the parenthesis you can pass arguments, arguments are data like strings, numbers, variables, etc.
    happy_birthday("yoyo", 7);

    $happy = happy_birthday("monkey", 3); //outputing the return statement of the function, by storing it in a variable, and then echoing the variable
    echo $happy;
?>

----------------------------------------------------------------------------------------------------------------

<?php //Functions even-odd example, my code

    function is_even($number)
    {
        $number = $number % 2;
        if($number == 0)
        {
            echo "this number is even";
        }
        else
        {
            echo "this number is odd";
        }

    }

    is_even(14);
?>

----------------------------------------------------------------------------------------------------------------

<?php //Functions even-odd example, copilot code

    function is_even($number)
    {
        $result = $number % 2;
        return $result == 0 ? "Even" : "Odd"; //Ternary operator, if result is 0, return "Even", else return "Odd", can only be used for simple conditions, best used with return statements, can be used outside return statements, but it is not recommended because it is hard to read and not good practice, like so: $result = $number % 2 == 0 ? "Even" : "Odd";

    }

    echo is_even(13);
?>

----------------------------------------------------------------------------------------------------------------

<?php //Functions even-odd example, teacher code 1

    function is_even($number)
    {
        $result = $number % 2;
        return $result;

    }

    echo is_even(2);
?>

----------------------------------------------------------------------------------------------------------------


<?php //Functions even-odd example, teacher code 2

    function is_even($number)
    {
    
        return $number % 2;

    }

    echo is_even(3);
?>

----------------------------------------------------------------------------------------------------------------

<?php //Functions hypothenuse example, teacher code

    function hypothenuse ($a, $b) //Function to calculate the hypothenuse(longest side of a right triangle) using the Pythagorean theorem, can specify the data type of the parameters like so: function hypothenuse (int $a, int $b)
    {
        $c = sqrt($a ** 2 + $b ** 2);
        return $c;
    }

    echo hypothenuse(3, 4);
    
?>

----------------------------------------------------------------------------------------------------------------


<?php //string functions

    $username = "Potato The Man";
    $use_arr = array("Potato" ,"The", "Man");
    $phone = "123-456-7890";
    
    $username = strtolower($username); //function to convert all characters to lowercase
    $username = strtoupper($username); //function to convert all characters to uppercase
    $username = trim($username); //function to remove white spaces before and after the string
    $username = str_pad($username, 20, "*"); //function to add padding to the string
    $username = str_replace($username[7], "F", $username); //function to replace a character in the string, syntax: str_replace("character to be replaced", "character to replace with", "string")
    $phone = str_replace("-", "", $phone); //same as above with direct replacement of a substring
    $username = substr($username, 2, 8); //function to extract a substring from the string, syntax: substr("string", "start index", "length of substring")
    $username = substr($username, 7); // can skip the length parameter to extract the rest of the string from the start index
    $phone = str_repeat($phone, 1); //function to repeat the string, syntax: str_repeat("string", number of times to repeat)
    $username = strrev($username); //function to reverse the string
    $username = str_shuffle($username); //function to shuffle the string
    $count = str_word_count($username); //function to count the number of words in the string
    $equals = strcmp($username, "Potato Man"); //function to compare two strings, returns 0 if equal, 1 if not equal, -1 if it has less characters   
    $length = strlen($username); //function to count the number of characters in the string
    $index = strpos($username, " "); //function to find the position of a character in the string, syntax: str_pos("string", "character to find"), returns the index of the first occurence of the character
    $fullname = explode(" ", $username); //function to split the string into an array, syntax: explode("character to split by", "string")
    $use_arr = implode(" ", $use_arr); //function to join the array into a string, syntax: implode("character to join by", "array")
    echo $use_arr . "<br>";

    foreach ($fullname as $full) {
    echo $full . "<br>";
    }

?>

----------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- sanitize/validate user input -->
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        <input type="text" name="name" placeholder="Enter your name"> <!-- placeholder is a grey text that appears in the input field -->
        <input type="text" name="age" placeholder="Enter your age">
        <input type="text" name="email" placeholder="Enter your email">
        <input type="text" name="phone" placeholder="Enter your phone">
        
        <input type="submit" name="submit" value="login"><br>
        
        
</body>        
</html>


<!--- the code below can be inserted by the user in the name field, the value of $_POST["name"] will be the code below and it will be inserted into the HTML output HERE EXACTLY by the echo statement: echo "Hello {$username}"; This can lead to a Cross-Site Scripting (XSS) vulnerability, where the script entered by the user is executed in the browser.
        <script> alert("You have a VIRUS");</script> --->

<?php 
    if(isset($_POST["submit"]))
    {
        $username = filter_input(INPUT_POST, "name", FILTER_SANITIZE_SPECIAL_CHARS); // FILTER_SANITIZE_SPECIAL_CHARS will remove any special characters from the input, filter_input is a function that filters the input from the user, syntax: filter_input(type of input, name of input, filter type)
        echo "Hello {$username}";

        $age = filter_input(INPUT_POST, "age", FILTER_SANITIZE_NUMBER_INT); // FILTER_SANITIZE_NUMBER_INT will remove any non-numeric characters from the input and return the integer value, FILTER_VALIDATE_INT will validate the input as an integer, if it is not an integer, it will return false, empty string or NULL
        if(empty($age)) // if the age is empty, it will return true
        {
            echo "<br>That number wasn't valid";
        }
        else
        {
            echo "<br> Your age is {$age}";
        }

        $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL); // FILTER_SANITIZE_EMAIL will remove any illegal characters from the email, FILTER_VALIDATE_EMAIL will validate the email, if it is not a valid email, it will return false, empty string or NULL
        if(empty($email))
        {
            echo "<br>That email wasn't valid";
        }
        else
        {
            echo "<br> Your email is {$email}";
        }
    }   


    
?>

----------------------------------------------------------------------------------------------------------------

<?php
    include ("header.html"); // include() function is used to include a file in another file., if the file is not found, it will continue the execution of the script.
    
                            /* 
                            include() includes a file and continues if not found.
                            include_once() includes a file only once.
                            require() includes a file and stops if not found.
                            require_once() includes a file only once.
                            require_once() is for functions, classes, or settings.
                            include_once() is for non-critical HTML or text.
                            */

?>

----------------------------------------------------------------------------------------------------------------

<?php //Cookies

    setcookie("fav_food", "Potato", time() + 86400, "/" );           // setcookie() function is used to set a cookie in PHP, they are stored as associative array in $_COOKIE variable. syntax: setcookie(name, value, expire, path, domain, secure, httponly);
    setcookie("fav_shit", "Dog_shit", time() + (86400 * 3), "/" );   // time() is used to get the current time, 86400 is the time in seconds, 86400 seconds = 1 day
                                                                     // "/" is the default file path, it means the cookie is available in the entire website.
                                                                     // to remove a cookie set the time to time() - 0

    foreach($_COOKIE as $key => $value)
    {
        echo "{$key} = {$value} <br>";
    }

    if (isset($_COOKIE["fav_food"]))
    {
        echo " buy some {$_COOKIE["fav_food"]}";
    }
    else
    {
        echo "dunno what you like, eat shit";
    }
?>

----------------------------------------------------------------------------------------------------------------


<?php   //----------------------------File: Index.php--------------------------------------------------------
        //Sessions
        // Session is a way to store information (in variables) to be used across multiple pages. like login information

        session_start(); //you'll need to start the session before any html is displayed
    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Login Page
    <a href ="home.php">Home Page</a><br>
</body>
</html>



<?php

    $_SESSION["username"] = "Mohammad"; //session variable, here username is the key and MT is the value, an associative array, we're storing the value of username in the session variable so that it can be accessed in other pages
    $_SESSION["password"] = "qwerty";

    echo $_SESSION["username"] . "<br>"; //
    echo $_SESSION["password"] . "<br>"; //
?>



<?php ////----------------------------File: home.php--------------------------------------------------------
        session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
</head>
<body>
Home Page
<a href ="index.php">Login Page</a><br>
</body>
</html>

<?php

    echo $_SESSION["username"] . "<br>"; // there was no need to define the key value pair again because we have started the session with session_start(); and can access its content from the session super global variable $_SESSION
    echo $_SESSION["password"] . "<br>"; //

?>

----------------------------------------------------------------------------------------------------------------

<?php   
        //----------------------------File: Index.php--------------------------------------------------------
        //Session Excersice: login and logout
        session_start();    
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action ="index.php" method ="post">
        <label>Username: </label>
        <input type = "text" name = "username" placeholder = "Enter your Username">
        <label>Passowrd: </label>
        <input type = "password" name = "password" placeholder = "Enter your Password">
        <input type = "submit" name = "submit" value = "Login">
    </form>
</body>
</html>



<?php
    if(isset($_POST["submit"]))
    {
        if(!empty($_POST["username"] && $_POST["password"]))
        {
        $_SESSION["username"] = $_POST["username"];
        $_SESSION["password"] = $_POST["password"];
    
        header("location: home.php"); //header() is a function to redirect you to a different page
        }

        else
        {
            echo "Missing Username or Password";
        }
    }
    
?>

<?php ////----------------------------File: home.php--------------------------------------------------------
        session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
</head>
<body>
Home Page
<form action = "home.php" method = "post">
        <input type = "submit" name = "logout" value ="logout">
</form>
</body>
</html>

<?php

    echo $_SESSION["username"] . "<br>"; 
    echo $_SESSION["password"] . "<br>";

    if(isset($_POST["logout"]))
    {
        session_destroy(); // Function to end yor session
        header("location: index.php"); //redirect back to login page
    }

?>

----------------------------------------------------------------------------------------------------------------

<!DOCTYPE html> <!--- $_SERVER Super Global Variable
                Contains headers, paths, and script locations --->

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form action = "<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method = "post"> <!--- can add a php tag in the middle of an html tag parameter, using $_SERVER["PHP_SELF"] to reference this page means that changing the file name won't affect the page, it will still work without extra coding, htmlspecialchars() is a filter used to protect against cross-site scripting--->
    username:<br>
    <input type = "text" name = "username">
    <input type = "submit" name = "submit"><br>
</body>
</html>

<?php

    foreach($_SERVER as $key => $value) //this will display all key value pairs found within $_SERVER, notable ones are : "PHP_SELF = /website/index.php" is the location of this page, "REQUEST_METHOD = GET" specifiies the type of method used
    {
        echo "{$key} = {$value} <br>";
    }
    
    
    if($_SERVER["REQUEST_METHOD"] == "POST") //Checks to see if the key REQUEST_METHOD is associated with the value POST from the $_SERVER Global Variable's Associatve Array
      {
          echo "it's POST <br>";
      }
      else
      {
        echo "it's GET <br>";
      }

?>

----------------------------------------------------------------------------------------------------------------

<?php //Password Hashing

    $password = "kissmyass123";

    $hash = password_hash($password, PASSWORD_DEFAULT); //password_hash() is a function that hashes a password, Syntax: password_hash(the Password, the Hashing Algorithm); PASSWORD_DEFAULT is a CONSTANT for bcrypt algorithm for hashing

    echo $hash . "<br>";

    if(password_verify("fusak", $hash)) //function to compare a plaintext password (entered by the user) with the hash of that password, if they match, it will returen true
    {
        echo "logged in";
    }
    else
    {
        echo "Incorrect Password";
    }
?>

----------------------------------------------------------------------------------------------------------------

<?php ////----------------------------File: database.php--------------------------------------------------------
        //MySQL Connection
        //Two ways to connect SQL databases in PHP, 1.MySQLi Extention, 2.PDO (PHP Data Objects) "object Oriented Programming" better but harder option

    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "businessdb";
    $conn = "";

    

    try{ // try{} block is used for exeption handling, when a code can cause a fatal error, try it here and if it occurs, handle it some other way using catch(){}
        $conn = mysqli_connect($db_server, $db_user, $db_pass, $db_name); //the function to connect to the database, needs four arguments, serve rname, user name, password, database name)

    }
    catch(mysqli_sql_exception) // catch() is replacing this fatal error code with a more readable error message
    {
        echo "could not connect";
    }

    if($conn)
    {
        echo "you are connected";
    }
?>

----------------------------------------------------------------------------------------------------------------

<?php //SQL Query to Insert into users table
    include("database.php");

    $username = "3arofta";
    $password = "sam3lak";
    $hash = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (user, password)
            VALUES ('$username', '$hash')"; //you can type a query to execute like so

   try
    {
        mysqli_query($conn, $sql); //to submit the query, Syntax:  mysqli_query(connection, query)
        echo "User Inserted";
    }
    catch(mysqli_sql_exception)
    {
        echo "couldn't Register";
    }
    

    mysqli_close($conn); // to close the mysql connection
?>

----------------------------------------------------------------------------------------------------------------

<?php //SQL Query to select 1 row from users table
    include("database.php");

    $sql = "SELECT * FROM users WHERE user = 'MrMoe'";

        $query = mysqli_query($conn, $sql);
    
        if(mysqli_num_rows($query) > 0) // Function to return how many rows are within the sql query result
        {
            $row = mysqli_fetch_assoc($query); // this function returns the next available row within our object (the query result is stored as an object) assoc is for associative, $row is an associative array
            
            echo $row["password"] . "<br>"; //can print them indivdually or by using a foreach block

            foreach ($row as $column => $rows)
            {
                echo "{$column}: {$rows}" . "<br>";
            }
            
            
        }
        else
        {
            echo "no data";
        }
    


    mysqli_close($conn);
?>

----------------------------------------------------------------------------------------------------------------

<?php //SQL Query to select multiple rows from users table
    include("database.php");

    $sql = "SELECT * FROM users";

        $query = mysqli_query($conn, $sql);
    
        if(mysqli_num_rows($query) > 0) // Function to return how many rows are within the sql query result
        {
            while($table = mysqli_fetch_assoc($query)) // this function returns the next available row within our object (the query result is stored as an object) assoc is for associative, $row is an associative array
            {
                foreach ($table as $column => $row)
                {
                    echo "{$column}: {$row}" . "<br>";
                }
            }
            
        }
        else
        {
            echo "no data";
        }
    


    mysqli_close($conn);
?>

----------------------------------------------------------------------------------------------------------------

<?php //Registration Form Project
    include("database.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action = "<?php htmlspecialchars ($_SERVER["PHP_SELF"]) ?>" method = "post">
    <h2>Welcome to Hamagram!</h2>
    <label>username: </label><br>
    <input type = "text" name = "username" placeholder = "Enter your Username"><br>
    <label>password: </label><br>
    <input type = "password" name = "password" placeholder = "Enter your password"><br>
    <input type = "submit" name = "login" value = "Register"><br>


    </form>
</body>
</html>

<?php
    if($_SERVER["REQUEST_METHOD"] == "POST")
    {
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

        if(empty($username) && empty($password))
        {
            echo "please Enter a username & a password";
        }
        elseif(empty($username))
        {
            echo "please Enter a username";
        }
        elseif(empty($password))
        {
            echo "please Enter a password";
        }
        else
        {
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $sql = "INSERT INTO users (user, password) VALUES ('$username', '$hash')";
            
            try
            {
                mysqli_query($conn, $sql);
                echo "Registered Successfully!";
            }
            catch(mysqli_sql_exception)
            {
                echo "that username is taken!";
            }
        }
    }



    mysqli_close($conn);
?>
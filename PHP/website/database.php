<?php //SQL Connection
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
        echo "could not connect <br>";
    }

    if($conn)
    {
        echo "";
    }
?>
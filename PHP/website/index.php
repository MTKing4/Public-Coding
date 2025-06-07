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
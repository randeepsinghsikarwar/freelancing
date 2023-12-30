<?php
    $host = '127.0.0.1';
    $db = 'comp2002';
    $user = 'tsmith'; // root only for dev!
    $pass = 'mypass';

    $dsn = "mysql:host=$host;dbname=$db";

    $pdo = new PDO($dsn, $user, $pass);

    /*$stmnt = $pdo->prepare('SELECT * FROM users');
    $stmnt->execute();

    echo "<pre>";
    print_r($stmnt->fetchAll(PDO::FETCH_ASSOC));
    echo "</pre>";*/
    /*http://localhost/
    ?email=test123@gmail.com
    &pass=1234
    &fname=Bob
    &lname=Dole
    */
    $email = $_GET["email"];
    $getPass = $_GET["pass"];
    $fname = $_GET["fname"];
    $lname = $_GET["lname"];

    $stmnt = $pdo->prepare('SELECT * FROM users WHERE 
        email = ?');
    $stmnt->execute([$email]);

    if($stmnt->fetch()) {
        echo "Record already exists!";
    } else {
        try {
            $sql = "INSERT INTO users VALUES(
            UUID(), CURDATE(), CURDATE(),
            :email, :pass, :fname, :lname)";
            $stmnt = $pdo->prepare($sql);
            $stmnt->execute([
                "email" => $email,
                "pass" => $getPass,
                "fname" => $fname,
                "lname" => $lname,
            ]);
            echo "It worked!!!";
        } catch(Exception $e) {
            echo "<pre>";
            print_r($e);
            echo "</pre>";
            //echo "Sorry but there was an error inserting your data! 
            //Please contact Id. Error Id: 123-456-678";
        }
    }

    
    
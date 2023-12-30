<?php
$host = '127.0.0.1';
$db = 'comp2002';
$user = 'root';
$pass = '';

// data source name
$dsn = "mysql:host={$host};dbname={$db}";

// this is when PDO attempts to connect!
// but will not warn you about database!
$pdo = new PDO($dsn, $user, $pass);

echo "Connected<br />";

$id = $_GET["id"];
// go to http://localhost/?id=1%20OR%201=1;--
// see that we've allowed SQL injection!
/*
// never do it this way! SQL injection!
$stmnt = $pdo->prepare("SELECT * FROM airbnb WHERE id=$id");
$stmnt->execute();
*/

// always use prepared statements
// to prevent SQL injection
//$stmnt = $pdo->prepare("SELECT * FROM airbnb WHERE id=? or price=?");
// pass in array of parameters
// order matters
// each element of the array must match a "?" in the prepare
//$stmnt->execute(Array($id, 250.00));

// these are named parameters
$stmnt = 
  $pdo->prepare("SELECT * FROM airbnb WHERE id=:id or price=:price");
  // order doesn't matter anymore!
$stmnt->execute(Array(
  "price" => 250.00,
  "id" => $_GET["id"]
));

$resultset = $stmnt->fetchAll(PDO::FETCH_ASSOC);
echo "<pre>";
//print_r($resultset);
foreach($resultset as $result) {
    print_r($result);
}
echo "</pre>";


$stmnt = $pdo->prepare("SELECT * FROM airbnb");
$stmnt->execute();


echo "<pre>";
// fetchAll you can do for or foreach
// but for fetch, you should use while
// so it can check if the record exists
// default is PDO::FETCH_BOTH
// PDO::FETCH_ASSOC = fetch an associative array; $row["id"]
// PDO::FETCH_NUM = fetch numerical indexed array; $row[0]
// PDO::FETCH_OBJ = fetch a PHP class/object; $row->id
// FETCH type does not affect the data returned itself
// only the structure in which it is returned
while($row = $stmnt->fetch(PDO::FETCH_OBJ)) {
    //print_r($row);
    echo $row->price . "<br />";
}

echo "</pre>";


























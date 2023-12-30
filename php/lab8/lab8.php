<?php

$host = '127.0.0.1';
$db = 'comp2002';
$user = 'root';
$pass = '';
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AirBNB</title>
    <style>
        table, td, tr {
            border: 1px solid black;
        }

        td, th {
            padding: 4px;
        }
    </style>
  </head>
  <body>
    <?php
        $dsn = "mysql:host=$host;dbname=$db";
        $pdo = new PDO($dsn, $user, $pass);

        $state = '%';
        $maxGuest = '0';
        if(isset($_GET["state"])) {
            $state = $_GET["state"];
        }

        if(isset($_GET["maxGuest"])) {
            $maxGuest = $_GET["maxGuest"];
        }

        $query = "SELECT A.*, B.name AS city_name, B.state_id, 
            CONCAT(C.first_name, ' ', C.last_name) AS host_name, D.name AS state_name 
            FROM places A
            LEFT JOIN cities B on A.city_id = B.id
            LEFT JOIN users C on A.user_id = C.id
            LEFT JOIN states D ON B.state_id = D.id
            WHERE D.name LIKE :state
            AND A.max_guest >= :maxGuests
            ORDER BY price_by_night DESC";

        $stmnt = $pdo->prepare($query);

        $stmnt->execute(["state" => $state, "maxGuests" => $maxGuest]);
    ?>
    <table>
        <thead>
        <tr>
            <th>Host Name</th>
            <th>Air BNB Name</th>
            <th>City Name</th>
            <th>State Name</th>
            <th>Number of rooms</th>
            <th>Max # of guests</th>
            <th>Price</th>
        </tr>
    </thead>
    <tbody>
        <?php
            while($row = $stmnt->fetch(PDO::FETCH_ASSOC)) {
                echo "<tr>
                    <td>{$row['host_name']}</td>
                    <td>{$row['name']}</td>
                    <td>{$row['city_name']}</td>
                    <td>{$row['state_name']}</td>
                    <td>{$row['number_rooms']}</td>
                    <td>{$row['max_guest']}</td>
                    <td>$" . number_format($row['price_by_night'], 2) . "</td>
                    </tr>
                ";
            }
        ?>
    </tbody>
    </table>
  </body>
</html>
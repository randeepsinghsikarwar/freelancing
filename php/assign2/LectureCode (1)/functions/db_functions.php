<?php
require 'db_config.php';

function query_airbnb($state, $maxGuest) {
    $pdo = new PDO(DSN, USER, PASS);

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

    return $stmnt->fetchAll(FETCH_MODE);
}

function query_users() {
    $pdo = new PDO(DSN, USER, PASS);

    $stmnt = $pdo->prepare('SELECT * FROM users');
    $stmnt->execute();

    return $stmnt->fetchAll(FETCH_MODE);
}
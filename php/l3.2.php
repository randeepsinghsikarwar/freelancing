<?php
    print_r($_POST);
    echo "<br /><br />";
    echo "<p>Hi {$_POST["name"]} from {$_POST["country"]}</p>";
    echo "<p>Welcome to  {$_POST["country2"]}</p>";

    echo "<p>I'm glad to hear you want to visit: ";
    echo "<ul>";

    foreach($_POST["countrySelected"] as $sel) {
        echo "<li>{$sel}</li>";
    }

    echo "</ul></p>";
?>
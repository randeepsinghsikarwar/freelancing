<?php
  if(isset($_POST["name"])) {
    $name = $_POST["name"];

    if($name == "Travis") {
        echo "Instructor";
    } else {
        echo "Student";
    }
  }
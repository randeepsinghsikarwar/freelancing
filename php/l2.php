<?php // let the interpreter know we are going use write PHP code
  $title = "Lecture #2!!!";
  $num = 15;
  $list = array(1, 2, 3);

  // php doesn't care when you change a variable type
  $num = "hello\n";
  echo $num;

  $num = 15;
  echo $num;

  // this breaks! PHP doesn't care about data type unless
  // you use it in a way that breaks things!
  //echo $num + "nooo!";

  $name = "Travis";
  // period operator is for concatenation
  echo "Hello, " . $name;

  $hello = "hello";
  $world = "world";
  $myvar = "myvar";
  $prints = "prints";

  echo "<p>Testing " . $hello . " something " . $world .
  " and " . $myvar . " its ugly " . $prints . "</p>";

  // {} brackets mean I want to run code in this string!
  echo "<p>Test {$hello} something {$world} and {$myvar} its 
  ugly {$prints}</p>";

  echo "<br />";

  // single quotes -- don't parse PHP in string
  echo 'Test {$hello} something {$world} and {$myvar} its 
  ugly {$prints}';

  // we are done writing our PHP code -- closing tag below
?> 

<html>
  <head>
    <title>Ignore Me</title>
  </head>
  <body>
  <p><?php echo $title; ?></p>

  <?php
    // print the structure and contents of the variable
    echo "<p>GET:";
    print_r($_GET); // the data from the querystring
    echo "</p>";
    echo "<p>POST:";
    print_r($_POST); // the data posted to server, form JS, etc.
    echo "</p>";
  ?>
  <p>Below is an example of a querystring, accessible via $_GET</p>
  <p>http://localhost/?name=Travis&lName=Smith&class=COMP2002</p>

  <?php
  if(isset($_GET["lName"])) {
    echo $_GET["lName"];
  }
    
  ?>
</body>
</html>

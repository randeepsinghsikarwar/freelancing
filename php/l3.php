<?php
    // below commented code are just examples of each array in PHP
    /*$numberArray = Array(1,2,3,4,5);
    echo "Size of array: " . count($numberArray) . "<br />";
    
    // outputs 12345
    for($i = 0; $i < count($numberArray); $i++) {
        echo $numberArray[$i];
    }

    echo "<br />";
    // outputs 6789
    $w = 6;
    while($w < 10) {
        echo $w;
        $w++;
    }

    echo "<br />";
    $dw = 10;
    do {
        echo $dw;
    } while($dw < 10);

    // this is by value, so updating the array has no effect
    echo "<br />";
    foreach($numberArray as $num) {
        $num = 54;
    }
    // the array is the same!
    print_r($numberArray);

    // must use the reference operator (&) to update in a foreach loop
    echo "<br />";
    foreach($numberArray as &$num) {
        $num = $num * 10;
    }
    // the array has each value * 10 now!
    print_r($numberArray);

    // default keys for PHP array are numbers (0, 1, 2, 3)
    // but you can also specify a key for each value
    // $oldArray = Array("hello", "one", "two", "three");
    // IE) $oldArray[2] -- would be "two"
    $dictArray = Array("pizza" => 45.55, "hamburger" => 22.45);
    //print_r($dictArray);

    echo $dictArray["pizza"];*/

    $countries = Array("Canada", "United States", "Mexico");
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lecture Code</title>
  </head>
  <body>
    <form method="post" action="/submit.php">
        <p><label>First Name: <input type="text" name="name" id="name" /></label></p>
        <p> <!-- the output from
            this is identical to the next paragraph/select 
            tag below -->
            <select name="country" id="country">
                <option value="">-- Select your country --</option>
                <?php
                    for($i = 0; $i < count($countries); $i++) {
                        echo "<option value=\"{$countries[$i]}\">{$countries[$i]}</option>";
                    }
                ?>
            </select>
        </p>

        <p>
            <select name="country2" id="country2">
                <option value="">-- Select your country --</option>
                <?php
                    for($i = 0; $i < count($countries); $i++) {
                ?>
                        <option value="<?php echo $countries[$i] ?>">
                        <?php echo $countries[$i] ?></option>
                <?php
                    }
                ?>
            </select>
        </p>

        <p>
            <?php
                foreach($countries as $country) {
                    // add [] to the end of your "name" attribute in HTML
                    // to let PHP know you plan to send more than 1 value
                    echo "<label>{$country}<input type=\"checkbox\" name=\"countrySelected[]\" 
                        value=\"{$country}\" /></label>";
                }
            ?>
        </p>


        <p><input type="submit" /></p>
    </form>
  </body>
</html>
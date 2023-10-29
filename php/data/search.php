<?php
include('C:\xampp\htdocs\data\rooms.php');
?>

<!DOCTYPE html>
<html>

<head>
    <title>Searching</title>
    <link rel="stylesheet"href='main.css'/>

</head>

<body>
    <div class="parent">
        <form class="room-book" action="listing.php" method="post">
           <div> <label for="hotel">Hotel </label>
            <select name="hotel" id="hotel">
                <option value="">-- Select --</option>
                <?php
                foreach ($hotelNames as $hotel) {
                    echo "<option value='$hotel'>$hotel</option>";
                }
                ?>
            </select></div>

            <label>Bed Type</label>
            <?php
            if (isset($bedTypes)) {
                foreach ($bedTypes as $type) {
                    echo "<div><input type='checkbox' name='bedTypes[]' value='$type'>$type</div>";
                }
            } else {
                echo "Bed types are not defined.";
            }
            ?>

            <div><label for="days">Number of days to stay</label>
                <select name="days" id="days">
                    <option value="">--Select--</option>
                    <option value=1>1</option>
                    <option value=2>2</option>
                    <option value=3>3</option>
                    <option value=4>4</option>
                    <option value=5>5</option>
                    <option value=6>6</option>
                    <option value=7>7</option>
                    <option value=8>8</option>
                    <option value=9>9</option>
                    <option value=10>10</option>

                </select>
            </div>
            <input class="search-btn" type="submit" value="Search">
        </form>
    </div>
   
</body>

</html>
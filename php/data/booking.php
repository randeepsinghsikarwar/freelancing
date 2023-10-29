<?php 
include('C:\xampp\htdocs\data\rooms.php')
?>
<!DOCTYPE html>
<html>
<head>
    <title>Listing</title>
    <link rel="stylesheet"href='main.css'/>

</head>
<body>
    <?php
            echo "<div class='link'><a href='search.php'>< < Back to Search Page</a></div>";

        if(isset($_POST['roomID'])){
            $selectedRoomId = $_POST['roomID'];
            $hotel = null;
            $bed = null;
            $cost = null;

            foreach($hotelRooms as $room){
                if($room['id'] == $selectedRoomId){
                    $hotel = $room['hotelName'];
                    $bed = $room['bedType'];
                    $cost = $room['nightlyCost'];

                    break;
                }
            }

            echo "<p>Thank you for booking {$bed} bed room for \${$cost} per night at the {$hotel}.</p>";
            echo "<p>We hope you enjoy your stay.</p>";
        }
        else{
            echo "error";
        }
    
    ?>
</body>
</html>

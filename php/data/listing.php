<?php
include('C:\xampp\htdocs\data\rooms.php');
?>
<!DOCTYPE html>
<html>
<head>
    <title>Listing</title>
    <link rel="stylesheet"href='main.css'/>
</head>
<body>
    <?php
    if (isset($_POST['hotel']) && isset($_POST['bedTypes']) && isset($_POST['days'])) {
        $selectedHotel = $_POST['hotel'];
        $selectedBedTypes = $_POST['bedTypes'];
        $days = $_POST['days'];

        $availableHotels = [];

        foreach ($hotelRooms as $room) {
            if ($room['hotelName'] === $selectedHotel &&
                in_array($room['bedType'], $selectedBedTypes) &&
                $room['daysAvailable'] >= $days) {
                $availableHotels[] = $room;
            }
        }

        echo "<div class='link'><a href='search.php'>< < Back to Search Page</a></div>";

        echo "<h1>Rooms available at {$selectedHotel} for {$days
        } nights</h1>";
        if(!$availableHotels){
            echo "<p>No rooms matched your search. Please try again.</p>";
        }
        else{
        foreach ($availableHotels as $room) {
            echo "<div class='available'>";
            echo "<div class='description'>{$room['bedType']} bed @ \${$room['nightlyCost']} per night</div>";
            echo "<h3>Amenities</h3>";
            echo "<ul>";
            foreach ($room['amenities'] as $amenity) {
                echo "<li>$amenity</li>";
            }
            echo "</ul>";
            echo "<form action='booking.php' method='post'>";

            echo "<input type='hidden' name='roomID' value='{$room['id']}'>";

            echo "<input class='book-btn' type='submit' value='Book'>";
            echo "</form>";
            echo "</div>";
        }
    }

    } else {
        echo "<div class='link'><a href='search.php'>< < Back to Search Page</a></div>";
        echo "You must select a hotel, bed type and number of days to search for the room. Please go back to search and fill out the proper information.";
    }
    ?>
   
</body>
</html>

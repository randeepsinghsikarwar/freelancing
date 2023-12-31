<?php
$bedTypes = Array("Double", "Queen", "King");
$hotelNames = Array("Marriot", "Delta", "Holiday Inn", "Four Seasons");

$hotelRooms = Array(
    Array("id" => 0, "daysAvailable" => 9, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[3], "nightlyCost" => 150, "amenities" => Array("TV", "Fridge")),
    Array("id" => 1, "daysAvailable" => 8, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[2], "nightlyCost" => 200, "amenities" => Array("Fridge", "Kitchenette", "Microwave")),
    Array("id" => 2, "daysAvailable" => 5, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[1], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave")),
    Array("id" => 3, "daysAvailable" => 3, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[1], "nightlyCost" => 250, "amenities" => Array("TV", "Air Conditioning", "Ocean View")),
    Array("id" => 4, "daysAvailable" => 5, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[0], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 5, "daysAvailable" => 8, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[0], "nightlyCost" => 150, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 6, "daysAvailable" => 4, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[3], "nightlyCost" => 200, "amenities" => Array("Fridge", "Kitchenette", "Microwave")),
    Array("id" => 7, "daysAvailable" => 9, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[1], "nightlyCost" => 250, "amenities" => Array("TV", "Fridge")),
    Array("id" => 8, "daysAvailable" => 1, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[3], "nightlyCost" => 150, "amenities" => Array("Fridge", "Kitchenette", "Microwave")),
    Array("id" => 9, "daysAvailable" => 9, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[3], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 10, "daysAvailable" => 10, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[0], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge")),
    Array("id" => 11, "daysAvailable" => 3, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[2], "nightlyCost" => 100, "amenities" => Array("Fridge", "Kitchenette", "Microwave")),
    Array("id" => 12, "daysAvailable" => 5, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[0], "nightlyCost" => 200, "amenities" => Array("TV")),
    Array("id" => 13, "daysAvailable" => 2, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[3], "nightlyCost" => 250, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave")),
    Array("id" => 14, "daysAvailable" => 8, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[2], "nightlyCost" => 150, "amenities" => Array("TV", "Fridge")),
    Array("id" => 15, "daysAvailable" => 1, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[0], "nightlyCost" => 250, "amenities" => Array("TV", "Fridge")),
    Array("id" => 16, "daysAvailable" => 9, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[1], "nightlyCost" => 200, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 17, "daysAvailable" => 3, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[2], "nightlyCost" => 200, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 18, "daysAvailable" => 4, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[1], "nightlyCost" => 150, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 19, "daysAvailable" => 4, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[2], "nightlyCost" => 200, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave")),
    Array("id" => 20, "daysAvailable" => 9, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[2], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 21, "daysAvailable" => 4, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[0], "nightlyCost" => 150, "amenities" => Array("TV", "Fridge")),
    Array("id" => 22, "daysAvailable" => 5, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[1], "nightlyCost" => 250, "amenities" => Array("TV", "Air Conditioning", "Ocean View")),
    Array("id" => 23, "daysAvailable" => 9, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[1], "nightlyCost" => 150, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave")),
    Array("id" => 24, "daysAvailable" => 6, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[3], "nightlyCost" => 200, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 25, "daysAvailable" => 9, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[0], "nightlyCost" => 250, "amenities" => Array("Fridge", "Kitchenette", "Microwave")),
    Array("id" => 26, "daysAvailable" => 6, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[3], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge")),
    Array("id" => 27, "daysAvailable" => 7, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[1], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 28, "daysAvailable" => 5, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[3], "nightlyCost" => 150, "amenities" => Array("TV", "Air Conditioning", "Ocean View")),
    Array("id" => 29, "daysAvailable" => 4, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[2], "nightlyCost" => 150, "amenities" => Array("TV")),
    Array("id" => 30, "daysAvailable" => 7, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[0], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge")),
    Array("id" => 31, "daysAvailable" => 1, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[1], "nightlyCost" => 250, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave")),
    Array("id" => 32, "daysAvailable" => 5, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[3], "nightlyCost" => 200, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 33, "daysAvailable" => 4, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[0], "nightlyCost" => 150, "amenities" => Array("Fridge", "Kitchenette", "Microwave")),
    Array("id" => 34, "daysAvailable" => 2, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[0], "nightlyCost" => 250, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 35, "daysAvailable" => 10, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[2], "nightlyCost" => 150, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 36, "daysAvailable" => 3, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[0], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge")),
    Array("id" => 37, "daysAvailable" => 1, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[3], "nightlyCost" => 250, "amenities" => Array("Fridge", "Kitchenette", "Microwave")),
    Array("id" => 38, "daysAvailable" => 3, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[0], "nightlyCost" => 200, "amenities" => Array("Fridge", "Kitchenette", "Microwave")),
    Array("id" => 39, "daysAvailable" => 7, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[2], "nightlyCost" => 200, "amenities" => Array("TV")),
    Array("id" => 40, "daysAvailable" => 3, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[1], "nightlyCost" => 200, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 41, "daysAvailable" => 9, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[0], "nightlyCost" => 250, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 42, "daysAvailable" => 2, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[2], "nightlyCost" => 250, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 43, "daysAvailable" => 3, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[1], "nightlyCost" => 150, "amenities" => Array("TV", "Fridge", "Kitchenette", "Air Conditioning", "Microwave")),
    Array("id" => 44, "daysAvailable" => 8, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[3], "nightlyCost" => 250, "amenities" => Array("TV", "Fridge")),
    Array("id" => 45, "daysAvailable" => 6, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[2], "nightlyCost" => 100, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 46, "daysAvailable" => 5, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[1], "nightlyCost" => 150, "amenities" => Array("TV", "Fridge",  "Air Conditioning", "Microwave", "Ocean View")),
    Array("id" => 47, "daysAvailable" => 9, "bedType" => $bedTypes[1], "hotelName" => $hotelNames[3], "nightlyCost" => 250, "amenities" => Array("TV", "Air Conditioning", "Ocean View")),
    Array("id" => 48, "daysAvailable" => 7, "bedType" => $bedTypes[0], "hotelName" => $hotelNames[3], "nightlyCost" => 150, "amenities" => Array("TV", "Air Conditioning", "Ocean View")),
    Array("id" => 49, "daysAvailable" => 7, "bedType" => $bedTypes[2], "hotelName" => $hotelNames[1], "nightlyCost" => 150, "amenities" => Array("Fridge", "Kitchenette", "Microwave"))
);
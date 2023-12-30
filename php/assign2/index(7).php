<?php
// https://www.php.net/manual/en/datetime.format.php
// https://www.php.net/manual/en/ref.datetime.php
// https://www.php.net/manual/en/timezones.php


date_default_timezone_set('America/New_York');
echo date_default_timezone_get();
echo "<br />";
echo date('F jS, Y g:i A O');
echo "<br />";
echo gmdate('F jS, Y G:i O');
echo "<br />";
// convert string to unix timestamp
$timestamp = strtotime('2023-05-12');
echo $timestamp;
echo "<br />";
// convert unix timestamp to readable date
echo date('F jS, Y', $timestamp);
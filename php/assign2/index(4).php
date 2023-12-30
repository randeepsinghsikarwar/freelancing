<?php
// global variables not available in 
// function scope by default
$globalVar = "Travis";

function hello() {
    // re-declare it in function as global
    global $globalVar;

    echo $globalVar;
}

function forLoopExample() {
    for($i = 0; $i < 10; $i++) {
        // echos out 0-9
        echo $i;
    }

    // 10
    echo $i;
}

hello();
echo $globalVar;
echo "<br />";
forLoopExample();

<?php
class MyClass {
    // available anywhere!
    public $name;
    // only available in this class!
    private $privName;
    // available in this class and subclasses
    protected $protName;

    function updatePrivateName ($name) {
        $this->privName = $name;
    }
}

// we have inherited/extended MyClass
class MyParentClass extends MyClass {
    // this is constructor in PHP
    function __construct($name) {
        // $this = the current instance
        // of the class
        // since this inherits MyClass
        // it can access the protName variable
        $this->protName = $name;
    }

    // $myParentClass->callMe("Travis");
    function callMe($name) {
        echo $name;
    }
}

$myClass = new MyClass();
// $myClass = the instance of the class
// use -> to access public properties
// of the class
// no $ in front of variable names
$myClass->name = "Travis";
print_r($myClass);
// these 2 lines won't work because
// they're private/protected
//$myClass->privName = "Private Travis";
//$myClass->protName = "Protected Travis";
echo "<br /><br />";
$inheritedClass = new MyParentClass("ProtTravis");
$inheritedClass->name = "Travis";
$inheritedClass->callMe("Something");
$inheritedClass->updatePrivateName("Woozle");
echo "<br /><br />";
print_r($inheritedClass);
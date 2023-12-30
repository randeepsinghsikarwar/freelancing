<?php

class Person {
    // private -- only accessible in its own class
    // protected -- only accessible in itself or subclasses
    // -- extended/inherited
    // public -- can be accessed anywhere

    private $first_name;
    private $last_name;
    private $email;

    // gets called when the object is built
    // can only have 1 constructor!
    // cannot overload it with multiple arguments
    protected function __construct($fName, $last_name, $email) {
        $this->first_name = $fName;
        $this->last_name = $last_name;
        $this->email = $email;
    }

    // the below 2 static functions are how you essentially
    // allow multiple constructors in PHP
    // static function is a function that does not require an 
    // instance of the object!
    public static function createWithInfo($fName, $last_name, $email) {
        return new Person($fName, $last_name, $email);
    }

    public static function createWithoutInfo() {
        return new Person("", "", "");
    }

    // this method is what allows us to overload methods
    // it will catch all undefined/non public calls into this
    // class
    public function __call($function_name, $arguments) {
        if($function_name == 'get_full_name') {
            if(count($arguments) == 0) {
                return $this->get_full_name();
            } else {
                return $this->get_full_name_last_name_first();
            }
        }
    }

    private function get_full_name() {
        return "{$this->first_name} {$this->last_name}";
    }

    private function get_full_name_last_name_first() {
        return "{$this->last_name}, {$this->first_name}";
    }

    // something that sets a value is called a
    // setter/mutator
    function set_first_name($first_name) {
        // to access class-level variables
        // use the "$this" keyword
        $this->first_name = $first_name;
    }

    function set_last_name($last_name) {
        $this->last_name = $last_name;
    }

    function set_email($email) {
        if(!str_contains($email, "@")) {
            throw new Exception("Invalid email entered");
        }

        $this->email = $email;
    }

    // functions that get values from
    // class level variables are called getters/accessors
    function get_first_name() {
        return $this->first_name;
    }

    function get_last_name() {
        return $this->last_name;
    }

    function get_email() {
        return $this->email;
    }
}
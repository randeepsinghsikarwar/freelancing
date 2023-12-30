<?php
    include 'Employee.php';

    //$person = new Person("Travis", "Smith", "testEmail@comp2002.com");
    //$person->set_first_name("Travis");
    //$person->set_last_name("Smith");
    //$person->set_email("testEmail@comp2002.com");

    // to access a non-static class function
    // you do $classInstance->classFunction()

    // to acces a static class function
    // you do ClassName::classFunction();

    $person = Person::createWithInfo("Travis", "Smith", "testEmail@comp2002.com");
    //$person = Person::createWithoutInfo();
    echo "<pre>";
    print_r($person);
    echo "</pre>";

    echo "{$person->get_first_name()} {$person->get_last_name()}<br/>";
    echo "{$person->get_email()}<br/>";

    echo "{$person->get_full_name()}";

    $employee = new Employee('123456');

    echo "<pre>";
    print_r($employee);
    echo "</pre>";
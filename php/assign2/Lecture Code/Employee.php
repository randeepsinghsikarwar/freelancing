<?php
include 'person.php';
class Employee extends Person {
    public $employee_id;

    public function __construct($employeeId) {
        // parent:: accesses the parent you're extending
        // in this case Person
        parent::__construct("aaa", "bbb", "cc");

        $this->employee_id = $employeeId;
    }

    function set_employee_id($empl_id) {
        $this->employee_id = $empl_id;
    }
}
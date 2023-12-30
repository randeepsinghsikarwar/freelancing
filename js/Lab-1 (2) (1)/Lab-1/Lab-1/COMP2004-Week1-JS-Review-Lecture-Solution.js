/* 
Course: COMP2004
Author: Ziad Ewais
Title: COMP2004-Week1-JS-Review
Synopsis: Welcome to week 1 of COMP2004 - Full Stack Dev.
To start on the right foot we need to review the JavaScript
required to develop in React. 
*/

/*
*1
JavaScript Objects are a collection data structure where data are defined by "Key" and "Value"
Keys are a string followed by a colon (:)
Values can be any JavaScript data type (String, number, boolean, collection, ...)
*/
const data = [
  {
    id: 1,
    studentName: "John Doe",
    dateOfBirth: "2002-05-11",
    tuitionPaid: 12600,
    program: "General Arts and Science",
    highSchool: "West Andrews HS",
    courses: ["MATH8", "CHEM12", "COMP205", "COMM110", "GENE200"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 95,
      GENE101: 66,
      CHEM11: 85,
      COMM20: 45,
    },
  },
  {
    id: 2,
    studentName: "Shrey Gupta",
    dateOfBirth: "2003-11-23",
    tuitionPaid: 10200,
    program: "Welding",
    highSchool: "Toronto Heights HS",
    courses: ["MATH8", "WELD12", "WELD205", "CARP55", "GENE101"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {
      COMP101: 78,
      WELD101: 86,
      PHYS20: 55,
      COMM20: 0,
    },
  },
  {
    id: 3,
    studentName: "Veronica Martinez",
    dateOfBirth: "2002-10-04",
    tuitionPaid: 11300,
    program: "Compter Systems Technician",
    highSchool: "St. James HS",
    courses: ["COMP905", "COMP1100", "CARE10", "GENE66", "GENE12"],
    hasAttendedOrientation: false,
    previousCoursesGrades: {
      COMP101: 95,
      COMP1000: 88,
      GENE102: 68,
      COMM110: 75,
    },
  },
  {
    id: 4,
    studentName: "Jana Mohammed",
    dateOfBirth: "2003-02-16",
    tuitionPaid: 15900,
    program: "Automotive",
    highSchool: "INTERNATIONAL",
    courses: ["AUTO102", "AUTO102", "MATH8", "GENE101", "COMM110"],
    hasAttendedOrientation: true,
    previousCoursesGrades: {},
  },
];

/* 
*2
To access data inside an object, we use the dot notation
*/

console.log(data[0].studentName);
console.log(data[1].courses[2]);
console.log(data[2].previousCoursesGrades.COMP1000);

/*
*3
To add or change data in an object we call the key and assign a value to it
*/

console.log(data[2].highSchool);
data[2].highSchool = "Cornwall High"; //Change value of key
console.log(data[2].highSchool);
data[2].previousCoursesGrades.GENE102 = 56; //add a new key and value
console.log(data[2].previousCoursesGrades.GENE102);

/*
*4
Deconstruction of an object creating variables with same studentNames of keys with the assigned values 
 */

const { studentName, dateOfBirth, program } = data[0];
console.log(studentName, dateOfBirth, program);

/*
 *5
Rest operator (...) is used to assign the rest of the data to a new object
 */

const { highSchool, courses, ...restOfData } = data[0];
console.log(highSchool, courses, restOfData);

/**
 *6
 Spread operator (...) to spread keys of an object in a new object
 */

const student1 = data[1];
const newStudent1 = {
  ...student1,
  address: "123 Bank St., Cornwall, ON",
  nationality: "India",
};

console.log(newStudent1);

/**
 *7
 Template literals is creating strings with JS code embedded like variables or statements
 using back tick (`) operator
 */

console.log(
  `The student's name is ${newStudent1.studentName} and he lives at ${newStudent1.address}`
);

/**
 * Arrow function is used to replace the old function declaration. Best used for one liner functions (lambda functions)
 */

//old function declaration method

function oldFunction() {
  console.log("This is how we declared function before JS6");
}

oldFunction();

//arrow function declaration method

const newFunction = () => {
  console.log(
    "This is how we declare functions with arrow method. Function can be declared as a variable"
  );
};

newFunction();

//Lambda function declaration method

const lambdaFunction = () =>
  console.log(
    "This is a lambda function declaration without squiggly brackets!"
  );

lambdaFunction();

/**
 *8
 Ternaries are short, one liners, if/else statements 
 */

console.log(
  student1.previousCoursesGrades.PHYS20 >= 50
    ? `${student1.studentName} has passed PHYS20`
    : `${student1.studentName} has not passed PHYS20`
);

/**
 *9
 Short circuting with &&, ||, ?? operators
 NOTE: Falsy values are (false, 0 (the number zero), empty string, undefined, NaN, null)
 */

//and operator work that both values need to be true
console.log(true && "some string");

//or operator work that one of the values need to be true
console.log(false || "some other string");

const phys20Grade = student1.previousCoursesGrades.COMM20;

//using or operator with a zero value cause issues beacuse zero number is a falsy value
console.log(phys20Grade || "some string that souldn't print");

//to solve this issue we use the Nullish coalescing operator
console.log(phys20Grade ?? "some string that souldn't print");

/**
 *10
 Array map: To change all the values of an array at once using a statement
 stored in a new collection (array or object)
 */

//to get all students names in a new array

const studentNames = data.map((student) => student.studentName);

console.log(studentNames);

const studentNamesAndDOB = data.map((student) => ({
  studentName: student.studentName,
  studentDOB: student.dateOfBirth,
}));

console.log(studentNamesAndDOB);

/**
 *11
 Array filter: to filter certian data in regarded to a statement stored in a new collection
 */

//Filter all students born in 2002
const students2002 = data.filter(
  (student) => student.dateOfBirth.split("-")[0] == "2002"
);

console.log(students2002);

/**
 *12
 Array reduce: To reduce an array to a single value 
 */

//reduce all student tutions to total of tuition oaid

const allTuitionPaid = data.reduce(
  (totalTuition, student) => totalTuition + student.tuitionPaid,
  0
);

console.log(allTuitionPaid);

/**
 *13
 Array sort: to sort arrays ascendingly or descendingly.
 NOTE: This method changes the orginal array. If you want to avoid this, use .slice() method before sorting 
 */

//sort students by paid tuiotion

const sortedArray = data
  .slice()
  .sort((student1, student2) => student1.tuitionPaid - student2.tuitionPaid);

console.log(sortedArray);

/**
 *14
 Working with immutable arrays
 */

//adding a new student object to the data array using spread (...) operator

const newStudent = {
  id: 5,
  studentName: "Jane James",
  dateOfBirth: "2003-03-18",
  tuitionPaid: 13600,
  program: "Compter Programming",
  highSchool: "Ottawa High HS",
  courses: ["COMP1011", "COMP1012", "COMP1013", "GENE101", "GENE102"],
  hasAttendedOrientation: false,
  previousCoursesGrades: {
    COMP201: 87,
    COMP205: 78,
    GENE20: 56,
    COMM110: 77,
  },
};

const newData = [...data, newStudent];
console.log(newData);

//Remove a student object using filter method
const removeData = newData.filter(
  (student) => student.studentName !== "John Doe"
);

console.log(removeData);

//Update a student object using the map method

const updatedData = removeData.map((student) =>
  student.id === 2
    ? { ...student, hasAttendedOrientation: !student.hasAttendedOrientation }
    : student
);

console.log(updatedData);

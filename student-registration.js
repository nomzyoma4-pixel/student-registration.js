const students = [
  { name: "victor", age: 20, score: 75, paid: true },
  { name: "david", age: 17, score: 82, paid: true },
  { name: "sarah", age: 22, score: 45, paid: true },
  { name: "daniel", age: 25, score: 90, paid: false },
  { name: "grace", age: 19, score: 65, paid: true },
];
//task 1: display all students
function displayStydents() {
  for (let i = 0; students.length; i++) {
    const student = students[i];
    console.log("name: " + student.name);
    console.log("age: " + student.age);
    console.log("score: " + student.score);
    console.log("paid: " + (student.paid ? "yes" : "no"));
    console.log("");
  }
}
//task 2: check a single students eligibility
function checkEligibility(student) {
  if (student.age >= 18 && student.score >= 50 && student.paid === true) {
    return "Eligible";
  } else {
    return "not eligible";
  }
}
//task 3: return an array of eligible students
function getEligibleStudents() {
  const eligible = [];
  for (let i = 0; i < students.length; i++) {
    if (checkEligibility(students[i]) === "Eligible") {
      eligible.push(students[i]);
    }
  }
  return eligible;
}
//task 4: count eligible students
function countEligibleStudents() {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (checkEligibility(students[i]) === "Eligible") {
      count++;
    }
  }
  return count;
}
//task 5 calculate the avertage score
function calculateAverageScore() {
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total += students[i].score;
  }
  return total / students.length;
}
//task 6: generate the student report
function getStudentReport() {
  console.log("===student report===");
  for (let i = 0; i < students.length; i++) {
    console.log(students[i].name + "-" + checkEligibility(students[i]));
  }
  console.log("============================");
  console.log("eligible students: " + countEligibleStudents());
  console.log("average score: " + calculateAverageScore());
}
//bonus: find a student by name
function gerStudentByName(name) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      return students[i];
    }
  }
  return "students not found";
}
console.log("my student registration program");
getStudentReport();

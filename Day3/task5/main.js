var student = {
  name: prompt("Enter Student Name"),
  age: Number(prompt("Enter Student Age")),
  grades: {
    math: Number(prompt("Enter Student Grade in Math")),
    science: Number(prompt("Enter Student Grade in Science")),
    literature: Number(prompt("Enter Student Grade in Literature")),
  },
  contactInfo: {
    email: prompt("Enter Student Email"),
    phone: Number(prompt("Enter Student Phone")),
  },
};

document.writeln(`<h3>Student Name: ${student.name}</h3>`);
document.writeln(`<h3>Student Age: ${student.age}</h3>`);
document.writeln(`<h3>Student Grade in Math: ${student.grades.math}</h3>`);
document.writeln(
  `<h3>Student Grade in Science: ${student.grades.science}</h3>`
);
document.writeln(
  `<h3>Student Grade in Literature: ${student.grades.literature}</h3>`
);
document.writeln(`<h3>Student Email: ${student.contactInfo.email}</h3>`);
document.writeln(`<h3>Student Phone : ${student.contactInfo.phone}</h3>`);

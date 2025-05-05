const output = document.getElementById("output");


let person = {
  name: "Hema",
  age: 20,
  city: "chennai",
};
output.innerText += "Task 1:\n";
output.innerText += `Name: ${person.name}, Age: ${person.age}, City: ${person.city}\n`;


person.age = 29;
output.innerText += `Updated Person: ${JSON.stringify(person)}\n\n`;

let user = {
  firstName: "Hema",
  lastName: "Latha",
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
output.innerText += "Task 2:\n";
output.innerText += `Full Name: ${user.getFullName()}\n\n`;

let jsonString =
  '{"name": "Hema", "email": "hemarose290@gmail.com", "skills": ["HTML", "CSS", "JavaScript"]}';
let parsedData = JSON.parse(jsonString);
output.innerText += "Task 3:\n";
output.innerText += `Name: ${parsedData.name}\nEmail: ${
  parsedData.email
}\nSkills: ${parsedData.skills.join(", ")}\n\n`;


fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    output.innerText += "Task 4:\n";
    data.forEach((user, index) => {
      output.innerText += `User ${index + 1}: ${user.name}, ${
        user.age
      } years, ${user.city}\n`;
    });
  })
  .catch((error) => {
    output.innerText += "Error loading data.json\n";
  });

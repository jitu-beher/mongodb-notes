const Teacher = require("../Teacher");

async function CreateTeacher(name, age, experience) {
  const newTeacher = new Teacher({
    name: name,
    age: age,
    experience: experience,
  });
  await newTeacher.save();
  console.log(newTeacher);
}

module.exports = CreateTeacher;

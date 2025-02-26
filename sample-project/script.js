const mongoose = require("mongoose");

const CreateTeacher = require("./Repository/TeacherRepository");
const {
  createUser,
  deleteUser,
  getUserByName,
  fistUserWithName,
  getAllUsers,
} = require("./Repository/UserRepository");

mongoose
  .connect("mongodb://localhost/sampledb")
  .then(() => {
    console.log("conneted");
  })
  .catch((error) => console.log(error));

async function run(name) {
  let users = await fistUserWithName("Jitu");
  console.log(users);
}

app.

run();

const User = require("../User");

//CreateUser();
async function createUser() {
  try {
    const user = await User.create({
      name: "Jitu",
      age: 34,
      hobbies: ["weight lifting", "Bowling"],
      email: "jitu.behera@gmail.com",
      address: { street: "street34", city: "silk city" },
    });

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}
// Deelte User
//deleteUser("Jitu");
async function deleteUser(name) {
  try {
    let result = await User.deleteMany({ name: "Jitu" });
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

async function getUserByName(name) {
  const users = await User.where("name").equals(name);
  return users;
}

async function fistUserWithName(name) {
  const user = await User.findOne({ name: name });
  user.sayHi();
  return user;
}

module.exports = { createUser, deleteUser, getUserByName, fistUserWithName };

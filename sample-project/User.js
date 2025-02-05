const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({ street: String, city: String });

const userSchema = mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  hobbies: [String],
  createdAt: {
    type: Date,
    default: () => Date.now(),
  },
  address: {
    street: String,
    city: String,
  },
});

userSchema.methods.sayHi = function () {
  console.log(`Hi my name is ${this.name}`);
};

module.exports = mongoose.model("users", userSchema);

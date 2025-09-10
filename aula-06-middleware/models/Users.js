import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", usersSchema);

export default User;

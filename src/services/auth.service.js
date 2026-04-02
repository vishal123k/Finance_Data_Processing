const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (data) => {
  const hash = await bcrypt.hash(data.password, 10);
  return await User.create({ ...data, password: hash });
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("User not found");
  if (user.status === "inactive") throw new Error("User inactive");

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  return { user, token };
};

module.exports = { registerUser, loginUser };

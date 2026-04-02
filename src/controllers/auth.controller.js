const { registerUser, loginUser } = require("../services/auth.service");
const asyncHandler = require("../utils/asyncHandler");
const {
  registerValidator,
  loginValidator,
} = require("../validators/auth.validator");

const register = asyncHandler(async (req, res) => {
  const { error } = registerValidator(req.body);
  if (error) throw new Error(error);

  const user = await registerUser(req.body);
  res.status(201).json(user);
});

const login = asyncHandler(async (req, res) => {
  const { error } = loginValidator(req.body);
  if (error) throw new Error(error);

  const data = await loginUser(req.body);
  res.json(data);
});

module.exports = { register, login };

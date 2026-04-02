const registerValidator = (data) => {
  if (!data.name || !data.email || !data.password) {
    return { error: "All fields are required" };
  }
  if (data.password.length < 6) {
    return { error: "Password must be at least 6 characters" };
  }
  return {};
};

const loginValidator = (data) => {
  if (!data.email || !data.password) {
    return { error: "Email and password required" };
  }
  return {};
};

module.exports = { registerValidator, loginValidator };

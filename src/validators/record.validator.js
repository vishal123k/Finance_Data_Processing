const recordValidator = (data) => {
  if (!data.amount || !data.type || !data.category) {
    return { error: "Amount, type, category required" };
  }

  if (!["income", "expense"].includes(data.type)) {
    return { error: "Type must be income or expense" };
  }

  return {};
};

module.exports = { recordValidator };

const Record = require("../models/record.model");

const getSummaryService = async (user) => {
  let filter = {};
  if (user.role !== "admin") filter.userId = user.id;

  const records = await Record.find(filter);

  let income = 0,
    expense = 0;

  records.forEach((r) => {
    if (r.type === "income") income += r.amount;
    else expense += r.amount;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense,
  };
};

const getCategorySummary = async (user) => {
  let match = {};
  if (user.role !== "admin") match.userId = user.id;

  return Record.aggregate([
    { $match: match },
    { $group: { _id: "$category", total: { $sum: "$amount" } } },
  ]);
};

const getMonthlySummary = async (user) => {
  let match = {};
  if (user.role !== "admin") match.userId = user.id;

  return Record.aggregate([
    { $match: match },
    { $group: { _id: { $month: "$date" }, total: { $sum: "$amount" } } },
  ]);
};

module.exports = {
  getSummaryService,
  getCategorySummary,
  getMonthlySummary,
};

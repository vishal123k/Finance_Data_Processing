const service = require("../services/dashboard.service");

const getSummary = async (req, res) => {
  res.json(await service.getSummaryService(req.user));
};

const getCategory = async (req, res) => {
  res.json(await service.getCategorySummary(req.user));
};

const getMonthly = async (req, res) => {
  res.json(await service.getMonthlySummary(req.user));
};

module.exports = { getSummary, getCategory, getMonthly };

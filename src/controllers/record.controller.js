const service = require("../services/record.service");
const asyncHandler = require("../utils/asyncHandler");
const { recordValidator } = require("../validators/record.validator");

const createRecord = asyncHandler(async (req, res) => {
  const { error } = recordValidator(req.body);
  if (error) throw new Error(error);

  const record = await service.createRecordService(req.body, req.user);
  res.status(201).json(record);
});

const getRecords = asyncHandler(async (req, res) => {
  const data = await service.getRecordsService(req.query, req.user);
  res.json(data);
});

const updateRecord = asyncHandler(async (req, res) => {
  const data = await service.updateRecordService(
    req.params.id,
    req.body,
    req.user,
  );
  res.json(data);
});

const deleteRecord = asyncHandler(async (req, res) => {
  await service.deleteRecordService(req.params.id, req.user);
  res.json({ message: "Deleted" });
});

module.exports = {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
};

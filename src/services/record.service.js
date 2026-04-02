const Record = require("../models/record.model");

const createRecordService = (data, user) => {
  return Record.create({ ...data, userId: user.id });
};

const getRecordsService = async (query, user) => {
  let filter = {};

  if (user.role !== "admin") filter.userId = user.id;

  if (query.type) filter.type = query.type;
  if (query.category) filter.category = query.category;

  return Record.find(filter);
};

const updateRecordService = async (id, data, user) => {
  const record = await Record.findById(id);
  if (!record) throw new Error("Not found");

  if (user.role !== "admin" && record.userId.toString() !== user.id) {
    throw new Error("Unauthorized");
  }

  Object.assign(record, data);
  return record.save();
};

const deleteRecordService = async (id, user) => {
  const record = await Record.findById(id);
  if (!record) throw new Error("Not found");

  if (user.role !== "admin" && record.userId.toString() !== user.id) {
    throw new Error("Unauthorized");
  }

  await record.deleteOne();
};

module.exports = {
  createRecordService,
  getRecordsService,
  updateRecordService,
  deleteRecordService,
};

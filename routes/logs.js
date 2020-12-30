const express = require("express");
const router = express.Router();

const Log = require("../models/Log");

// @route    GET api/logs
// @desc     Get all users logs
router.get("/", async (req, res) => {
  try {
    const logs = await Log.find({});
    res.json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/log
// @desc     Add a new log
router.post("/", async (req, res) => {
  const { message, attention, tech, date } = req.body;

  try {
    const newLog = new Log({
      message,
      attention,
      tech,
      date,
    });

    const log = await newLog.save();
    res.json(log);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/logs/:id
// @desc     Update logs
router.put("/:id", async (req, res) => {
  const { message, attention, tech, date } = req.body;

  // Build log object
  const logFields = {};
  logFields.message = message;
  logFields.attention = attention;
  logFields.tech = tech;
  logFields.date = date;

  try {
    let log = await Log.findById(req.params.id);

    if (!log) return res.status(404).json({ msg: "Log not found" });

    log = await Log.findByIdAndUpdate(
      req.params.id,
      { $set: logFields },
      { new: true }
    );

    res.json(log);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    api/logs/:id
// @desc     Delete log
router.delete("/:id", async (req, res) => {
  try {
    let log = await Log.findById(req.params.id);

    if (!log) return res.status(404).json({ msg: "Log not found" });

    await Log.findByIdAndRemove(req.params.id);

    res.json({ msg: "Log Removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

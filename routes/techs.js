const express = require("express");
const router = express.Router();

const Tech = require("../models/Tech");

// @route    GET api/techs
// @desc     Get all techs

router.get("/", async (req, res) => {
  try {
    const techs = await Tech.find({});
    res.json(techs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/techs
// @desc    Add a tech

router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
    let tech = await Tech.findOne({ firstName, lastName });
    if (tech) {
      return res.status(400).json({ msg: "Tech already exists" });
    }

    tech = new Tech({
      firstName,
      lastName,
    });

    const newTech = await tech.save();
    res.json(newTech);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    api/techs/:id
// @desc     Delete tech
router.delete("/:id", async (req, res) => {
  try {
    let tech = await Tech.findById(req.params.id);

    if (!tech) return res.status(404).json({ msg: "Log not found" });

    await Tech.findByIdAndRemove(req.params.id);

    res.json({ msg: "Tech Removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

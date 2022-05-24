const Roams = require("../models/Roams");

const postRoams = (req, res) => {
	console.log(req.body);
	return res.json({ msg: "Done" });
};

module.exports = { postRoams };

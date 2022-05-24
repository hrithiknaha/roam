const router = require("express").Router();
const { postRoams } = require("../controllers");

router.post("/roams", postRoams);

module.exports = router;

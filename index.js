const express = require("express");
const app = express();
const morgan = require("morgan");

require("./config/db");

app.use(express.json());
app.use(morgan("tiny"));

app.use("/api", require("./routes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

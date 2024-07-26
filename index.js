const express = require("express");
const dotenv = require('dotenv');


dotenv.config();

const port = process.env.PORT || 3000;

const app = express();

app.use("/api/users", require("./routes/entreces-route"));


app.listen(port, () => console.log(`Listening on http://localhost:${port}`));

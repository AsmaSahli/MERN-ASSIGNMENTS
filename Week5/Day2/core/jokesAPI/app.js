const express = require('express');
const app = express();
const port = 8000;

require("./config/mongoose");

// Middleware for parsing JSON and handling URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./routes/routes")(app);

app.listen(port, () => console.log(`Server up and running on port ${port}`));

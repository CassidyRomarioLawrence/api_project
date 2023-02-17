const express = require('express');
const cors = require('cors');

const app = express();

var corsOption = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOption));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Vans Sneaker Store." });
});

require('./app/routes/vans.routes.js')(app);

const PORT = process.env.PORT || 2020;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}.`);
});
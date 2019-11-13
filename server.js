const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// handle url encoded data; parse json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// make public static
app.use(express.static('public'));

app.listen(PORT, function () {
    console.log(`Server is listening on PORT: ${PORT}`)
});
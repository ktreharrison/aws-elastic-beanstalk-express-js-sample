const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Ken, this is you coming the Create Continuous Delivery Pipeline with AWS. This is a new sentence'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

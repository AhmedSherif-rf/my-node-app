const mongoose = require('mongoose');
const customers = require('./routes/customers');
const genres = require('./routes/genres');
const express = require('express');
const app = express();


mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to DataBase... . .!'))
    .catch(err => console.error('could not Connect to the Database!!!!'));

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
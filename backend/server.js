const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/schools', schoolRoutes);

mongoose.connect('mongodb://localhost:27017/schoolDB', 
);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const userRoutes = require('./routes/user');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', userRoutes);

const PORT = 3004;
app.listen(PORT, () => {
    console.log(`User Service running on port ${PORT}`);
});

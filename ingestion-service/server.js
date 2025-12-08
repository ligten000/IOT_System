const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dataRoutes = require('./routes/data');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/data', dataRoutes);

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Ingestion Service running on port ${PORT}`);
});

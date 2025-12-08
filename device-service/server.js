const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const deviceRoutes = require('./routes/device');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/devices', deviceRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Device Service running on port ${PORT}`);
});

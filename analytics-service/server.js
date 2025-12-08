const express = require('express');
const cors = require('cors');

const analyticsRoutes = require('./routes/analytics');

const app = express();
app.use(cors());

app.use('/analytics', analyticsRoutes);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Analytics Service running on port ${PORT}`);
});

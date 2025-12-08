const { latestData } = require('../queueConsumer');

exports.getLatest = (req, res) => {
    res.json(latestData);
};


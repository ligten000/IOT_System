let devices = []; // tạm thời lưu trong memory

exports.getAllDevices = (req, res) => {
    res.json(devices);
};

exports.addDevice = (req, res) => {
    const { id, type, description } = req.body;
    devices.push({ id, type, description });
    res.status(201).json({ message: 'Device added' });
};

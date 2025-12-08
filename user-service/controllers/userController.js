let users = [];

exports.register = (req, res) => {
    const { username, password } = req.body;
    users.push({ username, password });
    res.status(201).json({ message: 'User registered' });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    const found = users.find(u => u.username === username && u.password === password);

    if (!found)
        return res.status(401).json({ message: 'Invalid credentials' });

    res.json({ message: 'Login successful', token: 'demo-jwt-token' });
};

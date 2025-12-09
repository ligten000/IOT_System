const amqp = require('amqplib');

let channel, connection;

// Kết nối RabbitMQ
async function connectQueue() {
    try {
        const RABBIT_URL = process.env.RABBIT_URL;

        console.log("Connecting to RabbitMQ:", RABBIT_URL);

        connection = await amqp.connect(RABBIT_URL);
        channel = await connection.createChannel();

        await channel.assertQueue("sensor_data");

        console.log("Ingestion Service connected to RabbitMQ");
    } catch (error) {
        console.error("RabbitMQ connection error:", error);
    }
}

connectQueue();

// API nhận dữ liệu
exports.receiveData = async (req, res) => {
    const data = req.body;

    console.log("Data received:", data);

    try {
        if (!channel) {
            console.error("Channel not ready");
            return res.status(500).json({ message: "Queue not ready" });
        }

        channel.sendToQueue("sensor_data", Buffer.from(JSON.stringify(data)));
        console.log("Published to queue:", data);

        res.json({ message: "Data received" });

    } catch (err) {
        console.error("Queue publish error:", err);
        res.status(500).json({ error: "Publish error" });
    }
};

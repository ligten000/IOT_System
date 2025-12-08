const amqp = require('amqplib');

let channel, connection;

// khởi tạo RabbitMQ connection
async function connectQueue() {
    try {
        connection = await amqp.connect('amqp://localhost');
        channel = await connection.createChannel();
        await channel.assertQueue("sensor_data");
        console.log("Ingestion Service connected to RabbitMQ");
    } catch (error) {
        console.error("RabbitMQ connection error:", error);
    }
}

connectQueue();

exports.receiveData = async (req, res) => {
    const data = req.body;

    console.log("Data received:", data);

    // publish vào queue
    try {
        channel.sendToQueue("sensor_data", Buffer.from(JSON.stringify(data)));
        console.log("Published to queue:", data);
    } catch (err) {
        console.error("Queue publish error:", err);
    }

    res.json({ message: "Data received" });
};

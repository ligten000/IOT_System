const amqp = require('amqplib');
const SensorData = require('../models/SensorData');

let latestData = {
    deviceId: "none",
    value: 0,
    timestamp: 0
};

async function startConsumer() {
    try {
        const RABBIT_URL = process.env.RABBIT_URL;

        console.log("Connecting to RabbitMQ:", RABBIT_URL);

        const connection = await amqp.connect(RABBIT_URL);
        const channel = await connection.createChannel();

        await channel.assertQueue("sensor_data");

        console.log("Analytics Service waiting for messages...");

        channel.consume("sensor_data", async (msg) => {
            const json = JSON.parse(msg.content.toString());

            latestData = json;

            // 🔥 LƯU VÀO MONGODB
            await SensorData.create({
                deviceId: json.deviceId,
                value: json.value
            });

            console.log("Analytics received & saved:", json);

            channel.ack(msg);
        });

    } catch (err) {
        console.error("Analytics RabbitMQ error:", err);
    }
}

startConsumer();

module.exports = { latestData };

const amqp = require('amqplib');

let latestData = {
    deviceId: "none",
    value: 0,
    timestamp: 0
};

async function startConsumer() {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    await channel.assertQueue("sensor_data");
    console.log("Analytics Service waiting for messages...");

    channel.consume("sensor_data", msg => {
        const json = JSON.parse(msg.content.toString());
        latestData = json;

        console.log("Analytics received:", json);
        channel.ack(msg);
    });
}

startConsumer();

module.exports = { latestData };

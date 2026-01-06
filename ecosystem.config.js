module.exports = {
  apps: [
    {
      name: "ingestion",
      script: "ingestion-service/server.js",
      env: {
        RABBIT_URL: "amqp://myuser:mypassword@16.176.195.2:5672/"
      }
    },
    {
      name: "analytics",
      script: "analytics-service/server.js",
      env: {
        RABBIT_URL: "amqp://myuser:mypassword@16.176.195.2:5672/"
      }
    },
    {
      name: "device",
      script: "device-service/server.js"
    },
    {
      name: "user",
      script: "user-service/server.js"
    }
  ]
};

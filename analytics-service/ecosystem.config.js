module.exports = {
  apps: [
    {
      name: "analytics",
      script: "app.js",
      env: {
        RABBIT_URL: "amqp://myuser:mypassword@16.176.195.2:5672/"
      }
    }
  ]
};

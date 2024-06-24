module.exports = {
  apps : [{
    name: "cherryshades-pm2",
    script: "./backend/server.js",
    env: {
      NODE_ENV: "production",
      PORT: 5000,
    },
    // More configuration options as needed
  }],
};

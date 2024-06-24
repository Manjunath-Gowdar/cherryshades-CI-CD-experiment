import path from 'path';

export default {
  apps: [{
    name: "cherryshades-pm2",
    script: "./backend/server.js",
    autorestart: true,
   
    // More configuration options as needed
  }],
};

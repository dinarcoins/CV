module.exports = {
  apps: [
    {
      name: "front-end service",
      script: "./node_modules/next/dist/bin/next",
      args: "start",
      exec_mode: "fork",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        PORT: "3000",
      },
    },
  ],
};

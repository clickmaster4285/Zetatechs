module.exports = {
  apps: [
    {
      name: "zetatechs",
      cwd: "/var/www/zetatechs",
      script: "/var/www/zetatechs/.output/server/index.mjs",
      interpreter: "node",
      env: {
        NODE_ENV: "production",
        PORT: "7002",
        HOST: "127.0.0.1",
        NITRO_PRESET: "node-server",
      },
    },
  ],
};

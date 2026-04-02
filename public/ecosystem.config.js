module.exports = {
  apps: [
    {
      name: "nextjs-portfolio",
      script: "npm",
      args: "start",
      cwd: "/home/master/applications/rpjwsiqrsa/public_html",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000
      }
    }
  ]
};
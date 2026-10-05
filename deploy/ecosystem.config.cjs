// PM2 config for the Klypto CRM backend.
//
// Process name "crm-backend" is deliberately distinct from the BIM app's
// "bim-backend"/"stg-backend" on the same box, and port 4000 avoids the BIM
// frontend's 3000 and BIM backends' 8000/8100. Nothing here references or
// depends on anything under ~/bimdesignsoftware.
module.exports = {
  apps: [
    {
      name: "crm-backend",
      cwd: __dirname + "/..",
      script: "dist/apps/klypto-crm-nest-js/main.js",
      // "interpreter: none" (copied from the BIM app's config, where the
      // script is an actual executable binary -- venv/bin/uvicorn) made PM2
      // exec() this plain .js file directly, which has no shebang and isn't
      // marked +x: EACCES, and the process never actually started despite
      // `pm2 list` showing it "online". This needs node to run it.
      interpreter: "node",
      // max_memory_restart is a known-good pattern on this box: the BIM
      // backend once grew unbounded and this caps the blast radius the same
      // way, recycling the process well before it could threaten the whole
      // instance's memory.
      max_memory_restart: "800M",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};

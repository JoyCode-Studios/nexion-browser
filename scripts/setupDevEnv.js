// scripts/setupDevEnv.js

console.log("SetupDevEnv: running in CI or local install");

// If you need local-only setup, you can guard it:
if (process.env.CI) {
  console.log("CI detected, skipping heavy dev setup");
  process.exit(0);
}

// Example: copy configs, generate env files, etc.
console.log("Local dev environment setup complete");

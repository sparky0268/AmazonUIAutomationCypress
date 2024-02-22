const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress\\integration\\*.js",

    defaultCommandTimeout: 6000,
    retries: {
      runMode: 2,
    }
  }
});

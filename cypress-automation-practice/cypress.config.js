const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://automationpractice.pl/index.php?controller=authentication&back=my-account',
    testIsolation: false
  },
});

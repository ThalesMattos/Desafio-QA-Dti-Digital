const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://automationpractice.pl/index.php?controller=authentication&back=myaccount',
    setupNodeEvents(on, config) {

    },
  },
});

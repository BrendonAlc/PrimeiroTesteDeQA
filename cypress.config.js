const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'zi9w2f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

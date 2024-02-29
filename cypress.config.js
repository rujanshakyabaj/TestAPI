const { defineConfig } = require("cypress");
const fs = require('fs')

module.exports = defineConfig({
  projectId: 'yfjkqk',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        mylog(message) {
          console.log(message)

          return null
        },
        hello({ greeting, name }) {
          console.log("%s", "%s", greeting, name)
          return null
        },
          countFiles(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err)
              }

              resolve(files.length)
            })
          })
        }
      })
    },

    baseUrl: "http://localhost:3000"
  },
  "chromeWebSecurity": false,
  "video":true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Update this path to point to your reports directory
    overwrite: false,
    html: true,
    json: true
  }
});

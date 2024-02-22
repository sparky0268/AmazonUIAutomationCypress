
const { merge } = require('mochawesome-merge')
const generator = require('mochawesome-report-generator')

module.exports = (on, config) => {
  on('after:run', async (results) => {
    const options = {
      files: ['./cypress/reports/*.json'], // Change the path if necessary
    }

    // Merge JSON reports
    const merged = await merge(options)

    // Generate HTML report
    await generator.create(merged, { reportDir: './cypress/results/mochawesome-report',charts: true,
    overwrite: false,
    inlineAssets: true })

    // Optionally move JSON report to a separate directory
    const jsonReportDir = './cypress/results/mochawesome-json-report'
    await fs.ensureDir(jsonReportDir)
    await fs.move('./cypress/mochawesome-report/mochawesome.json', path.join(jsonReportDir, 'mochawesome.json'))
  
  })
}

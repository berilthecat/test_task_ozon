const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'tests/*.js',
  output: 'output',
  helpers: {
    Puppeteer: {
      url: 'https://calculator.ozon.ru',
      show: true,
      windowSize: '1920x1080',
      waitForNavigation: "load",
      waitForAction: 800,
      waitForTimeout: 15000,
      chrome: {
        args: ['--no-sandbox']
      }
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: './pages/main_page.js'
  },
  plugins: {
    allure: {
      enabled: true
    }
  },
  name: 'test_task_ozon'
}

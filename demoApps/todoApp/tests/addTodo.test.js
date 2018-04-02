const assert = require('assert')
const TodoApp = require('./pageObjects/TodoAppPage')
// const PipeRunner = require('./utils/PipeRunner')

// const testCapability = 

// const {
//   setupDriver, 
//   quitDriver,
//   getCapabilityToTestFromEnv,
//   checkCapability
// } = require('../../../libs/driverUtil')
// const {assertChartVisualRegression} = require('./utils/assertUtil')

// DONT use arrow function for tests API (describe, before, it, etc)
// as it will carry wrong 'this' context into tests.
describe('Add todo item', function () {
  // let driver,
  //     galleryPage,
  //     barChartSection,
  //     pipeRunner

  let todoPage

  beforeEach(async function () {
    // TODO: check if we need to run in saucelabs remotely
    // driver = await setupDriver(this.currentTest)
    // galleryPage = new GalleryPage(driver)
    // // TODO: should we create BarChartSection section object?
    // barChartSection = new ChartSection(galleryPage, '#bar')
    // pipeRunner = new PipeRunner(barChartSection)
    todoPage = new TodoApp()
    await todoPage.startDriver()
  })

  afterEach(async function () { 
    // await quitDriver(driver, this.currentTest)
    await todoPage.quitDriver()
  })

  it('should not add anything when add item content is empty', async function () {
    // await pipeRunner
    // .pipe('open', 'zoomIn')
    // .done()

    // await assertChartVisualRegression(barChartSection, driver, this.test)
    const todoItems = todoPage.getTodoItems()
    const doneItems = todoPage.getDoneItems()
    await todoPage.pipe('open', 'clickAddItemButton').done()
    const currentTodoItems = todoPage.getTodoItems()
    const currentDoneItems = todoPage.getDoneItems()
    assert.equal(currentTodoItems.length, todoItems.length)
    assert.equal(currentDoneItems.length, doneItems.length)
  })

  // it('should be able to zoom out by click zoom out button', async function () {
  //   await pipeRunner
  //   .pipe('open', 'zoomIn', 'zoomOut')
  //   .done()

  //   await assertChartVisualRegression(barChartSection, driver, this.test)
  // })

  // // TODO: Safari cannot perform clickChartAtCenter
  // (checkCapability.isSafari() ? it.skip : it)('should be able to zoom in by click on chart while in zoom mode', async function () {
  //   await pipeRunner
  //   .pipe('open', 'selectZoomMode', 'clickChartAtCenter')
  //   .done()
    
  //   await assertChartVisualRegression(barChartSection, driver, this.test)
  // })

  // it('should reset zoom when click on reset button', async function () {
  //   await pipeRunner
  //   .pipe('open', 'zoomIn', 'resetChart')
  //   .done()

  //   await assertChartVisualRegression(barChartSection, driver, this.test)
  // })

})

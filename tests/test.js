const { I, mainPage } = inject()

Feature('Ozon test task')

Scenario('Check without calculation', ({ I, mainPage }) => {
    I.amOnPage('/')
    I.click(mainPage.dimensions_button)
    I.waitForElement(mainPage.field.length)
    I.fillField(mainPage.field.length, '100')
    I.fillField(mainPage.field.width, '30')
    I.fillField(mainPage.field.height, '20')
    I.fillField(mainPage.field.weight, '10')
    I.waitForText('Объемный вес товара: 12 кг', 3, mainPage.volume_weight_value)
    I.waitForText('Объем товара: 60 л', 3, mainPage.volume_value)
    I.fillField(mainPage.field.weight, '20')
    I.waitForText('Объемный вес товара: 20 кг', 3, mainPage.volume_weight_value)
})

Scenario('Check with calculation', ({ I, mainPage }) => {
    let length = Math.round(Math.random() * 100) + 1
    let width = Math.round(Math.random() * 100) + 1
    let height = Math.round(Math.random() * 100) + 1
    let weight = Math.round(Math.random() * 100) + 1
    let volume_value = mainPage.calculateVolume(length, width, height)
    let volume_weight_value = mainPage.calculateVolumeWeight(volume_value, weight)
    I.amOnPage('/')
    I.click(mainPage.dimensions_button)
    I.waitForElement(mainPage.field.length)
    I.fillField(mainPage.field.length, length)
    I.fillField(mainPage.field.width, width)
    I.fillField(mainPage.field.height, height)
    I.fillField(mainPage.field.weight, weight)
    I.waitForText(`Объемный вес товара: ${volume_weight_value} кг`, 3, mainPage.volume_weight_value)
    I.waitForText(`Объем товара: ${volume_value} л`, 3, mainPage.volume_value)
})

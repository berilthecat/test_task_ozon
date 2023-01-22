module.exports = {
    // locators
    dimensions_button: { xpath: '//a[@href="#dimensions" and text()="Я знаю габариты"]' },
    field: {
        length: { xpath: '//label[text()="Длина, см"]/../input' },
        width: { xpath: '//label[text()="Ширина, см"]/../input' },
        height: { xpath: '//label[text()="Высота, см"]/../input' },
        weight: { xpath: '//label[text()="Вес, кг"]/../input' }
    },
    volume_weight_value: { xpath: '//div[3][@class="row"]/div' },
    volume_value: { xpath: '//div[4][@class="row"]/div' },

    // 
    
    calculateVolume (length, width, height) {
        let volume_value =  Math.round(((length * width * height) / 1000) * 
        10) / 10
        return volume_value
    },

    calculateVolumeWeight (volume_value, weight) {
        let volume_weight_value =  Math.round(Math.max(volume_value / 5, 
        weight) * 10) / 10
        return volume_weight_value
    }

}

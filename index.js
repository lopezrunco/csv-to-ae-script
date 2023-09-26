var csvFile = File('~/Desktop/LOTES REMATE SJY 2023.xlsx - toros hereford.csv')

var csvData = []

// Read line by line and push the data in csvData
// eof: end of line
// r: read
csvFile.open('r')
do {
    csvData.push(csvFile.readln())
} while (!csvFile.eof)
csvFile.close()

for (var csvDataIdx = 1; csvDataIdx < csvData.length; csvDataIdx++) {
    // Set content in the layers
    var thisCSVRow = csvData[csvDataIdx].split(',')
    setContentInLayer('RP: ' + thisCSVRow[0], '_rp')
    setContentInLayer('Lote: ' + thisCSVRow[1], '_lote')

    // LOTES REMATE SJY 2023.xlsx - HEMBRAS ANGUS .csv
    // setContentInLayer('NAC: ' + thisCSVRow[2] + '    DEST: ' + thisCSVRow[3] + '     LECHE: ' + thisCSVRow[4] + '     18m: ' + thisCSVRow[5] + '     PA_V: ' + thisCSVRow[6], '_data1')
    // setContentInLayer('CE: ' + thisCSVRow[7] + '    AOB: ' + thisCSVRow[8] + '     EGS: ' + thisCSVRow[9] + '     MARB: ' + thisCSVRow[10], '_data2')

    // LOTES REMATE SJY 2023.xlsx - HEMBRAS ANGUS .csv
    // setContentInLayer('FPD: ' + thisCSVRow[2] + '    NAC: ' + thisCSVRow[3] + '     DEST: ' + thisCSVRow[4] + '     18m: ' + thisCSVRow[5] + '     PA_V: ' + thisCSVRow[6] + '     FPM: ' + thisCSVRow[7] + '     HL: ' + thisCSVRow[8], '_data1')
    // setContentInLayer('AOB: ' + thisCSVRow[9] + '    GR: ' + thisCSVRow[10] + '     MAR: ' + thisCSVRow[11] + '     CE: ' + thisCSVRow[12] + '     ICr: ' + thisCSVRow[13] + '     ICo: ' + thisCSVRow[14], '_data2')

    // LOTES REMATE SJY 2023.xlsx - toros angus .csv
    // setContentInLayer('NAC: ' + thisCSVRow[2] + '    DEST: ' + thisCSVRow[3] + '     HL: ' + thisCSVRow[4] + '     18M: ' + thisCSVRow[5] + '     PA_V: ' + thisCSVRow[6], '_data1')
    // setContentInLayer('CE: ' + thisCSVRow[7] + '    AOB: ' + thisCSVRow[8] + '     EGS: ' + thisCSVRow[9] + '     MARB: ' + thisCSVRow[10], '_data2')

    // LOTES REMATE SJY 2023.xlsx - toros hereford.csv
    setContentInLayer('FPD: ' + thisCSVRow[2] + '    NAC: ' + thisCSVRow[3] + '     DEST: ' + thisCSVRow[4] + '     18m: ' + thisCSVRow[5] + '     PA_V: ' + thisCSVRow[6] + '     FPM: ' + thisCSVRow[7] + '     HL: ' + thisCSVRow[8], '_data1')
    setContentInLayer('AOB: ' + thisCSVRow[9] + '    GR: ' + thisCSVRow[10] + '     MAR: ' + thisCSVRow[11] + '     CE: ' + thisCSVRow[12] + '     ICr: ' + thisCSVRow[13] + '     ICo: ' + thisCSVRow[14], '_data2')

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.activeItem)
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/rendered/"
    outputModule.applyTemplate("PNGAlfa")
    outputModule.file = File(outputFolder + thisCSVRow[0])

    app.project.renderQueue.render()
}
alert('Done!')

function setContentInLayer(content, layer) {
    // Select active compostition
    var comp = app.project.activeItem
    // Select layer and set new text
    var layer = comp.layer(layer)
    var textProp = layer.property("Source Text")
    var textDocument = textProp.value
    textDocument.text = content
    textProp.setValue(textDocument)
}
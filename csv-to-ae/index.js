var csvFile = File('~/Desktop/hembras-hereford.csv')

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
    setContentInLayer('LOTE: ' + thisCSVRow[1], '_lote')
    setContentInLayer('RP: ' + thisCSVRow[0], '_rp')

    // Angus
    // setContentInLayer('PN: ' + thisCSVRow[2] + '    PD: ' + thisCSVRow[3] + '     P18m: ' + thisCSVRow[4] + '     PAV: ' + thisCSVRow[5] + '     CE: ' + thisCSVRow[6], '_data1')
    // setContentInLayer('HL: ' + thisCSVRow[7] + '    AOB: ' + thisCSVRow[8] + '     EGS: ' + thisCSVRow[9] + '     MARB: ' + thisCSVRow[10], '_data2')

    // Hereford
    // setContentInLayer('FPd: ' + thisCSVRow[2] + '    PN: ' + thisCSVRow[3] + '     PD: ' + thisCSVRow[4] + '     18m: ' + thisCSVRow[5] + '     PAV: ' + thisCSVRow[6] + '     FPm: ' + thisCSVRow[7] + '     HL: ' + thisCSVRow[8], '_data1')
    // setContentInLayer('AOB: ' + thisCSVRow[9] + '    GR: ' + thisCSVRow[10] + '     MAR: ' + thisCSVRow[11] + '     CE: ' + thisCSVRow[12] + '     Icr: ' + thisCSVRow[13] + '     Ico: ' + thisCSVRow[14], '_data2')

    // Hembras Hereford
    setContentInLayer('FPd: ' + thisCSVRow[2] + '    PN: ' + thisCSVRow[3] + '     PD: ' + thisCSVRow[4] + '     18: ' + thisCSVRow[5] + '     PAV: ' + thisCSVRow[6] + '     CE: ' + thisCSVRow[7] + '     FPM: ' + thisCSVRow[8], '_data1')
    setContentInLayer('HL: ' + thisCSVRow[9] + '    AOB: ' + thisCSVRow[10] + '     GR: ' + thisCSVRow[11] + '     MRB: ' + thisCSVRow[12] + '     Icr: ' + thisCSVRow[13] + '     Ico: ' + thisCSVRow[14], '_data2')

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.activeItem)
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/rendered/"
    outputModule.applyTemplate("pngalfa")
    outputModule.file = File(outputFolder + 'Lote ' + thisCSVRow[1] + ' RP ' + thisCSVRow[0])

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
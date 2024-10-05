var csvFile = File('~/Desktop/list.csv')

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
    setContentInLayer('Lote: ' + thisCSVRow[0], '_lote')
    setContentInLayer('RP: ' + thisCSVRow[1], '_rp')

    // Angus
    // setContentInLayer('NAC: ' + thisCSVRow[2] + '    DEST: ' + thisCSVRow[3] + '     18M: ' + thisCSVRow[4], '_data1')
    // setContentInLayer('CE: ' + thisCSVRow[5] + '    AOB: ' + thisCSVRow[6] + '     EGS: ' + thisCSVRow[7], '_data2')

    // Hereford
    setContentInLayer('FPd: ' + thisCSVRow[2] + '    PN: ' + thisCSVRow[3] + '     PD: ' + thisCSVRow[4] + '     18m: ' + thisCSVRow[5], '_data1')
    setContentInLayer('PAV: ' + thisCSVRow[6] + '    AOB: ' + thisCSVRow[7] + '     GR: ' + thisCSVRow[8] + '     CE: ' + thisCSVRow[9], '_data2')

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.activeItem)
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/rendered/"
    outputModule.applyTemplate("pngalfa")
    outputModule.file = File(outputFolder + 'Lote: ' + thisCSVRow[0] + ' RP: ' + thisCSVRow[1])

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
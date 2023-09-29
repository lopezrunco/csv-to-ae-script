var csvFile = File('~/Desktop/Baqueano.xlsx - Hoja1.csv')

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
    setContentInLayer(thisCSVRow[0], '_rp')
    setContentInLayer('Padre: ' + thisCSVRow[1], '_padre')
    setContentInLayer('PIG (I/D): ' + thisCSVRow[2] + '     NAC: ' + thisCSVRow[3] + '     DEST: ' + thisCSVRow[4] + '     18M: ' + thisCSVRow[5] + '     LECHE: ' + thisCSVRow[6], '_data1')
    setContentInLayer('AOBc: ' + thisCSVRow[7] + '     C.ESC: ' + thisCSVRow[8] + '     ICR: ' + thisCSVRow[9] + '     Icomp: ' + thisCSVRow[10], '_data2')

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.activeItem)
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/rendered/"
    outputModule.applyTemplate("High Quality with Alpha")
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
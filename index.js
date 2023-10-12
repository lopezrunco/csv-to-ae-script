// var csvFile = File('~/Desktop/toros.csv')
var csvFile = File('~/Desktop/vaquillonas.csv')

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
    // Toros
    setContentInLayer(thisCSVRow[0], '_rp')
    setContentInLayer('EDAD: ' + thisCSVRow[1], '_edad')
    setContentInLayer('PADRE: ' + thisCSVRow[2], '_padre')
    setContentInLayer('MADRE: ' + thisCSVRow[3], '_madre')
    setContentInLayer('ABUELO MATERNO: ' + thisCSVRow[4], '_abuelo')

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.activeItem)
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/mograph/"
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
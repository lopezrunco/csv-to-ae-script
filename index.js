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
    // setContentInLayer(thisCSVRow[0], '_lot')
    // setContentInLayer(thisCSVRow[1], '_top_data')
    // setContentInLayer(thisCSVRow[2] + '     RP: ' + thisCSVRow[3], '_bottom_data')
    // Vaquillonas
    setContentInLayer(thisCSVRow[0], '_lot')
    setContentInLayer(thisCSVRow[1], '_bottom_data')

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.activeItem)
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/mograph/"
    outputModule.applyTemplate("High Quality with Alpha")
    // outputModule.file = File(outputFolder + thisCSVRow[3])
    outputModule.file = File(outputFolder + thisCSVRow[1])

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
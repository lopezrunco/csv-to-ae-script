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
    setContentInLayer(thisCSVRow[0], '_name')
    setContentInLayer(thisCSVRow[1], '_title')

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.item(1))
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/"
    outputModule.applyTemplate("High Quality with Alpha")
    outputModule.file = File(outputFolder + thisCSVRow[0])

    app.project.renderQueue.render()
}
alert('All renders are finished')

function setContentInLayer(content, layer) {
    // Select _render comp
    var comp = app.project.item(1)
    // Select layer and set new text
    var layer = comp.layer(layer)
    var textProp = layer.property("Source Text")
    var textDocument = textProp.value
    textDocument.text = content
    textProp.setValue(textDocument)
}
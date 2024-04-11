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
    setContentInLayer(thisCSVRow[1], '_rp')
    setContentInLayer(thisCSVRow[3], '_fechanac')
    setContentInLayer(thisCSVRow[5], '_padre')
    setContentInLayer(thisCSVRow[6], '_madre')
    setContentInLayer(thisCSVRow[8], '_lact')
    setContentInLayer(thisCSVRow[9], '_edad')
    setContentInLayer(thisCSVRow[10], '_dias')
    setContentInLayer(thisCSVRow[11] + "KG", '_leche')
    setContentInLayer("G" + thisCSVRow[12], '_grasa')
    setContentInLayer("P" + thisCSVRow[13], '_proteina')

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.activeItem)
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/mograph/"
    outputModule.applyTemplate("pngalfa")
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
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

    // Output:LOTE 3 | SUJETA LAS PIEDRITAS
    setContentInLayer("LOTE " + thisCSVRow[0] + " | " + thisCSVRow[1], '_line1')

    // Output: RP 247 | 4/11/20
    setContentInLayer("RP " + thisCSVRow[2] + " | " + thisCSVRow[3], '_line2')

    // Output: IDOLO LAS PIEDRITAS | FAJA PAMPA LAS PIEDRITAS X RUCALQUIN JABADO
    setContentInLayer(thisCSVRow[4] + " X " + thisCSVRow[5] + " (" + thisCSVRow[6] + ") ", '_line3')

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.activeItem)
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/mograph/"
    outputModule.applyTemplate("High Quality with Alpha")
    outputModule.file = File(outputFolder + thisCSVRow[2])

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
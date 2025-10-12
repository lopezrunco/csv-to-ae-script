// var csvFile = File('~/Desktop/hereford.csv')
var csvFile = File('~/Desktop/angus.csv')

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
    setContentInLayer(thisCSVRow[0], '_breed')
    setContentInLayer('RP: ' + thisCSVRow[1], '_rp')
    
    // Line 1 (Common for hereford and angus lists)
    setContentInLayer('Nacido: ' + thisCSVRow[2] + ' | ' + 'PN: ' + thisCSVRow[3] + ' | ' + 'Padre: ' + thisCSVRow[4] + ' | ' + 'AB.Mat: ' + thisCSVRow[5], '_line1')
    
    // Line 2 (Only Hereford)
    // setContentInLayer('FPD: ' + thisCSVRow[6] + ' | NAC: ' + thisCSVRow[7] + ' | DES: ' + thisCSVRow[8] + ' | 18M: ' + thisCSVRow[9] + ' | PAV: ' + thisCSVRow[10] + ' | LCH: ' + thisCSVRow[11] + ' | FPM: ' + thisCSVRow[12] + ' | AOB: ' + thisCSVRow[13] + ' | GRS: ' + thisCSVRow[14] + ' | CE: ' + thisCSVRow[15] + ' | ICR: ' + thisCSVRow[16] + ' | IC: ' + thisCSVRow[17], '_line2');
    
    // Line 2 (Only Angus)
    setContentInLayer('NAC: ' + thisCSVRow[6] + ' | DES: ' + thisCSVRow[7] + ' | 18M: ' + thisCSVRow[8] + ' | PAV: ' + thisCSVRow[9] + ' | LCH: ' + thisCSVRow[10] + ' | AOB: ' + thisCSVRow[11] + ' | Marb: ' + thisCSVRow[12] + ' | GRS: ' + thisCSVRow[13] + ' | CE: ' + thisCSVRow[14], '_line2');

    // Apply template and customize path & file name
    var item = app.project.renderQueue.items.add(app.project.activeItem)
    var outputModule = item.outputModule(1)
    var outputFolder = "~/Desktop/rendered/"
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
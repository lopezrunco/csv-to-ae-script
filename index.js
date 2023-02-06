var csvFile = File('~/Documents/list.csv')
var csvData = []

// Read line by line and push the data in csvData
// eof: end of line
// r: read
csvFile.open('r') 
do {
    csvData.push(csvFile.readln())
} while (!csvFile.eof)
csvFile.close()

// Loop the csvData array and alert every item of the row
app.beginUndoGroup('Undo group')
for (var csvDataIdx = 1; csvDataIdx < csvData.length; csvDataIdx++) {
    var thisCSVRow = csvData[csvDataIdx].split(',')
    alert(thisCSVRow[0])
    alert(thisCSVRow[1])
    alert(thisCSVRow[2])
    alert(thisCSVRow[3])
}
app.endUndoGroup()

// Select _render comp
var comp = app.project.item(1)
// Select layer one and set new text
var layer1 = comp.layer('text-1')
var textProp = layer1.property("Source Text")
var textDocument = textProp.value
textDocument.text = "Setting from script"
textProp.setValue(textDocument)

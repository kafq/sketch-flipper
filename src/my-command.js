var document = require('sketch/dom').getSelectedDocument()

export default function(context) {

  let selection = document.selectedLayers;
  
  selection.forEach(layer => layer.moveToBack())
  context.document.showMessage("Flipped");
  
}

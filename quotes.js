function onOpen() {
  var spreadsheet = SpreadsheetApp.getActive();
  var menuItems = [
    {name: 'Prepare quotes...', functionName: 'prepareQuotes_'},
    {name: 'Generate step-by-step...', functionName: 'generateStepByStep_'}
  ];
  spreadsheet.addMenu('GetQuotes', menuItems);
}


function prepareQuotes_() {
 var spreadsheet = SpreadsheetApp.getActive();
  var selectedRow = Browser.inputBox('Generate quotes',
      'Please enter the start row number of the addresses to use' +
      ' (for example, "2"):',
      Browser.Buttons.OK_CANCEL);
  if (selectedRow == 'cancel') {
    return;
  }
  var srowNumber = Number(selectedRow);
  
  var eselectedRow = Browser.inputBox('Generate quotes',
      'Please enter the end row number of the addresses to use' +
      ' (for example, "3"):',
      Browser.Buttons.OK_CANCEL);
  if (eselectedRow == 'cancel') {
    return;
  }
  var erowNumber = Number(eselectedRow);
  
  for(var i = srowNumber; i<= erowNumber; i++){
    var row = spreadsheet.getRange(i, 1, 1, 2);
    var rowValues = row.getValues();
    console.log(rowValues[i][0]) ; 
  }
  
  
}

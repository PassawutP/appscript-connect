function doGet() {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}
 
//GET DATA FROM GOOGLE SHEET AND RETURN AS AN ARRAY
function getData(){
  var spreadSheetId = "1iFiD3BQBF8oc2QxC9VJ1TKo59ka2CtkQray01c2UrtY"; //CHANGE
  var dataRange     = "Sheet1!A2:Q"; //CHANGE

  var ss = SpreadsheetApp.openById(spreadSheetId);
  var sheet = ss.getSheetByName("Sheet1");
  var range = sheet.getRange(dataRange);
  var values = range.getDisplayValues();
  Logger.log(values);
  return values;
}

 
//INCLUDE JAVASCRIPT AND CSS FILES
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}
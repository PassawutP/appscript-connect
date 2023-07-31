function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function myFunction() {
  var sheet = SpreadsheetApp.openById("1iFiD3BQBF8oc2QxC9VJ1TKo59ka2CtkQray01c2UrtY");
  var values = sheet.getDataRange().getValues();
  Logger.log(values);
  return values;
}


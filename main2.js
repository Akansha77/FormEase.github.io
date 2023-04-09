// App Script function to host the html page
function doGet() {
    return HtmlService.createHtmlOutputFromFile('index');
  }
  
  // App Script function to save data to sheet
  function saveData(data) {
    var sheet = SpreadsheetApp.getActiveSheet();
    sheet.appendRow(data);
  }
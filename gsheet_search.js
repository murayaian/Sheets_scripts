// Initialize the flag outside the function (optional, prevents unnecessary checks)
let hasShownAlert = false;

function searchBynameF1 (){
  // Get the spreadsheet and sheet object
  var ss = SpreadsheetApp.getActiveSpreadsheet();
    var formSht = ss.getSheetByName("Search Form 1");
    var recordSht = ss.getSheetByName("sheet to search")

    var clearCells = ["G6","G8","D10","G10","D12","G12","D14","G14","D16","G16","D18","G18","D20","G20","D22","G22","D24","G24","D26","G26","D28","G28","D30","G30"];

      for (var i = 0; i  < clearCells.length; i++){
        formSht.getRange(clearCells[i]).clearContent();
      }
    
    var sValue = formSht.getRange("D6").getValue();

    if (sValue === "" && !hasShownAlert) { // Add a flag to track if alert has been shown
        SpreadsheetApp.getUi().alert('Search query is blank, enter name to search in cell D6 and search again.');
        return;
        //hasShownAlert = true; // Set the flag to prevent further alerts
      }
    
    var sData = recordSht.getDataRange().getValues();
    var searchColumnIndex = 7;

  // Search for matching data
  var matchingRow;
  for (var i = 1; i < sData.length; i++) {
    var row = sData[i];
    if (row[searchColumnIndex] == sValue) {
      matchingRow = row;
      break; // Exit loop after finding a match
    }
  }
  // Handle search results
  if (matchingRow) {
      formSht.getRange("D8").setValue(row[6]) //mac
      formSht.getRange("D10").setValue(row[0]) //time
      formSht.getRange("D12").setValue(row[1]) //sector
      formSht.getRange("D14").setValue(row[2]) //dp
      formSht.getRange("D16").setValue(row[3]) //network
      formSht.getRange("D18").setValue(row[4]) //status connected
      //formSht.getRange("D20").setValue(row[17]) //timestamp
      formSht.getRange("D20").setValue(row[5]) //ipAddress
      //formSht.getRange("D24").setValue(row[22]) //model
      //formSht.getRange("D26").setValue(row[23]) //modelName
      //formSht.getRange("D28").setValue(row[24]) //firmware
      //formSht.getRange("D30").setValue(row[25]) //platform
      formSht.getRange("D22").setValue(row[8]) //type
      formSht.getRange("G6").setValue(row[9]) //uptime_downtime
      //formSht.getRange("G10").setValue(row[18]) //rxBytes_MBs
      //formSht.getRange("G12").setValue(row[19]) //txBytes_MBs
      //formSht.getRange("G14").setValue(row[20]) //rxRate_MBps
      //formSht.getRange("G16").setValue(row[21]) //txRate_MBps
      formSht.getRange("G8").setValue(row[10]) //rxSignal
      formSht.getRange("G10").setValue(row[11]) //txSignal
      formSht.getRange("G12").setValue(row[12]) //rxModulation
      formSht.getRange("G14").setValue(row[13]) //txModulation
      formSht.getRange("G16").setValue(row[14]) //noisefloor
      formSht.getRange("G18").setValue(row[15]) //downlinkCapacity
      formSht.getRange("G20").setValue(row[16]) //uplinkCapacity
    }
    else {
      if (i == sData.length && !hasShownAlert) { // Add a flag to track if alert has been shown
        SpreadsheetApp.getUi().alert('No record found');
        hasShownAlert = true; // Set the flag to prevent further alerts
      }
    }
  }

function searchBymacF1 (){
  // Get the spreadsheet and sheet object
  var ss = SpreadsheetApp.getActiveSpreadsheet();
    var formSht = ss.getSheetByName("Search Form 1");
    var recordSht = ss.getSheetByName("sheet to search")

    var clearCells = ["G6","G8","D10","G10","D12","G12","D14","G14","D16","G16","D18","G18","D20","G20","D22","G22","D24","G24","D26","G26","D28","G28","D30","G30"];

      for (var i = 0; i  < clearCells.length; i++){
        formSht.getRange(clearCells[i]).clearContent();
      }
    
    var sValue = formSht.getRange("D8").getValue();

    if (sValue === "" && !hasShownAlert) { // Add a flag to track if alert has been shown
        SpreadsheetApp.getUi().alert('Search query is blank, enter name to search in cell D8 and search again.');
        return;
        //hasShownAlert = true; // Set the flag to prevent further alerts
      }
    
    var sData = recordSht.getDataRange().getValues();
    var searchColumnIndex = 6;

  // Search for matching data
  var matchingRow;
  for (var i = 1; i < sData.length; i++) {
    var row = sData[i];
    if (row[searchColumnIndex] == sValue) {
      matchingRow = row;
      break; // Exit loop after finding a match
    }
  }
  // Handle search results
  if (matchingRow) {
      formSht.getRange("D6").setValue(row[7]) //name
      formSht.getRange("D10").setValue(row[0]) //time
      formSht.getRange("D12").setValue(row[1]) //sector
      formSht.getRange("D14").setValue(row[2]) //dp
      formSht.getRange("D16").setValue(row[3]) //network
      formSht.getRange("D18").setValue(row[4]) //status connected
      //formSht.getRange("D20").setValue(row[17]) //timestamp
      formSht.getRange("D20").setValue(row[5]) //ipAddress
      //formSht.getRange("D24").setValue(row[22]) //model
      //formSht.getRange("D26").setValue(row[23]) //modelName
      //formSht.getRange("D28").setValue(row[24]) //firmware
      //formSht.getRange("D30").setValue(row[25]) //platform
      formSht.getRange("D22").setValue(row[8]) //type
      formSht.getRange("G6").setValue(row[9]) //uptime_downtime
      //formSht.getRange("G10").setValue(row[18]) //rxBytes_MBs
      //formSht.getRange("G12").setValue(row[19]) //txBytes_MBs
      //formSht.getRange("G14").setValue(row[20]) //rxRate_MBps
      //formSht.getRange("G16").setValue(row[21]) //txRate_MBps
      formSht.getRange("G8").setValue(row[10]) //rxSignal
      formSht.getRange("G10").setValue(row[11]) //txSignal
      formSht.getRange("G12").setValue(row[12]) //rxModulation
      formSht.getRange("G14").setValue(row[13]) //txModulation
      formSht.getRange("G16").setValue(row[14]) //noisefloor
      formSht.getRange("G18").setValue(row[15]) //downlinkCapacity
      formSht.getRange("G20").setValue(row[16]) //uplinkCapacity
    }
    else {
      if (i == sData.length && !hasShownAlert) { // Add a flag to track if alert has been shown
        SpreadsheetApp.getUi().alert('No record found');
        hasShownAlert = true; // Set the flag to prevent further alerts
      }
    }
  }

function ClearF1 (){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
    var formSht = ss.getSheetByName("Search Form 1");
    var clearCells = ["D6","G6","D8","G8","D10","G10","D12","G12","D14","G14","D16","G16","D18","G18","D20","G20","D22","G22","D24","G24","D26","G26","D28","G28","D30","G30"];

      for (var i = 0; i  < clearCells.length; i++){
        formSht.getRange(clearCells[i]).clearContent();
  }
}

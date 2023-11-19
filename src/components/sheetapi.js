function doGet(e) {
  try {
    var sheetName = e.parameter.sheet;
    if (sheetName === "Sheet1") {
      return handleSheet1Get(e);
    } else {
      return ContentService.createTextOutput(JSON.stringify({ error: "Invalid sheet name" })).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ error: error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleSheet1Get(e) {
  if (e && e.parameter) {
    var doc = SpreadsheetApp.openById("1JRejDhpU72VehELBxMQgvVtO7l9Wi8MLUo59hwQVqTI");
    var sheet1 = doc.getSheetByName('Sheet1');
    var sheet2 = doc.getSheetByName('Sheet2');
    var udiseCode = parseInt(e.parameter.udiseCode); 
    var dataRange = sheet1.getDataRange();
    var values = dataRange.getValues();
    for (var i = 1; i < values.length; i++) {
      if (parseInt(values[i][1]) === udiseCode) {
        return ContentService.createTextOutput(JSON.stringify({ error: "Duplicate udiseCode" })).setMimeType(ContentService.MimeType.JSON);
      }
    }
    var timestamp = new Date();
    var nyayPanchayat = e.parameter.nyayPanchayat;
    var schoolName = e.parameter.schoolName;
    var enrollmentClass1 = e.parameter.enrollmentClass1 || '';
    var SkilledStudentsClass1 = e.parameter.SkilledStudentsClass1 || '';
    var MediumStudentsClass1 = e.parameter.MediumStudentsClass1 || '';
    var StrugglingStudentsClass1 = e.parameter.StrugglingStudentsClass1 || '';
    var enrollmentClass2 = e.parameter.enrollmentClass2 || '';
    var SkilledStudentsClass2 = e.parameter.SkilledStudentsClass2 || '';
    var MediumStudentsClass2 = e.parameter.MediumStudentsClass2 || '';
    var StrugglingStudentsClass2 = e.parameter.StrugglingStudentsClass2 || '';
    var enrollmentClass3 = e.parameter.enrollmentClass3 || '';
    var SkilledStudentsClass3 = e.parameter.SkilledStudentsClass3 || '';
    var MediumStudentsClass3 = e.parameter.MediumStudentsClass3 || '';
    var StrugglingStudentsClass3 = e.parameter.StrugglingStudentsClass3 || '';
    sheet1.appendRow([
      timestamp,
      udiseCode,
      nyayPanchayat,
      schoolName,
      enrollmentClass1,
      SkilledStudentsClass1,
      MediumStudentsClass1,
      StrugglingStudentsClass1,
      enrollmentClass2,
      SkilledStudentsClass2,
      MediumStudentsClass2,
      StrugglingStudentsClass2,
      enrollmentClass3,
      SkilledStudentsClass3,
      MediumStudentsClass3,
      StrugglingStudentsClass3,
    ]);

    
    sheet2.appendRow(['',nyayPanchayat,udiseCode,schoolName]);
    var response = ContentService.createTextOutput(JSON.stringify({ success: true }));

    
    var allowOrigin = PropertiesService.getScriptProperties().getProperty('ALLOW_ORIGIN');
    if (allowOrigin) {
      response.setHeader('Access-Control-Allow-Origin', allowOrigin);
    }
    return response.setMimeType(ContentService.MimeType.JSON);
  } else {
    return ContentService.createTextOutput(JSON.stringify({ error: "Invalid request parameters" })).setMimeType(ContentService.MimeType.JSON);
  }
}

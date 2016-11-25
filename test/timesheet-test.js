var validate = require('../src/validator').timesheet;

it("#01. timesheet-item should valid", function() {
    var TimesheetItem = require('../src/timesheet/timesheet-item');
    validate.timesheetItem(new TimesheetItem());
});
 
it("#02. daily-timesheet should valid", function() {
    var DailyTimesheet = require('../src/timesheet/daily-timesheet');
    validate.dailyTimesheet(new DailyTimesheet());
});
 
it("#03. weekly-timesheet should valid", function() {
    var WeeklyTimesheet = require('../src/timesheet/weekly-timesheet');
    validate.weeklyTimesheet(new WeeklyTimesheet());
});
 
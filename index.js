module.exports = {
    auth: {
        Account: require('./src/auth/account'),
        Profile: require('./src/auth/profile'),
        Role: require('./src/auth/role')
    },
    master: {
        Project: require('./src/master/project')
    },
    timesheet: {
        WeeklyTimesheet: require('./src/timesheet/weekly-timesheet'),
        DailyTimesheet: require('./src/timesheet/daily-timesheet'),
        TimesheetItem: require('./src/timesheet/timesheet-item')
    },
    map: require('./src/map'),
    validator: require('./src/validator')
}

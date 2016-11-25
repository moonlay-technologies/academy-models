module.exports = {

        auth: {
                account: require("./auth/account-validator"),
                profile: require("./auth/profile-validator"),
                role: require("./auth/role-validator")
        },

        master: {
                project: require("./master/project-validator")
        },

        timesheet: {
                timesheetItem: require("./timesheet/timesheet-item-validator"),
                dailyTimesheet: require("./timesheet/daily-timesheet-validator"),
                weeklyTimesheet: require("./timesheet/weekly-timesheet-validator")
        }
};

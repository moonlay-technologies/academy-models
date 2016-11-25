module.exports = {
    auth: {
        type: {
            Account: 'account',
            Profile: 'profile',
            Role: 'role'
        },
        collection: {
            Account: 'accounts',
            Role: 'roles'
        }
    },
    master: {
        type: {
            Project: 'project'
        },
        collection: {
            Project: 'projects'
        }
    },
    timesheet: {
        type: {
            WeeeklyTimesheet: 'weekly-timesheet'
        },
        collection: {
            WeeklyTimesheet: 'weekly-timesheets'
        }
    }
};

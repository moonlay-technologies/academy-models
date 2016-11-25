require("should");
var validateDailyTimesheet = require('./daily-timesheet-validator');


module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('year');
    data.year.should.instanceof(Number);

    data.should.have.property('month');
    data.month.should.instanceof(Number);

    data.should.have.property('week');
    data.week.should.instanceof(Number);

    data.should.have.property('weekToYear');
    data.weekToYear.should.instanceof(Number);

    data.should.have.property('userId');
    data.userId.should.instanceof(Object);

    data.should.have.property('user');
    data.user.should.instanceof(Object);
 
    data.should.have.property('timesheets');
    data.timesheets.should.instanceof(Array);
    for (var item of data.timesheets)
        validateDailyTimesheet(item);

    data.should.have.property('status');
    data.status.should.instanceof(String);
};

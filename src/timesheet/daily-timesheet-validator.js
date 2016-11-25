require("should");
var validateTimesheetItem = require('./timesheet-item-validator');


module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);

    data.should.have.property('year');
    data.year.should.instanceof(Number);

    data.should.have.property('month');
    data.month.should.instanceof(Number);

    data.should.have.property('day');
    data.day.should.instanceof(Number);

    data.should.have.property('userId');
    data.userId.should.instanceof(Object);

    data.should.have.property('user');
    data.user.should.instanceof(Object);

    data.should.have.property('date');
    data.date.should.instanceof(Date);

    data.should.have.property('items');
    data.items.should.instanceof(Array);
    for (var item of data.items)
        validateTimesheetItem(item);

    data.should.have.property('remark');
    data.remark.should.instanceof(String);
};

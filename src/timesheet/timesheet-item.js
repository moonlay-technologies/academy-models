'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class TimesheetItem extends BaseModel {
    constructor(source) {
        super('timesheet-item', '1.0.0');

        // Define properties.   
        this.projectId = {};
        this.project = {};

        this.assignorId = {};
        this.assignor = {};

        this.task = {
            id: {},
            task: {},
            remark: ''
        };

        this.mood = 3;
        this.duration = {
            task: 0,
            travel: 0
        };

        this.remark = '';

        this.copy(source);
    }
}

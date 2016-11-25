'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class WeeklyTimesheet extends BaseModel {
    constructor(source) {
        
        super('weekly-timesheet', '1.0.0');

        // Define properties.
        this.year= 0;
        this.month = 0;
        this.week = 0;
        this.weekToYear = 0;
        this.userId = {};
        this.user = {};
        
        this.timesheets = [];
        this.status = '';

        this.copy(source); 
    }
}
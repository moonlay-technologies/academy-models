'use strict'

var BaseModel = require('model-toolkit').BaseModel;

module.exports = class DailyTimesheet extends BaseModel {
    constructor(source) {
        super('daily-timesheet', '1.0.0');
 
        // Define properties.  
        this.year = 0;
        this.month = 0;
        this.day = 0;
        this.userId = {};
        this.user = {};
        
        this.date = new Date(); 
        this.items = [];
        
        this.remark = '';

        this.copy(source);
    }
}
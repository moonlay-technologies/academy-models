var validate = require('../src/validator').master;

it("#01. Project should valid", function() {
    var Project = require('../src/master/project');
    validate.project(new Project());
})
 
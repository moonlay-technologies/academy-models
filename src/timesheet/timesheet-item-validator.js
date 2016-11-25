require("should");

module.exports = function(data) {
    data.should.not.equal(null);
    data.should.instanceof(Object);
    
    data.should.have.property('projectId');
    data.projectId.should.not.equal(null);
    data.projectId.should.instanceof(Object);
    
    data.should.have.property('project');
    data.project.should.not.equal(null);
    data.project.should.instanceof(Object);
    
    
    data.should.have.property('assignorId');
    data.assignorId.should.not.equal(null);
    data.assignorId.should.instanceof(Object);
    
    data.should.have.property('assignor');
    data.assignor.should.not.equal(null);
    data.assignor.should.instanceof(Object);
    
    
    data.should.have.property('task');
    data.task.should.not.equal(null);
    data.task.should.instanceof(Object);
    
    data.task.should.have.property('id');  
    data.task.id.should.instanceof(Object);
    
    data.task.should.have.property('task');  
    data.task.task.should.instanceof(Object);
    
    data.task.should.have.property('remark');  
    data.task.remark.should.instanceof(String);
    
    
    data.should.have.property('duration');
    data.duration.should.not.equal(null);
    data.duration.should.instanceof(Object);
    
    data.duration.should.have.property('task');  
    data.duration.task.should.instanceof(Number);
    
    data.duration.should.have.property('travel');  
    data.duration.travel.should.instanceof(Number); 
    
     
    data.should.have.property('mood');  
    data.mood.should.instanceof(Number);
    
    data.should.have.property('remark');  
    data.remark.should.instanceof(String);
};
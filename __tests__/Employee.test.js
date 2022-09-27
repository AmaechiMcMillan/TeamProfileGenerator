const Employee = require("../lib/Employee");

describe('Employee', () => {

    describe('Initialization', () => {

        it('should get initialized correctly', () => {
            let newEmployee = new Employee("Sid", 1, "sid@gmail.com");
            
            expect(newEmployee.name).toEqual("Sid");
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual("sid@gmail.com");
        });
    });
    
    describe('getName', () => {
        
        it('should return the name that I give it, upon instantiation', () => {
            let newEmployee = new Employee("Sid", 1, "sid@gmail.com");
            
            expect(newEmployee.getName()).toEqual("Sid");
        });

    });
    
    describe('getRole', () => {

    });
})
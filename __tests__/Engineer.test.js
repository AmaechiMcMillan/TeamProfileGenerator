const Engineer = require("../lib/Engineer");
const Engineeer =  require("../lib/Engineer");




describe('Engineer', () => {

    describe('initialization', () => {

    })
    
    
    describe('initialization', () => {

        it('should return Engineer when asked what the role is', () => {
            // Arrange
            // Act
            let newEngineer = new Engineer("Johan", 1, "Johan@gmail.com", "github.com/johan")
            // Assert
            expect(newEngineer.getRole()).toEqual("Engineer");

        });

    })






})
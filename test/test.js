let expect = require('chai').expect;
let Robot = require("./../src/components/carpark/Robot");
let Console = require("./../src/components/console/Console");
let Stage = require("./../src/components/carpark/core/Stage");

describe('Commands:', function () {
    it('should accept command: PLACE 0,0,SOUTH', function () {
        let res = Robot.validateInput("PLACE 0,0,SOUTH");
        expect(res).to.be.equal(true);
    });
    it('should accept command: place 0,0,south ', function () {
        let res = Robot.validateInput(" place 0,0,south ");
        expect(res).to.be.equal(true);
    });
    it('should reject command: PLACE0,0,SOUTH', function () {
        let res = Robot.validateInput("PLACE0,0,SOUTH");
        expect(res).to.be.equal(false);
    });
    it('should reject command: PLACE 2,3,LEFT', function () {
        let res = Robot.validateInput("PLACE 2,3,LEFT");
        expect(res).to.be.equal(false);
    });
    it('should reject command: 5,5,NORTH', function () {
        let res = Robot.validateInput("PLACE 5,5.NORTH");
        expect(res).to.be.equal(false);
    });
    it('should reject command: 0,0 NORTH', function () {
        let res = Robot.validateInput("PLACE 0,0 NORTH");
        expect(res).to.be.equal(false);
    });
    it('should reject command: PLACE 0 0 NORTH', function () {
        let res = Robot.validateInput("PLACE 0 0 NORTH");
        expect(res).to.be.equal(false);
    });

});
describe('Carpark', function () {

    it('should reject command: REPORT ', function () {
        let res = Console.sendInput("REPORT",Stage);
        expect(res).to.be.equal(false);
    });
    it('should reject command: LEFT ', function () {
        let res = Console.sendInput("LEFT",Stage);
        expect(res).to.be.equal(false);
    });
    it('should reject command: RIGHT ', function () {
        let res = Console.sendInput("RIGHT",Stage);
        expect(res).to.be.equal(false);
    });

    it('should reject command: RIGHT ', function () {
        let res = Console.sendInput("MOVE",Stage);
        expect(res).to.be.equal(false);
    });
    it('should reject command: 0 ', function () {
        let res = Console.sendInput("0",Stage);
        expect(res).to.be.equal(false);
    });
    it('should create a Carpark 5 X 5', function () {
        let res = Stage.createCarPark(5 , 5,"Free");
        expect(res).to.be.equal(true);
    });
    it('should place the vehicle: PLACE 0,0,SOUTH', function () {
        let res = Console.sendInput(" PLACE 0,0,SOUTH",Stage);
        expect(res).to.be.equal(true);
    });
    it('should move the vehicle', function () {
        let res = Console.sendInput(" MOVE ",Stage);
        expect(res).to.be.equal(true);
    });
    it('should report the vehicle', function () {
        let res = Console.sendInput(" report ",Stage);
        expect(res).to.be.equal(true);
    });
    it('should rotate vehicle', function () {
        let res = Console.sendInput(" left ",Stage);
        expect(res).to.be.equal(true);
    });
    it('should not move vehicle', function () {
        let res = Console.sendInput(" move ",Stage);
        expect(res).to.be.equal(false);
    });
    it('should rotate vehicle', function () {
        let res = Console.sendInput(" right ",Stage);
        expect(res).to.be.equal(true);
    });
    it('should move vehicle', function () {
        let res = Console.sendInput(" move ",Stage);
        expect(res).to.be.equal(true);
    });
    it('should move the vehicle: place 4,4,north', function () {
        let res = Console.sendInput(" place 4,4,north ",Stage);
        expect(res).to.be.equal(true);
    });
    it('should report the vehicle', function () {
        let res = Console.sendInput(" report ",Stage);
        expect(res).to.be.equal(true);
    });

});
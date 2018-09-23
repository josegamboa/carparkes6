let Input = require("./core/models/Input");
let Command = require("./core/Command");
let Vehicle = require("./core/Vehicle");
let OutPut = require("./core/models/OutPut");
let Conf = require("./core/../conf");

let lastCommand = null;
let commandHistory=[];
let vehicle = null;
let stage=null;
let outPut =null;
class Robot {
    /**
     * @description get last valid command
     * @returns {*}
     */
    static getLastCommand(){
        try{
            return lastCommand;
        }catch(e){
            throw e;
        }
    }

    /**
     * @description Check if the input has a valid syntaxis and is a know one
     * @param command
     * @returns {boolean}
     */
    static validateInput(command) {
        try {
            let isValid = false;
            let cmd = new Command();
            let input = new Input(command);
            if(cmd.checkAction(input)===true){
                isValid=true;
                lastCommand = cmd.lastCommand;
                commandHistory.push(lastCommand);
            }
            return isValid;
        }
        catch (e) {
            throw e;
        }
    }

    /**
     * @description Execute the last valid command
     * @param Stage {Stage}
     * @returns {boolean}
     */
    static executeCommand(Stage) {
        try {
            let executed = false;
            if(lastCommand){
                if(lastCommand.hasOwnProperty("place")){
                    stage = Stage;
                    executed = Robot.placeVehicle(lastCommand.place);
                }else{
                    if(vehicle){
                      if(lastCommand.hasOwnProperty("move")){
                          executed = Robot.moveVehicle();
                      }else if(lastCommand.hasOwnProperty("report")){
                          executed = Robot.reportVehicle();
                          console.log("::::::::::::::::::Vehicle Position:::::::::::");
                          console.log(outPut);
                      }else if(lastCommand.hasOwnProperty("left") || lastCommand.hasOwnProperty("right")){
                         executed = Robot.changeVehicleOrientation(lastCommand.left || lastCommand.right );
                      }
                    }else{
                        console.log("Vehicle is not in the Carpark, please place the vehicle first");
                    }
                }
            }else{
                console.log("There is not a valid command");
            }
            return executed;
        }
        catch (e) {
            throw e;
        }
    }

    /**
     * @description Place the vehicle on the stage
     * @param place
     * @returns {boolean}
     */
    static placeVehicle(place) {
        try {
            let placed=false;
            if(stage.checkBlock(place.x,place.y)===true){
                if(vehicle){
                    stage.reset();
                }
                vehicle = new Vehicle(place);
                stage.carPark[place.x][place.y]="[==]";
                placed=true;
            }
            return placed;
        }
        catch (e) {
             throw e;
        }
    }

    /**
     * @description
     * @returns {boolean}
     */
    static moveVehicle() {
        try {
            let isValid=false;
            if(vehicle){
                let currentPlace = vehicle.place;
                let nextLocation = stage.advanceNextBlock(currentPlace.x,currentPlace.y,currentPlace.direction);
                if(nextLocation){
                    isValid = Robot.placeVehicle(nextLocation);
                }
            }
            return isValid;
        }
        catch (e) {
            throw e;
        }
    }

    /**
     *@description report vehicle position
     * @returns {*}
     */
    static reportVehicle(){
        try{
            let isValid = false;
            if(vehicle)
            {
                outPut=null;
                let op = new OutPut(vehicle.place);
                outPut = op.getFormatted();
                if(outPut){
                    isValid  =true;
                }
            }
            return isValid;
        }catch (e){
            throw e;
        }
    }

    /**
     * @description Change vehicles direction
     * @param input
     * @returns {boolean}
     */
    static changeVehicleOrientation(input) {
        try {
            let hasChanged = false;
            if(input===Conf.CM_RIGHT) {
                hasChanged =vehicle.changeDirection(Conf.EAST);
            }else if(input===Conf.CM_LEFT){
                hasChanged =vehicle.changeDirection(Conf.WEST);
            }
            return hasChanged;
        }
        catch (e) {
            console.log(e);
            // throw e;
        }
    }


}

module.exports = Robot;

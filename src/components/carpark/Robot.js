let Input = require("./core/models/Input");
let Command = require("./core/Command");
let Vehicle = require("./core/Vehicle");
let Stage = require("./core/Stage");
let lastCommand = null;
let commandHistory=[];
let vehicle = null;
let stage=null;
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
                    console.log("Ready to run");
                    if(vehicle){

                    }else{
                        console.log("Vehicle is not in the carpark");
                    }
                }
            }else{
                console.log("There is not a valid command");
            }

            return executed;
        }
        catch (e) {
            console.log(e);
            // throw e;
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
                console.log("Placing car:");
                if(vehicle){
                    stage.reset();
                }
                vehicle = new Vehicle(lastCommand.place);
                stage.carPark[place.x][place.y]="[==]";
                console.log(vehicle);
                placed=true;
            }
            return placed;
        }
        catch (e) {
             throw e;
        }
    }

    static moveVehicle(input) {
        try {
        }
        catch (e) {
            console.log(e);
            // throw e;
        }
    }
    static changeVehicleOrientation(input) {
        try {
        }
        catch (e) {
            console.log(e);
            // throw e;
        }
    }


}

module.exports = Robot;

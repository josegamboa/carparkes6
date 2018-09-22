let Input = require("./core/models/Input");
let Command = require("./core/Command");
let Stage = require("./core/Stage");

class Robot {
    static validateInput(input) {
        try {
            console.log("Basic structure working fine....");
            let cmd = new Command();
            let input = new Input("PLACE 5.6,1,SOUTH");
            return cmd.checkAction(input);

        }
        catch (e) {
            console.log(e);
            // throw e;
        }
    }

    static executeCommand(input) {
        try {
            Stage
        }
        catch (e) {
            console.log(e);
            // throw e;
        }
    }

    static placeVehicle(input) {
        try {
        }
        catch (e) {
            console.log(e);
            // throw e;
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

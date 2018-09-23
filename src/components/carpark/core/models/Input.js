let Action = require("./Action");
let Orientation = require("./../Orientation");
let Conf = require("./../../conf");
let config = require("config");

/**
 * @description Checks input and validates id ti is a valid and defined command
 */
class Input extends Action {
    constructor(input) {
        super(input);
        this._tempCommand = null;
        this._command = null;
    }

    /**
     * @description Get command object
     * @returns {null|*}
     */
    get command() {
        try {
            return this._command;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description Check if the input is valid command
     * @returns {boolean}
     */
    check() {
        try {
            let isValid = false;
            let place = this.input.indexOf(Conf.CM_PLACE);
            if (place >= 0) {
                if (this._checkPlace() === true) {
                    isValid = true;
                }
            } else if (this.input === Conf.CM_MOVE) {
                this._command = {move: Conf.CM_MOVE};
                isValid = true;
            } else if (this.input ===Conf.CM_LEFT) {
                this._command = {left: Conf.CM_LEFT};
                isValid = true;
            } else if (this.input ===Conf.CM_RIGHT) {
                this._command = {right: Conf.CM_RIGHT};
                isValid = true;
            } else if (this.input ===Conf.CM_REPORT) {
                this._command = {report: Conf.CM_REPORT};
                isValid = true;
            }
            return isValid;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description Check if the command place structure is valid
     * @returns {boolean}
     * @private
     */
    _checkPlace() {
        try {
            this._tempCommand = {place: {x: null, y: null, direction: null}};
            let isValid = false;
            let commandArray = this.input.split(Conf.CM_PLACE_SPLIT);
            if (commandArray[0]) {
                //check if the command is for placing the vehicle
                if (commandArray[0] === Conf.CM_PLACE.trim()) {
                    if (commandArray[1]) {
                        //check if the location structure is valid
                        if (this._checkLocation(commandArray[1]) === true) {
                            this._command = this._tempCommand;
                            this._tempCommand = null;
                            isValid = true;
                        }
                    }
                }
            }

            return isValid;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description Check if the vehicle location structure is valid
     * @param location
     * @returns {boolean}
     * @private
     */
    _checkLocation(location) {
        try {
            let isValid = false;
            let locationArray = location.split(Conf.CM_PLACE_SPLIT_XY);
            if (locationArray.length === 3) {
                let x = Number.isSafeInteger(Number.parseInt(locationArray[0]));
                let y = Number.isSafeInteger(Number.parseInt(locationArray[1]));
                if (x === true && y === true) {
                    this._tempCommand.place.x = Number.parseInt(locationArray[0]);
                    this._tempCommand.place.y = Number.parseInt(locationArray[1]);
                    if (Orientation.checkDirection(locationArray[2]) === true) {
                        this._tempCommand.place.direction = locationArray[2];
                        isValid = true;
                    }
                }
            }
            return isValid;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = Input;

let Action = require("./Action");
let config = require("config");
class Input extends Action {
    constructor(...command){
        super(...command);
        this.type = config.commandType.input;
    }

}
module.exports = Input;

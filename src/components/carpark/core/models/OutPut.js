let Action = require("src/components/carpark/core/models/Action");
let config = require("config");
class Input extends Action {
    constructor(...command){
        super(...command);
        this.type = config.commandType.output;
    }
}
module.exports=Input;

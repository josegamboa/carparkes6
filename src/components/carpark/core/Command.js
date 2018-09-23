let Action = require("./models/Action");
let Vehicle = require("./Vehicle");
let Exception = require("./models/Exception");
let Util = require("./Util");
class Command {

    constructor(){
        this._lastCommand = null;
    }

    /**
     * @description get last valid command
     * @returns {null|*}
     */
    get lastCommand(){
        try{
           return this._lastCommand;
        }catch(e){
           throw e;
        }
    }
    /**
     * @description  Check if the action is valid
     * @param action {Action}
     * @returns {boolean}
     */
    checkAction(action){
      try{
          let isValid=false;
          if(action instanceof  Action){
              if(action.check()===true){
                  this._lastCommand = action.command;
                  isValid = true;
              }
          }
          return isValid;
      }catch(e){
          throw e;
      }
   }
}
module.exports = Command;

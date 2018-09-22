let Action = require("./models/Action");
let Vehicle = require("./Vehicle");
let Exception = require("./models/Exception");
let Util = require("./Util");
class Command {

    constructor(){
        this._lastCommand = null;
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
                  console.log(action.command);
                  this._lastCommand = action.command;
                  console.log("Command is valid");
                  isValid = true;
              }else{
                  console.log("*****Error: Command is not valid****");
              }
          }else{
              console.log("Action is not defined");
          }
          return isValid;
      }catch(e){
          throw e;
      }
   }

   executeAction(){
        try{
          if( typeof this._lastCommand === 'object' ){
             if(this._lastCommand.hasOwnProperty("place")){
                this._vehicle = new Vehicle(this._lastCommand);
             }else{
                 if(this._vehicle instanceof Vehicle){

                 }
             }
          }
        }catch(e){
            throw e;
        }
   }

}
module.exports = Command;

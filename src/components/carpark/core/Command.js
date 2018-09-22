let Action = require("./models/Action");
let Exception = require("./models/Exception");
let Util = require("./Util");
class Command {
    /**
     *
     * @param action {Action}
     */
    executeAction(action){
      try{
          if(action instanceof  Action){
              if(action.check()===true){
                 console.log("Command is valid");
              }else{
                  console.log("*****Error: Command is not valid****");
              }
          }else{
              console.log("Action is not defined");
              //throw new Exception({code:"ACTION_NOT_VALID"});
          }
      }catch(e){
          throw e;
      }
   }
}
module.exports = Command;

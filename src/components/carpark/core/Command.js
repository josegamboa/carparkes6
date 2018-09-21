let Action = require("./models/Action");
let Exception = require("./models/Exception");
let Util = require("./Util");
class Command {
    executeAction(action){
      try{
          if(Util.isAction(action)){

          }else{
              throw new Exception({code:"ACTION_NOT_VALID"});
          }
      }catch(e){
          throw e;
      }
   }
}
module.exports = Command;

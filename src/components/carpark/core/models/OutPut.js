let Action = require("./Action");
let config = require("config");
class Input extends Action {
    constructor(command){
        super(command);
    }

    /**
     * @description get formatted output
     * @returns {string}
     */
    getFormatted(){
        try{
            let out =null;
           if(this.input){
               if(this.input.hasOwnProperty("x")){
                   out =this.input.x;
               }
               if(this.input.hasOwnProperty("y")){
                   out +=","+this.input.y;
               }
               if(this.input.hasOwnProperty("direction")){
                   out +=","+this.input.direction;
               }
           }
           return out;
        }catch(e){
            throw e;
        }
    }
}
module.exports=Input;

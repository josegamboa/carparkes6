let inquirer = require('inquirer');
let Robot = require("../carpark/Robot");
/**
 * @description Manages the interaction for sending the command to the Carpark
 */
class Console {
    /**
     * @description Start the command line interaction with the user
     * @param Stage {Stage}
     * @return void
     */
    static askCommand(Stage){
        try{
            var questions = [
                {
                    type: 'input',
                    name: 'command',
                    message: "Please type a command:"
                }
            ];
                inquirer.prompt(questions).then(answer => {
                    Console.sendInput(answer.command,Stage);
                    Console.askCommand(Stage);
                });

        }catch(e){
           Console.log("It was an error executing the command, please try again....");
            Console.askCommand(Stage);
        }
    }

    /**
     * @description Send command to the carpark
     * @param input
     * @param Stage
     */
   static sendInput(input,Stage){
      try{
          let isValid = false;
          if(Robot.validateInput(input)){
              if(Robot.executeCommand(Stage)===true){
                  Stage.printCarPark();
                  isValid = true;
              }else{
                  console.log("Error executing command...");
              }
          }else{
              console.log("Command: "+input+" not found.");
          }
          return isValid;
      } catch(e){
          console.log(e);
          return false;
         // throw e;
      }
   }
}
module.exports = Console;
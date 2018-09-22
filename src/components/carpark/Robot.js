let Input = require("./core/models/Input");
let Command = require("./core/Command");
class Robot
{
    static executeInput(input)
    {
        try
        {
            console.log("Basic structure working fine....");
            let cmd = new Command();
            let input = new Input("PLACE 2,1,SOUTH");
            cmd.executeAction(input);
        }
        catch (e)
        {
            console.log(e);
           // throw e;
        }
    }
}
module.exports = Robot;

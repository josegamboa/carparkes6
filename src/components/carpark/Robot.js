let Input = require("./core/models/Input");
let Command = require("./core/Command");
class Robot
{
    static executeInput(input)
    {
        try
        {
            console.log("Basic structure working fine....");
            //let cmd = new Command(new Input(input));
        }
        catch (e)
        {
            throw e;
        }
    }
}
module.exports = Robot;

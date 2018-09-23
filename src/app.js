let Stage = require("./components/carpark/core/Stage");
let Console = require("./components/console/Console");
if(Stage.createCarPark(5 , 5,"Free")){
    console.log("********CarPark is ready********");
    Console.askCommand(Stage);
}


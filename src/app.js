let Stage = require("./components/carpark/core/Stage");
let Console = require("./components/console/Console");
if(Stage.createCarPark(5 , 5,"Free")){
    Stage.printCarPark();
    console.log("********CarPark is ready, place place your car: PLACE 0,0,SOUTH ********");

    Console.askCommand(Stage);
}


let Robot = require("./components/carpark/Robot");
let Stage = require("./components/carpark/core/Stage");
if(Stage.createCarPark(5 , 5,"Free")){
    let x =0,y=0;
    if(Stage.checkBlock(x,y)){
        Stage.carPark[x][y]="[==]";
        console.log("Starting at:");
        console.log(Stage.carPark);
        console.log("Moving to:");
        let r = Stage.advanceNextBlock(x,y,"WEST");
        if(Stage.checkBlock(r.x,r.y)){
            console.log("Ready to move");

            Stage.carPark[x][y]="free";
            Stage.carPark[r.x][r.y]="[==]";
            console.log(r);
            console.log(Stage.carPark);
        }else{
            console.log("Location is not available");
        }


    }else {
        console.log("Position does not exist");
    }
}


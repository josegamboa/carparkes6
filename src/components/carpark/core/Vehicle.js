class Vehicle{

    constructor(place){
        this._place = place;
    }
    get place(){
        try{
         return this._place;
        }catch(e){
            throw e;
        }
    }
    move(place){
        try{

        }catch(e){
            throw e;
        }
    }


}
module.exports = Vehicle;
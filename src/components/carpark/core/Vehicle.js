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

    /**
     * @description change vehicle direction
     * @param place
     * @returns {boolean}
     */
    changeDirection(place){
        try{
            this._place.direction=place;
            return true;
        }catch(e){
            throw e;
        }
    }


}
module.exports = Vehicle;
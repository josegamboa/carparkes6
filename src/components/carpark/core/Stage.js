let Orientation = require("./Orientation");
/**
 * @description Check and move on CarPark positions
 */
class Stage {
    /**
     * @description Create a new Carpark
     * @param rows
     * @param cols
     * @param defValue
     * @returns {boolean}
     */
    static createCarPark(rows, cols, defValue) {
        try {
            let array = [];
            for (let i = 0; i < rows; i++) {
                array.push([]);
                array[i].push(new Array(cols));
                for (let j = 0; j < cols; j++) {
                    array[i][j] = defValue;
                }
            }
            Stage.carPark = array;
            return true;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description Check if the position exists on the Carpark
     * @param x
     * @param y
     * @returns {boolean}
     */
    static checkBlock(x = -1, y = -1) {
        try {
            if (Stage.carPark[x][y]) {
                return true;
            } else {
                return false;
            }

        } catch (e) {
            return false;
        }
    }

    /**
     * @description Move to the next block based on the direction
     * @param x
     * @param y
     * @param direction
     * @returns {*}
     */
    static advanceNextBlock(x, y, direction) {
        try {
            let coord = {
                x: x,
                y: y,
                direction: direction
            };
            let orientation = Orientation.getPerspective(direction);
            if (orientation) {
                 return Stage.moveDirection(orientation, x, y);
            } else {
                return null;
            }
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description Move to the next direction
     * @param orientation
     * @param x
     * @param y
     * @returns {*}
     */
    static moveDirection(orientation, x, y) {
        try {
            let coord = {x: null, y: null,direction:null};
            switch (orientation.axe) {
                case "y":
                    coord.direction = orientation.direction;
                    if (orientation.operation === "+") {
                        coord.y = y + 1;
                        coord.x = x;
                        return coord;
                    } else if (orientation.operation === "-") {
                        coord.y = y - 1;
                        coord.x = x;
                        return coord;
                    }else{
                        return null;
                    }
                    break;
                case "x":
                    coord.direction = orientation.direction;
                    if (orientation.operation === "+") {
                        coord.y = y;
                        coord.x = x+1;
                        return coord;
                    } else if (orientation.operation === "-") {
                        coord.y =0;
                        coord.x = x-1;
                        return coord;
                    }else{
                        return null;
                    }
                    break;
            }
        } catch (e) {
            throw e;
        }
    }
}

module.exports = Stage;
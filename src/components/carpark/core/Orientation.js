let Conf = require("./../conf");

class Orientation {
    /**
     * @description Check if the vehicle direction is valid
     * @param direction
     * @returns {boolean}
     * @private
     */
    static checkDirection(direction) {
        try {
            switch (direction) {
                case Conf.NORTH:
                    return true;
                    break;
                case Conf.EAST:
                    return true;
                    break;
                case Conf.SOUTH:
                    return true;
                    break;
                case Conf.WEST:
                    return true;
                    break;
                default:
                    return false;
            }
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description Get the orientation based on the direction, it indicates to increase or decrease a value
     * @param direction
     * @returns {*}
     */
    static getPerspective(direction) {
        try {
            let perspective={
                operation:null,
                axe:null,
                direction:null
            };
                switch (direction) {
                    case Conf.NORTH:
                        //how to get north
                        perspective.axe="x";
                        perspective.operation="-";
                        perspective.direction=Conf.NORTH;
                        return perspective ;
                        break;
                    case Conf.EAST:
                        //how to get east
                        perspective.axe="y";
                        perspective.operation="+";
                        perspective.direction=Conf.EAST;
                        return perspective ;
                        break;
                    case Conf.SOUTH:
                        //how to get south
                        perspective.axe="x";
                        perspective.operation="+";
                        perspective.direction=Conf.SOUTH;
                        return perspective ;
                        break;
                    case Conf.WEST:
                        //how to get west
                        perspective.axe="y";
                        perspective.operation="-";
                        perspective.direction=Conf.WEST;
                        return perspective ;
                        break;
                    default:
                        return null;
                }

        } catch (e) {
            throw e;
        }
    }
}

module.exports = Orientation;
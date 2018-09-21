class Util
{
    /**
     * @description check if the action is a valid instance of action
     * @param action {Object}
     * @returns {boolean}
     */
    static isAction(action)
    {
        try
        {
            if (action instanceof "Action")
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        catch (e)
        {
            throw e;
        }
    }
}
module.exports = Util;

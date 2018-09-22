class Action
{
    constructor(input)
    {
        this._input = String(input.trim()).toUpperCase();
        this._type = null;
        this._error = null;
        this._isvalid = false;
    }

    /**
     * @description Check if the action is valid
     * @returns {boolean}
     */
     get isValid(){
         try
         {
             return this._isvalid;
         }
         catch (e)
         {
             throw e;
         }
     }
    /**
     * @description Return Command
     * @returns {*[]|*}
     */
    get input()
    {
        try
        {
            return this._input;
        }
        catch (e)
        {
            throw e;
        }
    }

    /**
     * @description Get type
     * @returns {String}
     */
    get type()
    {
        try
        {
            return this._type;
        }
        catch (e)
        {
            throw e;
        }
    }

    /**
     * @description
     * @param  type {String}
     */
    set type(type)
    {
        try
        {
            this._type = type;
        }
        catch (e)
        {
            throw e;
        }
    }

    get error()
    {
        try
        {
            return this._error;
        }
        catch (e)
        {
            throw e;
        }
    }

    set error(err)
    {
        try
        {
             this._error = err;
        }
        catch (e)
        {
            throw e;
        }
    }
}

module.exports = Action;

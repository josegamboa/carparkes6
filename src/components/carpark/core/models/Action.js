class Action
{
    constructor(...command)
    {
        this._command = command;
        this.type = null;
        this.error = null;
    }

    /**
     * @description Return Command
     * @returns {*[]|*}
     */
    get command()
    {
        try
        {
            return this._command;
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
            return this.type;
        }
        catch (e)
        {
            throw e;
        }
    }

    /**
     * @description
     * @param type
     */
    set type(type)
    {
        try
        {
            this.type = type;
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
            return this.error;
        }
        catch (e)
        {
            throw e;
        }
    }

    set error(error)
    {
        try
        {
            this.error = error;
        }
        catch (e)
        {
            throw e;
        }
    }
}

module.exports = Action;

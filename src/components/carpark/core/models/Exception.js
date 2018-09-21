class Exception {
    constructor({code, message, info}) {
        this.code = code || null;
        this.message = message || null;
        this.info = info || null;
    }

    /**
     * @description Get Exception code
     * @returns {*}
     */
    get code() {
        try {
            return this.code;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description Get Exception message
     * @returns {*}
     */
    get message() {
        try {
            return this.code;
        } catch (e) {
            throw e;
        }
    }

    /**
     * @description Get Exception info
     * @returns {*}
     */
    get info() {
        try {
            return this.code;
        } catch (e) {
            throw e;
        }
    }
}

module.exports = Exception;

/**
 * @class Database
 */
class Database {

    /**
     * Constructor Function
     *
     * @param {object} firebaseApp Firebase app instance
     * @constructor
     */
    constructor (firebaseApp) {

        this.database = firebaseApp.database();

    }

}

export default Database;
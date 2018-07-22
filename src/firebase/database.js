/**
 * **Note**: `firebase` is global namespace
 *
 * @class Database
 */
class Database {

    /**
     * Constructor Function
     *
     * @constructor
     */
    constructor () {

        this.database = firebase.database();

    }

}

export default Database;
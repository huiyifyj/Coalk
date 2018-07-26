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

    /**
     * Submit your comment data object to firebase.
     *
     * @param {object} inputObj Your comment data object.
     */
    submit (inputObj) {

        firebase.database().ref(inputObj.name).set(inputObj, function (error) {
            if (error) {console,log('error')}
            else {console.log('Comment successful')}
        })

    }

}

export default Database;
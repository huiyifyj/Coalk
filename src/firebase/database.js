/**
 * **Note**:
 * - `firebase` is global namespace.
 * - Keys must be non-empty strings and can't contain `.`, `#`, `$`, `/`, `[`, or `]`.
 *
 * @class Database
 */
class Database {

    /**
     * Constructor Function
     *
     * @param {object} option The option that is handled from app.js file.
     * @constructor
     */
    constructor (option) {

        this.option = option;

        this.database = firebase.database();

        this.ROOT = this.database.ref('/');

    }

    /**
     * Submit your comment data object to firebase.
     *
     * @param {object} inputObj Your comment data object.
     */
    submit (inputObj) {

        this.ROOT.push().set(inputObj, (error) => {
            if (error) {
                throw error;
            }
            else {
                console.log('Comment successful');
            }
        });

    }

    /**
     * Get comments number totally and listening it.
     *
     * @param {function} f The function that display comments number.
     */
    commentsNum (f) {

        this.ROOT.on('value', f);

    }

    /**
     * Display comments.
     *
     * @param {function} f The function that display comments.
     */
    displayComments (f) {

        this.ROOT.on('child_added', f);

    }

}

export default Database;
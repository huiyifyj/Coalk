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

        this.ROOT = firebase.database().ref('/' + this.option.path);

    }

    /**
     * Judging whether the database has existed current path name.
     */
    havePath () {

        // this.database

    }

    /**
     * Submit your comment data object to firebase.
     *
     * @param {object} inputObj Your comment data object.
     */
    submit (inputObj) {

        this.ROOT.push().set(inputObj)
            .then(() => {
                console.log('Comment succeeded');
            })
            .catch((error) => {
                throw error;
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
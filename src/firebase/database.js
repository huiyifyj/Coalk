/**
 * **Note**:
 * - `firebase` is global namespace.
 * - Keys must be non-empty strings and can't contain `.`, `#`, `$`, `/`, `[`, or `]`.
 *
 * @class Database
 */
class Database {

    /**
     * @param {object} option The option that is handled from app.js file.
     * @constructor
     */
    constructor (option) {

        this.option = option;

        this.ROOT = firebase.database().ref('/' + this.option.path);

    }

    /**
     * Submit your comment data object to firebase.
     *
     * @param {object} inputObj Your comment data object.
     */
    submitComment (inputObj) {

        this.ROOT.push(inputObj)
            .then(() => {
                console.log('Comment succeeded');

                // Remove value when comment succeeded.
                for(var key in inputObj){
                    document.getElementById('fyj-' + key).value = '';
                }
            })
            .catch((error) => {
                throw error;
            });

    }

    /**
     * Get the comments number of this current page.
     *
     * @return {Promise}
     */
    commentsNum () {

        return new Promise((resolve, reject) => {
            try {
                this.ROOT.once('value', (snapshot) => {
                    resolve(snapshot.numChildren());
                });
            } catch (error) {
                reject(error);
            }
        });

    }

    /**
     * Display comments.
     *
     * @param {function} f The callback function that display comments.
     */
    displayComments (f) {

        this.ROOT.on('child_added', f);

    }

}

export default Database;
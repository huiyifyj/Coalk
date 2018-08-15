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
        this.row = option.row;

        this.ROOT = firebase.database().ref('/' + this.option.path);
        this.COMMENT = this.ROOT.child('comments');
        this.REPLY = this.ROOT.child('reply');

    }

    /**
     * Submit your comment data object to firebase.
     *
     * @param {object} inputObj Your comment data object.
     */
    submitComment (inputObj) {

        this.COMMENT
            .once('value')
            .then((snapshot) => {

                /**
                 * @type {Timestamp} The timestamp that comment is posted.
                 */
                inputObj['time'] = Date.now();

                /**
                 * @type {number} Add 'id' for comment data.
                 */
                inputObj['id'] = snapshot.numChildren() + 1;

                this.COMMENT
                    .push(inputObj)
                    .then(() => {

                        /**
                         * Comment successful. And remove value.
                         */
                        console.log('Comment succeeded');
                        new Notification('Comment succeeded');

                        for (var key in inputObj) {
                            document.getElementById('fyj-' + key).value = '';
                        }

                    })
                    .catch((error) => {
                        throw error;
                    });

            })
            .catch((error) => {
                throw error;
            });

    }

    /**
     * Get the comments number of this current page.
     *
     * @param {Function} f Callback function.
     */
    commentsNum (f) {

        this.COMMENT
            .on('value', f);

    }

    /**
     * Display comments by ASC. Sort by ascending order of time.
     *
     * @param {Function} f Callback function.
     */
    commentsByASC (f) {

        this.COMMENT
            .orderByChild('id')
            .limitToLast(this.row)
            .on('child_added', f);

    }

    /**
     * Load more comments every clicking on button.
     *
     * @param {number} id The last comment node id.
     * @return {Promise}
     */
    loadComments (id) {

        return  this.COMMENT
                    .orderByChild('id')
                    .endAt(id - 1)
                    .limitToLast(this.row)
                    .once('value');

    }

    /**
     * Display comments by DESC.
     * Sort by descending order of time.
     *
     * @return {Function} f Callback function
     */
    commentsByDESC () {
        // TO DO
    }

}

export default Database;

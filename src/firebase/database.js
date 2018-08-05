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
                this.ROOT.once('value')
                    .then((snapshot) => {
                        resolve(snapshot.numChildren());
                    });
            } catch (error) {
                reject(error);
            }
        });

    }

    /**
     * Display comments by ASC.
     * Sort by ascending order of time.
     *
     * @return {Promise}
     */
    commentsByASC () {

        return new Promise((resolve, reject) => {
            try {
                this.ROOT
                    .orderByChild('time')
                    .limitToLast(this.row)
                    .once('value')
                    .then((snapshot) => {
                        let arr = [];

                        snapshot.forEach((snapshotChild) => {
                            arr.push(snapshotChild.val());
                        });

                        resolve(arr.reverse());
                    })
            } catch (error) {
                reject(error);
            }
        });

    }

    /**
     * Load more comments every clicking on button.
     */
    loadComments () {

        return new Promise((resolve, reject) => {
            try {
                this.ROOT
                    .orderByChild('time')
                    .startAt(1533265200000)
                    .limitToLast(this.row)
                    .once('value')
                    .then()
            } catch (error) {
                reject(error);
            }
        });

    }

    /**
     * Display comments by DESC.
     * Sort by descending order of time.
     *
     * @return {Promise}
     */
    commentsByDESC () {
        // TO DO
    }

}

export default Database;
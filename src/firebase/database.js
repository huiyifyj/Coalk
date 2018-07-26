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

        this.database.ref('/').push().set(inputObj, function (error) {
            if (error) {
                throw error;
            }
            else {
                console.log('Comment successful')
            }
        });

    }

    /**
     * Get comments number totally.
     */
    commentsNum () {

        let commentsNum = this.database.ref('/commentsNum');
        commentsNum.on('value', function(snapshot) {

            let ELEMENT = document.querySelector('.comment-num');

            if (snapshot.val()) {
                ELEMENT.innerText = snapshot.val();
            }
            else {
                ELEMENT.innerText = 'No';
            }

        });

    }

}

export default Database;
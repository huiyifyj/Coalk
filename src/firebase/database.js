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
    constructor (option) {

        this.option = option;

        this.initFirebase();

        this.database = firebase.database();

    }

    /**
     * Note: 'firebase' is global namespace
     * Initialize firebase app by apiKey and databaseURL.
     * - See [firebase document](https://firebase.google.com/docs/web/setup).
     */
    initFirebase () {

        firebase.initializeApp({
            apiKey: this.option.apiKey,
            databaseURL: this.option.databaseURL
        });

    }

    /**
     * Submit your comment data object to firebase.
     *
     * @param {object} inputObj Your comment data object.
     */
    submit (inputObj) {

        this.database.ref('/').push().set(inputObj, function (error) {
            if (error) {console,log('error')}
            else {console.log('Comment successful')}
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
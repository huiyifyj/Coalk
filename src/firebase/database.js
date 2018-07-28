import commentTmp from '../view/comment';

import noComment from '../view/noComment.html';

/**
 * **Note**: `firebase` is global namespace
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

        this.path = option.path;
        console.log(this.path)

        this.database = firebase.database();

        this.ROOT = this.database.ref('/');

    }

    /**
     * Submit your comment data object to firebase.
     *
     * @param {object} inputObj Your comment data object.
     */
    submit (inputObj) {

        this.ROOT.push().set(inputObj, function (error) {
            if (error) {
                throw error;
            }
            else {
                console.log('Comment successful')
            }
        });

    }

    /**
     * Get comments number totally and listening it.
     */
    commentsNum () {

        this.ROOT.on('value', function(snapshot) {

            let ELEMENT = document.querySelector('.comment-num');

            if (snapshot.val()) {
                ELEMENT.innerText = snapshot.numChildren();
            }
            else {
                ELEMENT.innerText = 'No';

                document.getElementById('comments-main').innerHTML = noComment;
            }

        });

    }

    /**
     * Display comments.
     */
    displayComments () {

        this.ROOT.on('child_added', function (data) {
            console.log(data.val().name);

            document.getElementById('comments-main').innerHTML += new commentTmp(data.val()).template();
        });

    }

}

export default Database;
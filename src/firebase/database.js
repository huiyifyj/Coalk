import noComment from '../view/noComment.html';
import comment from '../view/comment.html';

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

        let commentsNum = this.ROOT.child('commentsNum');

        this.ROOT.on('child_added', function (data) {
            console.log(data.val().name);
        })

        this.ROOT.on('value', function(snapshot) {

            let ELEMENT = document.querySelector('.comment-num');

            if (snapshot.val()) {
                ELEMENT.innerText = snapshot.numChildren();

                document.getElementById('comments-main').innerHTML = comment;
            }
            else {
                ELEMENT.innerText = 'No';

                document.getElementById('comment').innerHTML = noComment;
            }

        });

    }

}

export default Database;
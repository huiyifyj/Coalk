import handleOption from './util/option';

import submit from './events/submit';

import input from './view/input.html';
import footer from './view/footer.html';
import noComment from './view/noComment.html';
import commentTmp from './view/comment';

import database from './firebase/database';

/**
 * @class App
 */
class App {

    /**
     * @param {Object} option Your options that are used to initialize your comment app.
     * @constructor
     */
    constructor (option) {

        this.option = handleOption(option);

        this.initFirebase();

        this.database = new database(this.option);

        this.initView();

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
     * Initialize essential view interface and other configuration.
     */
    initView () {

        const ROOT = this.option.container;

        ROOT.innerHTML = input + footer;

        this.listen();

    }

    listen () {

        /**
         * Attach submit event to button that id is `submit-comment`.
         */
        document.getElementById('submit-comment').addEventListener('click', () => {
            submit(this.database);
        });

        /**
         * Get comments number and add noComment.html when no comment.
         */
        this.database.commentsNum()
            .then((num) => {
                document.querySelector('.comment-num').innerText = (num) ? num : 'No';

                if (!num) {
                    document.getElementById('comments-main').innerHTML = noComment;
                }
            })
            .catch((error) => {
                throw error;
            });

        /**
         * Display comments.
         */
        this.database.ascComments((snapshot) => {

            document.getElementById('comments-main').innerHTML += new commentTmp(snapshot.val(), this.option).template();

        });

    }

}

export default App;
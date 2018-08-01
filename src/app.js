import handleOption from './util/option';

import submit from './events/submit';

import commentTmp from './view/comment';

import input from './view/input.html';
import footer from './view/footer.html';
import noComment from './view/noComment.html';

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

        const ROOT_ELEMENT = this.option.container;

        ROOT_ELEMENT.innerHTML += input;
        ROOT_ELEMENT.innerHTML += footer;

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
         * Listening comments number event.
         */
        this.database.commentsNum((snapshot) => {

            let ELEMENT = document.querySelector('.comment-num');

            if (snapshot.val()) {
                ELEMENT.innerText = snapshot.numChildren();
            } else {
                ELEMENT.innerText = 'No';

                document.getElementById('comments-main').innerHTML = noComment;
            }

        });

        /**
         * Display comments.
         */
        this.database.displayComments((data) => {

            document.getElementById('comments-main').innerHTML += new commentTmp(data.val()).template();

        });

    }

}

export default App;
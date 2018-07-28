import handleOption from './util/option';

import submit from './events/submit';
import view from './events/view';

import input from './view/input.html';
import footer from './view/footer.html';

import database from './firebase/database';

// Import CSS stylesheet
import './scss/index.scss';

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

        // Listening comments number event.
        this.database.commentsNum(view.displayCommentsNum);

        // Display comments.
        this.database.displayComments(view.displayCommentsView);

        ROOT_ELEMENT.innerHTML += footer;

        /**
         * Attach submit event to button that id is `submit-comment`.
         */
        document.getElementById('submit-comment').addEventListener('click', () => {
            submit(this.database);
        });

    }

}

export default App;
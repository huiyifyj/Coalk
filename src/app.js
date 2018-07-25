import handleOption from './util/option';

import submit from './events/submit';

import {input, footer, comment, noComment} from './view/view';

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
        this.initView();

    }

    /**
     * Initialize essential view interface and other configuration.
     */
    initView () {

        const ROOT_ELEMENT = this.option.container;

        ROOT_ELEMENT.innerHTML += input;
        ROOT_ELEMENT.innerHTML += comment;
        ROOT_ELEMENT.innerHTML += noComment;
        ROOT_ELEMENT.innerHTML += footer;

        /**
         * Attach submit event to button that id is `submit-comment`.
         */
        document.getElementById('submit-comment').addEventListener('click', submit);

    }

    /**
     * Initialize firebase app by apiKey and databaseURL.
     * - See [firebase document](https://firebase.google.com/docs/web/setup).
     */
    initFirebase () {

        const APIKEY = this.option.apiKey;
        const DATABASEURL = this.option.databaseURL;

        // Note: 'firebase' is global namespace
        firebase.initializeApp({
            apiKey: APIKEY,
            databaseURL: DATABASEURL
        });

    }

}

export default App;
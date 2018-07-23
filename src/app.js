import handleOption from './util/option';

import addEvents from './events';

import {input, footer, comment, noComment} from './view/view';

import './scss/index.scss';

/**
 * @class App
 */
class App {

    /**
     * @param {Object} option Your options taht are used to initialize your comment app.
     * @constructor
     */
    constructor (option) {

        this.option = handleOption(option);

        this.initFirebase();
        this.initView();

        addEvents.submit();

    }

    /**
     * Initialize essential view interface and other configuration.
     */
    initView () {

        const ROOT_ELEMENT = this.option.container;

        ROOT_ELEMENT.innerHTML += input;
        // ROOT_ELEMENT.innerHTML += comment;
        // ROOT_ELEMENT.innerHTML += noComment;
        ROOT_ELEMENT.innerHTML += footer;

        document.getElementById('load-more').hidden = true;

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
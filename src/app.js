import handleOption from './util/option';

import {input, footer, comment, noComment} from './view/view';

import database from './firebase/database';

import './scss/index.scss';

/**
 * @class App
 */
class App {

    /**
     * Constructor Function
     *
     * @param {Object} option - See README
     * @constructor
     */
    constructor (option) {

        this.option = handleOption(option);

        this.firebaseApp = this.initFirebase();

        this.initView();

    }

    /**
     * Initialize view interface and other configuration.
     */
    initView () {

        const ROOT_ELEMENT = this.option.container;

        ROOT_ELEMENT.innerHTML += input;
        ROOT_ELEMENT.innerHTML += comment;
        ROOT_ELEMENT.innerHTML += noComment;
        ROOT_ELEMENT.innerHTML += footer;

    }

    /**
     * Initialize firebase app by apiKey and databaseURL.
     *
     * @return {object} A reference to the firebase database service
     */
    initFirebase () {

        const APIKEY = this.option.apiKey;
        const DATABASEURL = this.option.databaseURL;

        firebase.initializeApp({
            apiKey: APIKEY,
            databaseURL: DATABASEURL
        });

        return firebase;

    }

}

export default App;
import handleOption from './util/option';

import addEvents from './events';

import {input, footer, comment, noComment} from './view/view';

import database from './firebase/database';

import './scss/index.scss';

/**
 * @class App
 */
class App {

    /**
     * @param {Object} option Your options taht are used to initialize your app.
     * @constructor
     */
    constructor (option) {

        this.option = handleOption(option);

        this.initFirebase();
        this.initView();

        addEvents.submit();

        // Enables logging for Firebase database
        // 默认是不开启的，如果你开启后想关闭那就必须在 使用 false 参数关闭
        // firebase.database.enableLogging(true, true);
        firebase.database.enableLogging(false);

        // document.getElementById('load-more').hidden = true;

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

    }

    /**
     * Initialize firebase app by apiKey and databaseURL.
     * - See [firebase document](https://firebase.google.com/docs/web/setup).
     */
    initFirebase () {

        const APIKEY = this.option.apiKey;
        const DATABASEURL = this.option.databaseURL;

        firebase.initializeApp({
            apiKey: APIKEY,
            databaseURL: DATABASEURL
        });

    }

}

export default App;
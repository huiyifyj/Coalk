import handleOption from './util/option';
import addEvents from './util/events';

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
     * @param {Object} option Your options taht are used to initialize your app.
     * @constructor
     */
    constructor (option) {

        this.option = handleOption(option);

        this.initFirebase();
        this.initView();

        this.event = new addEvents();
        console.log(this.event.submit('submit-comment', ['fyj-nick', 'fyj-email', 'fyj-url', 'fyj-content']));

        // Enables logging for Firebase database
        // 默认是不开启的，如果你开启后想关闭那就必须在 使用 false 参数关闭
        // firebase.database.enableLogging(true, true);
        firebase.database.enableLogging(false);

        // console.log(firebase.database().ref('user').parent);
        // console.log(database);

        // addEvents.submit('fyj', ['fyj-nick', 'fyj-email', 'fyj-url', 'fyj-content']);

    }

    /**
     * Initialize view interface and other configuration.
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
     *
     * @return {object} A reference to the firebase app service
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
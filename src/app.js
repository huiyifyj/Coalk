import handleOption from './util/option';

import submit from './events/submit';

import {input, footer, comment, noComment} from './view/view';

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

        this.database = new database(this.option);

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

        /**
         * Listen Comments Num.
         */
        this.database.commentsNum();

    }

}

export default App;
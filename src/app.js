import handleOption from './util/option';

import {input, footer, comment, noComment} from './view/view';

import './scss/demo.scss';
import './scss/index.scss';

/**
 * @class
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

        this.init();

    }

    /**
     * Initialize view interface and other configuration.
     */
    init () {

        const ROOT_ELEMENT = this.option.container;

        const LANGUAGE = this.option.language;

        ROOT_ELEMENT.innerHTML += input;

        ROOT_ELEMENT.innerHTML += comment;

        ROOT_ELEMENT.innerHTML += noComment;

        ROOT_ELEMENT.innerHTML += footer;

    }

}

export default App;
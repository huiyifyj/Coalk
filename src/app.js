import handleOption from './util/option';

import time from './util/time';

import {input, footer, comment, noComment} from './view/view';


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
     * Init Function
     * 
     * @param
     * @returns
     */
    init () {

        const ROOT_ELEMENT = this.option.container;
        const LANGUAGE = this.option.language;

        ROOT_ELEMENT.innerHTML += input;

        ROOT_ELEMENT.innerHTML += comment;
        
        ROOT_ELEMENT.innerHTML += noComment;

        ROOT_ELEMENT.innerHTML += footer;

        console.log(input)

    }

}

export default App;
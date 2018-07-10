import time from './util/time';

import * as handleOption from './util/option';

class App {

    /**
     * Constructor Function
     *
     * @param {Object} option - See README
     * @constructor
     */
    constructor (option) {

        this.option = handleOption(option);

        const ROOT_ELEMENT = document.getElementById('fyj');

        ROOT_ELEMENT.innerHTML = `<h1>This is a h1 Tag.</h1>`;

        this.init();

    }

    /**
     * Init Function
     * 
     * @param
     * @returns
     */
    init () {

    }

}

export default App;
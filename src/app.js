import handleOption from './util/option';

import submit from './events/submit';

import input from './view/input.html';
import footer from './view/footer.html';
import noComment from './view/noComment.html';
import loading from './view/loading.html';
import Template from './view/template';

import Database from './firebase/database';

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
        this.ROOT_ELEMENT = this.option.container;

        this.init();

        this.database = new Database(this.option);
        this.template = new Template(this.option);

        /**
         * Initialize essential view interface and other configuration.
         */
        this.ROOT_ELEMENT.innerHTML = input + footer;

        this.COMMENT_MAIN = this.ROOT_ELEMENT.querySelector('#comments-main');

        this.controller();
        this.listener();

    }

    /**
     * Initialize comment app.
     */
    init () {

        /**
         * Note: `firebase` is global namespace.
         * Initialize firebase app by apiKey and databaseURL.
         * - See [firebase document](https://firebase.google.com/docs/web/setup).
         */
        firebase.initializeApp({
            apiKey: this.option.apiKey,
            authDomain: this.option.authDomain,
            databaseURL: this.option.databaseURL
        });

        /**
         * Login firebase authentication.
         */
        firebase.auth().signInWithEmailAndPassword("i@huiyifyj.cn", "commentjs");

        /**
         * Initialize essential view interface and other configuration.
         */
        this.ROOT_ELEMENT.innerHTML = input + footer;

    }

    controller () {

        /**
         *  Loading effect at the beginning.
         */
        this.COMMENT_MAIN.innerHTML = loading;

        /**
         * Get comments number and add 'noComment' when no comment.
         */
        this.database.commentsNum((snapshot) => {

            /**
             * @type {number} The current comments number.
             */
            let num = snapshot.numChildren();

            if (num) {

                this.ROOT_ELEMENT.querySelector('.comment-num').innerText = num;

                if (num <= this.option.row) {
                    document.getElementById('load-more').remove();
                }

            } else {
                this.ROOT_ELEMENT.querySelector('.comment-num').innerText = 'No';
                this.ROOT_ELEMENT.querySelector('.comments-main').innerHTML = noComment;
            }

        });

        let rmNum = 0;

        /**
         * Display and load comments by 'time' ASC from the beginning.
         */
        this.database.commentsByASC((snapshot) => {

            /**
             * @type {string} The DOMString of comments at the beginning.
             */
            const BEGIN_HTML = this.template.comment(snapshot.val());

            this.COMMENT_MAIN.insertAdjacentHTML('afterbegin', BEGIN_HTML);

            rmNum ++;

            if (rmNum > 7) {

                /**
                 * Remove loading effect after comments are completed.
                 */
                this.COMMENT_MAIN.querySelector('.fyj-loading').remove();

            }

        });

    }

    listener () {

        /**
         * Bind submit event to button that id is `submit-comment`.
         */
        this.ROOT_ELEMENT.querySelector('#submit-comment').addEventListener('click', () => {
            submit(this.database);
        });

        /**
         * Bind load other comment event to button that id is `load-more`.
         */
        if (this.ROOT_ELEMENT.querySelector('#load-more')) {

            /**
             * @type {boolean}
             */
            let numClick = false;

            this.ROOT_ELEMENT.querySelector('#load-more').addEventListener('click', () => {

                /**
                 * @type {string} The lastChild node 'id' property value. such as, 'comment-1'.
                 */
                let ELEMENT_ID = this.COMMENT_MAIN.lastChild.previousSibling.getAttribute('id');

                /**
                 * @type {number} The number that is removed the first 8 characters('comment-').
                 */
                let ID = ELEMENT_ID.substring(8);

                /**
                 * Fix the bug while clicking at first.
                 */
                (!numClick) ? numClick = true : ID --;

                this.database.loadComments(ID)
                    .then((snapshot) => {

                        /**
                         * @type {string} The DOMString of comments loading.
                         */
                        let LOAD_HTML = '';

                        snapshot.forEach((element) => {
                            LOAD_HTML = this.template.comment(element.val()) + LOAD_HTML;
                        });

                        this.COMMENT_MAIN.insertAdjacentHTML('beforeend', LOAD_HTML);

                    })
                    .catch((error) => {
                        throw error;
                    });

                if (ID < 10) {
                    document.getElementById('load-more').remove();
                }

            });

        }

    }

}

export default App;

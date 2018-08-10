import handleOption from './util/option';

import submit from './events/submit';

import input from './view/input.html';
import footer from './view/footer.html';
import noComment from './view/noComment.html';
import loading from './view/loading.html';
import Comment from './view/comment';

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

        this.initFirebase();

        this.database = new Database(this.option);
        this.commentTmp = new Comment(this.option);

        this.initView();

        this.COMMENT_MAIN = this.ROOT_ELEMENT.querySelector('#comments-main');

    }

    /**
     * Note: `firebase` is global namespace.
     * Initialize firebase app by apiKey and databaseURL.
     * - See [firebase document](https://firebase.google.com/docs/web/setup).
     */
    initFirebase () {

        firebase.initializeApp({
            apiKey: this.option.apiKey,
            databaseURL: this.option.databaseURL
        });

    }

    /**
     * Initialize essential view interface and other configuration.
     */
    initView () {

        this.ROOT_ELEMENT.innerHTML = loading + input + footer;

        this.controller();
        this.listener();

    }

    controller () {

        /**
         * Get comments number and add noComment.html when no comment.
         */
        this.database.commentsNum()
            .then((num) => {
                this.ROOT_ELEMENT.querySelector('.comment-num').innerText = (num) ? num : 'No';

                if (!num) {
                    document.getElementById('comments-main').innerHTML = noComment;
                } else if (num <= this.option.row) {
                    document.getElementById('load-more').remove();
                }
            })
            .catch((error) => {
                throw error;
            });

        /**
         * Display and load comments by 'time' ASC from the beginning.
         */
        this.database.commentsByASC((snapshot) => {

            const NODE_LI = document.createElement('div');

            NODE_LI.id = 'comment-' + snapshot.val().id;

            NODE_LI.innerHTML = this.commentTmp.template(snapshot.val());

            this.COMMENT_MAIN.insertBefore(NODE_LI, this.COMMENT_MAIN.firstChild);

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

            this.ROOT_ELEMENT.querySelector('#load-more').addEventListener('click', () => {

                /**
                 * @type {string} The lastChild node 'id' property value. such as, 'comment-1'.
                 */
                const ELEMENT_ID = this.COMMENT_MAIN.lastChild.previousSibling.getAttribute('id');

                /**
                 * @type {number} The number that is removed the first 8 characters.
                 */
                const ID = ELEMENT_ID.substring(8);

                this.database.loadComments(ID).then((snapshot) => {

                    /**
                     * @type {string} The DOMString of comments loading.
                     */
                    let LOAD_HTML = '';

                    snapshot.forEach((element) => {
                        LOAD_HTML = this.commentTmp.template(element.val()) + LOAD_HTML;
                    });

                    this.COMMENT_MAIN.insertAdjacentHTML('beforeend', LOAD_HTML);

                })

            })

        }

    }

}

export default App;

import handleOption from './util/option';

import submit from './events/submit';
import load from './events/load';

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
                document.querySelector('.comment-num').innerText = (num) ? num : 'No';

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
         * Display comments by 'time' ASC.
         */
        this.database.commentsByASC((snapshot) => {

            const NODE_LI = document.createElement('li')
            NODE_LI.innerHTML = this.commentTmp.template(snapshot.val());

            this.COMMENT_MAIN.insertBefore(NODE_LI, this.COMMENT_MAIN.firstChild);

        });

        setTimeout(() => {

            this.database.loadComments().then((s) => {

                // s.forEach((element) => {
                //     const a = this.commentTmp.template(element.val());
                //     console.log(a);
                // })

                const a = this.commentTmp.template(s.val());
                // console.log(a);
                console.log(s.val())
            })

        }, 3000);

    }

    listener () {

        /**
         * Attach submit event to button that id is `submit-comment`.
         */
        document.getElementById('submit-comment').addEventListener('click', () => {
            submit(this.database);
        });

        /**
         * Attach load other comment event to button that id is `load-more`.
         */
        (document.getElementById('load-more')) ?
            load(this.database) :
            null;

    }

}

export default App;

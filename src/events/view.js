import commentTmp from '../view/comment';

import noComment from '../view/noComment.html';

export default {

    displayCommentsNum: (snapshot) => {

        let ELEMENT = document.querySelector('.comment-num');

        if (snapshot.val()) {
            ELEMENT.innerText = snapshot.numChildren();
        }
        else {
            ELEMENT.innerText = 'No';

            document.getElementById('comments-main').innerHTML = noComment;
        }

    },

    displayCommentsView: (data) => {

        document.getElementById('comments-main').innerHTML += new commentTmp(data.val()).template();

    }

}
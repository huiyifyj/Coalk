import md5 from '../util/md5';

/**
 * @class Comment
 */
class Comment {

    constructor (commentData) {

        this.commentData = commentData;

    }

    template () {

        return `<div class="comments-wrap"><div class="comment-body"><img class="avatar-img" src="https://gravatar.loli.net/avatar/${md5(this.commentData.email)}"><div class="comment-box"><div class="username">
        <a href="${this.commentData.url}" target="_blank">
        ${this.commentData.name}</a></div><div class="comment-time">
                20 Seconds
        </div></div><div class="comment-content">${this.commentData.comment}</div></div></div>`;

    }

}

export default Comment;
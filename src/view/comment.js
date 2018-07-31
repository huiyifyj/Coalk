import md5 from '../util/md5';
import time from '../util/time';

/**
 * @class Comment
 */
class Comment {

    constructor (commentData) {

        this.commentData = commentData;

        this.intervalTime = time.intervalTime(this.commentData.time);
        this.formatData = time.formatData(new Date(this.commentData.time));

    }

    template () {

        return `<div class="comments-wrap"><div class="comment-body"><img class="avatar-img" src="https://gravatar.loli.net/avatar/${md5(this.commentData.email)}"><div class="comment-box"><div class="username">
        <a href="${this.commentData.url}" target="_blank">
        ${this.commentData.name}</a></div><div class="comment-time" title="${this.formatData}">${this.intervalTime}</div></div><div class="comment-content">${this.commentData.comment}</div></div></div>`;

    }

}

export default Comment;
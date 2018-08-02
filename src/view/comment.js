import md5 from '../util/md5';
import periodTime from '../util/time';

import language from '../i18n/lang';

/**
 * @class Comment
 */
class Comment {

    /**
     * @param {object} commentData The data object comment.
     * @param {object} option The app option setting.
     * @constructor
     */
    constructor (commentData, option) {

        this.commentData = commentData;
        this.cdn = option.cdn;

        this.Date = new Date(this.commentData.time);

        this.periodTime = periodTime(this.Date, language(option.language).time);
        // this.formatData = time.formatData(new Date(this.commentData.time));

    }

    /**
     * @return {string} The comment template string.
     */
    template () {

        return `<div class="comments-wrap"><div class="comment-body"><img class="avatar-img" src="${this.cdn + md5(this.commentData.email)}"><div class="comment-box"><div class="username">
        <a href="${this.commentData.url}" target="_blank">
        ${this.commentData.name}</a></div><div class="comment-time" title="${this.Date}">${this.periodTime}</div></div><div class="comment-content">${this.commentData.comment}</div></div></div>`;

    }

}

export default Comment;
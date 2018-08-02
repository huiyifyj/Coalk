import md5 from '../util/md5';
import periodTime from '../util/time';

import language from '../i18n/lang';

/**
 * @class Comment
 */
class Comment {

    /**
     * @param {object} commentData The data object comment.
     * @param {string} lang The language setting.
     * @constructor
     */
    constructor (commentData, lang) {

        this.commentData = commentData;

        this.Date = new Date(this.commentData.time);

        this.cdn = 'https://gravatar.loli.net/avatar/';

        this.periodTime = periodTime(this.Date, language(lang).time);
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
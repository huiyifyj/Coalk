import md5 from '../util/md5';
import periodTime from '../util/time';

import languageObj from '../i18n/lang';

/**
 * @class Comment
 */
class Comment {

    /**
     * @param {object} option The app option setting.
     * @constructor
     */
    constructor (option) {

        this.cdn = option.cdn;

        this.languageTime = languageObj(option.language).time;

    }

    /**
     * Create comment template.
     *
     * @param {object} commentData The data object comment.
     * @return {string} The comment template string.
     */
    template (commentData) {

        const date = new Date(commentData.time);

        return `<div class="comments-wrap" id="comment-${commentData.id}"><div class="comment-body"><img class="avatar-img" src="${this.cdn + md5(commentData.email)}"><div class="comment-box"><div class="username"><a href="${commentData.url}" target="_blank">${commentData.name}</a></div><div class="comment-time" title="${date}">${periodTime(date, this.languageTime)}</div></div><div class="comment-content">${commentData.comment}</div></div></div>`;

    }

}

export default Comment;

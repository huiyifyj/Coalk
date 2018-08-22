import md5 from '../util/md5';
import periodTime from '../util/time';

import languageObj from '../i18n/lang';

/**
 * @class Template
 */
class Template {

    /**
     * @param {object} option The app option setting.
     * @constructor
     */
    constructor (option) {

        this.cdn = option.cdn;

        this.language = languageObj(option.language);

        this.languageTime = languageObj(option.language).time;

    }

    input () {

        return `<div class="input-wrap"><input id="fyj-name" type="text" name="name" placeholder="${this.language.name}" class="nick input"><input id="fyj-email" type="email" name="email" placeholder="${this.language.email}" class="email input"><input id="fyj-url" type="url" name="url" placeholder="${this.language.url}" class="url input"><textarea id="fyj-comment" name="comment" placeholder="${this.language.placeholder}"></textarea><div class="edit"><button id="submit-comment">${this.language.submit}</button></div></div><div class="comment-info"><span class="comment-num">...</span> ${this.language.comments}<svg class="comment-svg" viewBox="0 0 512 512" width="16" height="16" aria-hidden="true"><path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"/></svg></div><div id="comments-main"></div>`;

    }

    /**
     * Create comment template.
     *
     * @param {object} commentData The data object comment.
     * @return {string} The comment template string.
     */
    comment (commentData) {

        const date = new Date(commentData.time);

        return `<div class="comments-wrap" id="comment-${commentData.id}"><div class="comment-body"><img class="avatar-img" src="${this.cdn + md5(commentData.email)}?s=80"><div class="comment-box"><div class="username"><a href="${commentData.url}" target="_blank">${commentData.name}</a></div><div class="comment-time" title="${date.toLocaleString()}">${periodTime(date, this.languageTime)}</div></div><div class="comment-content">${commentData.comment}</div></div></div>`;

    }

    reply (replyData) {

        const data = new Date(replyData.time);

    }

}

export default Template;

import md5 from './util/md5';

class avatar {

    /**
     * About Gravatar CDN
     * https://gravatar.loli.net/avatar/(MD5-value)
     * You also can use https://gravatar.cat.net/avatar/(MD5-value)
     * or use https://cdn.v2ex.com/gravatar/(MD5-value)
     * 
     * @param {string} cdn Gravatar CDN
     * @param {string} email User email
     * @constructor
     */
    constructor (cdn, email) {

        this.getAvatarUrl(cdn, email);

    }

    /**
     * Get your gravatar image url.
     *
     * @param {string} cdn Gravatar CDN
     * @param {string} email User email
     * @return {string} Gravatar image url.
     */
    getAvatarUrl (cdn, email) {

        /**
         * Use MD5 Module
         * More API to [JavaScript-MD5](https://github.com/blueimp/JavaScript-MD5#api)
         * 
         * @type {string}
         */
        let md5hash = md5(email);

        return cdn + md5hash;

    }

}

export default avatar;
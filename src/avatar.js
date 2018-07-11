import md5 from './util/md5';

class avatar {

    constructor (cdn, email) {

        /**
         * Gravatar CDN
         * https://gravatar.loli.net/avatar/~<MD5-value>
         * You also can use https://gravatar.cat.net/avatar/~<MD5-value>
         * or use https://cdn.v2ex.com/gravatar/~<MD5-value>
         */
        this.cdn = cdn;
        this.email = email;

        this.getAvatarUrl();
    }

    getAvatarUrl () {

        const cdn = 'https://gravatar.loli.net/avatar/';

        let email = 'jxfengyijie@gmail.com';

        /**
         * Use MD5 Module
         * More API to https://github.com/blueimp/JavaScript-MD5#api
         */
        let md5hash = md5(email);

        return cdn + md5hash;

        console.log(cdn + md5hash)
    }

}

export default avatar;
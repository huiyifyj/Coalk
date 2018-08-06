import md5 from '../util/md5';

/**
 * Accept Gravatar JSON data by XMLHttpRequest.
 * And verify its Authenticity.
 * Use [Official CDN](https://cn.gravatar.com/avatar/) provide JSON API.
 *
 * @param {object} data The JSON data object, including name, email property.
 * @return {Promise} Promise, .then() a boolean param.
 */
export default (data) => {

    const emailHash = md5(data.email);

    /**
     * @type {string} Official gravatar CDN link.
     */
    const CDN = 'https://en.gravatar.com/';

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', CDN + emailHash + '.json', true);

        xhr.onload = function () {
            if (this.status === 200) {
                resolve(verify(this.response, data, emailHash));
            } else {
                reject(new Error(this.statusText));
            }
        };

        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

    });

}

/**
 * Verify the data with gravatar JSON data.
 *
 * @param {object} response Get JSON object by XMLHttpRequest.
 * @param {object} data Data to be verified. Note: the data include name and emailHash two property.
 * @param {string} emailHash A string that is convert to a hash from email.
 * @return {boolean}
 */
const verify = (response, data, emailHash) => {

    const name = response.entry[0].displayName;
    const hash = response.entry[0].hash;

    return (name == data.name && hash == emailHash) ?
        true :
        false;

}

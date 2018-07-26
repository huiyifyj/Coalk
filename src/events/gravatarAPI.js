/**
 * Accept Gravatar JSON data by XMLHttpRequest.
 * And verify its Authenticity.
 *
 * @param {object} data The JSON data object, including name, emailhash property.
 * @return {Promise} Promise: resolve a boolean value.
 */
export default (data) => {

    const promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', data.emailHash, true);

        xhr.onload = function () {

            if (this.status === 200) {
                const boolean = verify(this.response, data);
                resolve(boolean);
            }
            else {
                reject(new Error(this.statusText));
            }

        };

        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.send();

    });

    return promise;

}

/**
 * Verify the data with gravatar JSON data.
 *
 * @param {object} response Get JSON object by XMLHttpRequest.
 * @param {object} data Data to be verified. Note: the data include name and emailHash two property.
 * @return {boolean}
 */
const verify = (response, data) => {

    const name = response.entry[0].displayName;
    const emailHash = response.entry[0].hash;

    if (name == data.name && emailHash == data.emailHash) {
        return true;
    }
    else {
        return false;
    }

}
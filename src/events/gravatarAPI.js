/**
 * Accept Gravatar JSON data by XMLHttpRequest.
 *
 * @param {string} url The JSON data url.
 * @return {Promise} Promise.
 */
export default (url) => {

    const promise = new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);

        xhr.onload = function () {

            if (this.status === 200) {
                resolve(this.response);
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
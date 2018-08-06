/**
 * See [MDZ doc](https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage) to learn about `localStorage`.
 */
const storage = window.localStorage;

export default {

    /**
     * Store data into localStorage.
     *
     * @param {string} key The key of data that will be stored.
     * @param {object} data The data object.
     */
    set: (key, data) => {
        storage.setItem(key, JSON.stringify(data));
    },

    /**
     * Get data from localStorage.
     *
     * @param {string} key The key of data stored.
     * @return A JSON object that is converted from string.
     */
    get: (key) => {

        const getString = storage.getItem(key);

        return JSON.parse(getString);

    },

    /**
     * Remove data stored by key.
     *
     * @param {string} key The key of data stored.
     */
    remove: (key) => {
        storage.removeItem(key);
    }

}

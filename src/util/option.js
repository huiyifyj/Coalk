/**
 * Handle your input option.
 * - More to see [README](https://github.com/huiyifyj/comment.js/blob/master/README.md)
 *
 * @param {option} option Your custom option for initializating app.
 * @returns {option} Option that be handled
 */
const handle = (option) => {

    /**
     * Default Option
     */
    const DEFAULT_OPTION = {

        /**
         * The HTMLDivElement to accommodate Comment System.
         * @type {[HTMLDivElement]}
         */
        container: document.getElementById('fyj'),

        /**
         * - Language setting for i18n.
         * - Default value is your local language according to you browser.
         * @type {string}
         */
        language: (navigator.language || navigator.browserLanguage).toLowerCase(),

        /**
         * The index of comments database
         * @type {string}
         */
        path: window.location.pathname,

        /**
         * Firebase app initializating configuration
         * @type {string}
         */
        apiKey: '',

        /**
         * Firebase database initializating configuration
         * @type {string}
         */
        databaseURL: '',

        /**
         * - Your website domain, such as: `blog.huiyifyj.cn`
         * - The String don't include 'http(s)://' ...
         * @type {string}
         */
        domain: option.domain || window.location.hostname

    };

    /**
     * Assign default values to option.
     */
    for (const KEY in DEFAULT_OPTION) {
        if (DEFAULT_OPTION.hasOwnProperty(KEY) && !option.hasOwnProperty(KEY)) {
            option[KEY] = DEFAULT_OPTION[KEY];
        }
    }

    /**
     * Judge whether character `databaseURL` is null or doesn't exist.
     * @throws {error}
     */
    if (!option.databaseURL) {
        throw `\nPlease input databaseURL and non-null.`;
    }

    /**
     * Judge whether character `apiKey` is null or doesn't exist.
     * @throws {error}
     */
    if (!option.apiKey) {
        throw `\nPlease input apiKey and non-null.`;
    }

    return option;

}

export default handle;
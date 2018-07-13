/**
 * Handle your input option.
 * - More to see [README](https://github.com/huiyifyj/comment.js/blob/master/README.md)
 *
 * @param {option} option Your custom option for initializating app.
 * @returns {option} Option that be handled
 * @type {Function}
 */
const handle = (option) => {

    /**
     * Default Option
     */
    const DEFAULT_OPTION = {

        /**
         * @type {[HTMLDivElement]}
         */
        container: option.element || document.getElementById('fyj'),

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
     * 如果为空，赋默认值给选项
     */
    for (const KEY in DEFAULT_OPTION) {
        if (DEFAULT_OPTION.hasOwnProperty(KEY) && !option.hasOwnProperty(KEY)) {
            option[KEY] = DEFAULT_OPTION[KEY];
        }
    }

    // databaseURL 为 '' 时
    if (!option.databaseURL) {
        throw `Please input databaseURL, otherwise can't init yout app for you.`;
    }

    // apiKey 为 '' 时
    /**
     * @throws
     */
    if (!option.apiKey) {
        throw `Please input apiKey, otherwise can't init yout app for you.`;
    }

    return option;

}

export default handle;
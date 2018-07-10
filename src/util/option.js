/**
 * This your option when you init this app
 * 
 * @returns {option} - option that be handled
 */
export default (option) => {

    /**
     * Default Option
     */
    const DEFAULT_OPTION = {

        // html id element
        container: option.el || document.getElementById('fyj'),
        // container: option.element || document.getElementById('fyj'),

        // Default language for i18n
        language: (navigator.language || navigator.browserLanguage).toLowerCase(),
        // The index of comments database
        path: window.location.pathname,

        // Firebase Initialize Config
        databaseURL: '',
        apiKey: '',

        /**
         * Your website domain, such as: blog.huiyifyj.cn
         * The String don't include 'http(s)://' ...
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
    if (!databaseURL) {
        throw `Please input databaseURL, otherwise can't init yout app for you.`;
    }

    // apiKey 为 '' 时
    if (!apiKey) {
        throw `Please input apiKey, otherwise can't init yout app for you.`;
    }

    return option;

}
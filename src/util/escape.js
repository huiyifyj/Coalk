/**
 * Escape and unescape string.
 *
 * @param {string} input
 * @return {string} The string that is escaped and handled.
 */
const escape = (input) => {

    /**
     * A RegExp contain `/`.
     * @type {RegExp}
     */
    const RegString = /[/]/g;

    return (RegString.test(input)) ?
        input.replace(RegString, '&') :
        input;

}

export default escape;
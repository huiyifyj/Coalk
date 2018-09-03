/**
 * Escape path string.
 *
 * @param {string} input
 * @return {string} The string that is escaped and handled.
 */
const escape = (input) => {

    /**
     * @type {RegExp} A RegExp contain `/`.
     */
    const RegString = /[/]/g;

    return (RegString.test(input)) ?
        input.replace(RegString, '&') :
        input;

}

export default escape;

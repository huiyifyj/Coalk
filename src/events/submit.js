import verify from './verify';

/**
 * Bind submit comment data event to button that id is `submit-comment`.
 *
 * @param {object} database The database that is handled from app.js file.
 */
export default (database) => {

    /**
     * @type {string[]} All id property input tag.
     */
    const inputIds = ['fyj-name', 'fyj-email', 'fyj-url', 'fyj-comment'];

    /**
     * @type {object} A object container all input data.
     */
    let inputObj = {};

    for (let i = 0; i < inputIds.length; i++) {
        let inputId = inputIds[i];
        let inputName = document.getElementById(inputId).name;
        let inputValue = document.getElementById(inputId).value;

        inputObj[inputName] = inputValue;
    }

    if (checkInput(inputObj)) {

        // Verify account by gravatar JSON.
        verify(inputObj).then((bool) => {
            if (bool){
                database.submitComment(inputObj);
            } else {
                throw 'Wrong name and e-mail';
            }
        });
    } else {
        throw 'Enter Text Format error.';
    }

}

/**
 * Check the format of the email and url.
 *
 * @param {object} data
 * @return {boolean}
 */
const checkInput = (data) => {

    /**
     * @type {RegExp} url RegExp.
     */
    const urlReg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;

    /**
     * @type {RegExp} email RegExp.
     */
    const emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    return (data.name && data.comment && urlReg.test(data.url) && emailReg.test(data.email)) ?
        true :
        false;
}

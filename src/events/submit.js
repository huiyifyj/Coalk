import verify from './verify';

/**
 * Bind submit comment data event to button that id is `submit-comment`.
 *
 * @param {object} database The database that is handled from app.js file.
 */
export default (database) => {

    /**
     * @type {Array} All id property input tag.
     */
    const inputIds = ['fyj-name', 'fyj-email', 'fyj-url', 'fyj-content'];

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

        verify(inputObj).then((bool) => {
            if (bool){
                inputObj['time'] = new Date().getTime();

                database.submit(inputObj);
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

    const urlReg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;

    return (data.name && data.email && data.comment && urlReg.test(data.url)) ?
        true :
        false;

}
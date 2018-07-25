/**
 * Attach submit comment data to button that id is `submit-comment`.
 */
export default () => {

    // All id property input tag.
    const inputIds = ['fyj-name', 'fyj-email', 'fyj-url', 'fyj-content'];

    // A object container all input data.
    let inputObj = {};

    for (let i = 0; i < inputIds.length; i++) {

        let inputId = inputIds[i];

        let inputName = document.getElementById(inputId).name;

        /**
         * @type {string}
         */
        let inputValue = document.getElementById(inputId).value;

        inputObj[inputName] = inputValue;

    }

    // firebase.database().ref(inputObj.name).set(inputObj, function (error) {
    //     if (error) {console,log('error')}
    //     else {console.log('Comment successful')}
    // })

    console.log(inputObj);
    console.log(checkInput(inputObj))

}

/**
 * Check the format of the email and url.
 *
 * @param {object} data
 * @return {boolean}
 */
const checkInput = (data) => {

    const urlReg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;

    if(!data.name || !data.email || !data.comment) {
        return false;
    }
    else if (!urlReg.test(data.url)) {
        // ...
    }

}
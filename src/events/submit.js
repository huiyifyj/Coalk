import verify from './gravatarAPI';

/**
 * Bind submit comment data event to button that id is `submit-comment`.
 *
 * @param {string} cdn The gravatar cdn url.
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

    if (checkInput(inputObj)) {

        verify(inputObj).then((bool) => {
            if (bool){
                console.log('Input Legal');
            }
            else {
                throw 'Correct Name and E-mail.';
            }
        }, (error) => {
            throw error;
        });

    }
    else {
        throw 'Please Enter the Correct Text Format.';
    }

    // firebase.database().ref(inputObj.name).set(inputObj, function (error) {
    //     if (error) {console,log('error')}
    //     else {console.log('Comment successful')}
    // })

    console.log(inputObj);

}

/**
 * Check the format of the email and url.
 *
 * @param {object} data
 * @return {boolean}
 */
const checkInput = (data) => {

    const urlReg = /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;

    if (data.name && data.email && data.comment && urlReg.test(data.url)) {
        return true;
    } else {
        return false;
    }

}
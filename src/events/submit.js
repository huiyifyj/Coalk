/**
 * Attach submit comment data to button that id is `submit-comment`.
 */ 
export default () => {

    // All id property input tag.
    const inputIds = ['fyj-nick', 'fyj-email', 'fyj-url', 'fyj-content'];

    // A object container all input data
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

    }
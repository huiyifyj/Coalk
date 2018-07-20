/**
 * Attach event that be used many times to someone element
 *
 * @class Events
 */
class Events {

    /**
     * Attach submit comment data to button that id is `submit-comment`.
     *
     * @param {string} buttonId The button id that you want to opreate.
     * @param {Array} inputIds Array of ids of input tag.
     * @return
     */
    submit () {

        document.getElementById('submit-comment').addEventListener('click', () => {

            // All id property tag input
            const inputIds = ['fyj-nick', 'fyj-email', 'fyj-url', 'fyj-content'];

            // A object container all input data
            const inputObj = {};

            for (let i = 0; i < inputIds.length; i++) {

                let inputId = inputIds[i];

                let inputName = document.getElementById(inputId).name;

                /**
                 * @type {string}
                 */
                let inputValue = document.getElementById(inputId).value;

                inputObj[inputName] = inputValue;

            }

            console.log(inputObj);

        });

    }

}

export default Events;
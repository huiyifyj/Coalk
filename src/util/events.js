/**
 * Attach event that be used many times to someone element
 *
 * @class Events
 */
class Events {

    constructor () {

        this.submit(buttonId, inputIds);

    }

    /**
     *
     * @param {string} buttonId The button id that you want to opreate.
     * @param {Array} inputIds Array of ids of input tag.
     * @return
     */
    submit (buttonId, inputIds) {

        const inputObj = {};

        for (let index = 0; index < inputIds.length; index++) {

            let inputId = inputIds[index];

            let inputName = document.getElementById(inputId).name;
            let inputValue = document.getElementById(inputId).value;

            inputObj[inputName] = inputValue;

        }

        document.getElementById(buttonId).addEventListener('click', function () {
            // let
        })

    }

}

export default Events;
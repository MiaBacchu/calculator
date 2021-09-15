const buttons = document.getElementsByClassName('button');
const display = document.getElementById('display');

for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const clickedButtonValue = event.target.value;

        if (clickedButtonValue == '=') {
            display.value = eval(display.value)
        }
        else if (clickedButtonValue === "c") {
            display.value = '';
        }
        else {
            const currentValue = display.value;
            const newValue = currentValue + clickedButtonValue
            display.value = newValue;

        }


    })
}
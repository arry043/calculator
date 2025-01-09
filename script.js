const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1); // Last character remove karta hai
}

function calculate() {

    try {
        if (display.value === '') {
            return;
        }

        if (display.value.includes('÷')) {
            display.value = display.value.replace('÷', '/');
        }

        if (display.value.includes('×')) {
            display.value = display.value.replace('×', '*');
        }

        if (display.value.includes('%')) {
            display.value = display.value.replace('%', '/100*');
        }

        if (display.value.includes('^')) {
            display.value = display.value.replace('^', '**');
        }

        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }

}

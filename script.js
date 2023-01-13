let display = document.querySelector('.inputs');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        if (display.value === "Error") {
            display.value = ""
        }
        switch (e.target.innerText) {
            case "C":
                display.value = ""
                break;

            case "←":
                display.value = display.value.slice(0, -1)
                break;

            case "=":
                try {
                    display.value = eval(display.value)
                } catch {
                    display.value = "Error"
                }
                break;

            default:
                display.value += e.target.innerText;
        }
    })
})
const wrongChoice = "resources/images/Duck.png";
const rightChoice = "resources/images/hamburger.png";
const unselected = "resources/images/paper\ bag.png";
const selected = "resources/images/Paper\ bag\ selected.png";
const unselectedOpacity = 0.9;
let current;//keeps track of currently selected option

const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const resetButton = document.getElementById('reset');
const submitButton = document.getElementById('submit');




//adding hover/click effects for all options
document.querySelectorAll(".option").forEach(element => {
    element.addEventListener('mouseenter', e => {
        element.style.opacity = 1;
    });
    element.addEventListener('mouseleave', e => {
        element.style.opacity = unselectedOpacity;
    });
    element.addEventListener('click', () => {
        select(element);
    });
});


//adding hover/click effects for buttons
document.querySelectorAll(".button").forEach(element => {
    element.addEventListener('mouseenter', e => {
        element.style.backgroundColor = "#ecec00";
    });
    element.addEventListener('mouseleave', e => {
        element.style.backgroundColor = "yellow";
    });
    element.addEventListener('mousedown', () => {
        element.style.backgroundColor = "#d8d802";
    });
    element.addEventListener('mouseup', () => {
        element.style.backgroundColor = "#ecec00";
    });
});


//adding listeners to buttons
resetButton.addEventListener('click', () => reset());
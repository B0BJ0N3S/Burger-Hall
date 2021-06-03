const wrongChoiceImage = "resources/images/Duck.png";
const rightChoiceImage = "resources/images/burger.png";
const unselectedImage = "resources/images/paper\ bag.png";
const selectedImage = "resources/images/Paper\ bag\ selected.png";
const unselectedOpacity = 0.9;

const option0 = document.getElementById('option0');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const feedback = document.getElementById('feedback');
const resetButton = document.getElementById('reset');
const submitButton = document.getElementById('submit');




//adding hover/click effects for all options
function OptionMouseEnter(element) {
    element.style.opacity = 1;
}
function OptionMouseLeave(element) {
    element.style.opacity = unselectedOpacity;
}
function OptionMouseClick(element) {
    select(element);
}

function initializeOptionListeners() {
    document.querySelectorAll(".option").forEach(element => {
        element.addEventListener('mouseenter', e => OptionMouseEnter(element));
        element.addEventListener('mouseleave', e => OptionMouseLeave(element));
        element.addEventListener('click', () => OptionMouseClick(element));
    });
}
initializeOptionListeners();


//adding hover/click effects for buttons
document.querySelectorAll(".button").forEach(element => {
    element.addEventListener('mouseenter', e => function ButtonMouseEnter(){
        element.style.backgroundColor = "#ecec00";
    });
    element.addEventListener('mouseleave', e => function ButtonMouseLeave(){
        element.style.backgroundColor = "yellow";
    });
    element.addEventListener('mousedown', () => function ButtonMouseDown(){
        element.style.backgroundColor = "#d8d802";
    });
    element.addEventListener('mouseup', () => function ButtonMouseUp(){
        element.style.backgroundColor = "#ecec00";
    });
});


//adding listeners to buttons
resetButton.addEventListener('click', () => reset());
submitButton.addEventListener('click', () => submit());
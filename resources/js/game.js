const wrongChoiceImage = "resources/images/Duck.png";
const rightChoiceImage = "resources/images/burger.png";
const unselectedImage = "resources/images/paper\ bag.png";
const selectedImage = "resources/images/Paper\ bag\ selected.png";
const unselectedOpacity = 0.9;


const optionFactory = (element, number) => {
    return {
        element,
        number,
        active: true,
        mouseEnter() {
            if (this.active) {
                this.element.style.opacity = 1;
            }
        },
        mouseLeave() {
            if (this.active) {
                this.element.style.opacity = unselectedOpacity;
            }
        },
        mouseClick() {
            if (this.active) {
                select(this);
            }
        },

        select() {
            this.element.src = selectedImage;
        },
        deselect() {
            this.element.src = unselectedImage;
        },
        reveal() {
            if (this.number == correctChoice) {
                this.element.src = rightChoiceImage;
            } else {
                this.element.src = wrongChoiceImage;
            }
            this.element.style.opacity = 1;
            this.active = false;
        },
        reset() {
            this.deselect();
            this.active = true;
        }
    }
}

const option0 = optionFactory(document.getElementById('option0'), 0);
const option1 = optionFactory(document.getElementById('option1'), 1);
const option2 = optionFactory(document.getElementById('option2'), 2);
const option3 = optionFactory(document.getElementById('option3'), 3);
const option4 = optionFactory(document.getElementById('option4'), 4);
const options = [option0, option1, option2, option3, option4];
const feedback = document.getElementById('feedback');
const resetButton = document.getElementById('reset');
const revealButton = document.getElementById('reveal');
const submitButton = document.getElementById('submit');



function initializeOptionListeners() {
    options.forEach(option => {
        option.element.addEventListener('mouseenter', e => option.mouseEnter());
        option.element.addEventListener('mouseleave', e => option.mouseLeave());
        option.element.addEventListener('click', () => option.mouseClick());
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
revealButton.addEventListener('click', () => revealAll());
submitButton.addEventListener('click', () => submit());
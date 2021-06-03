let firstReveal = false;
const options = [option0, option1, option2];
let selection;
let correctChoice;

//unselecting this option
function deselect(option) {
    option.src = unselectedImage;
}

//When player clicks on option
function select(option) {
    //unselecting previous choice
    if (selection >= 0) {
        deselect(options[selection]);
    }
    //updating selection value
    for (let i in options) {
        if (option == options[i]) {
            selection = i;
            break;
        }
    }
    //highlighting new choice
    options[selection].src = selectedImage;
}

//resets game
function reset() {
    document.querySelectorAll(".option").forEach(element => {
        deselect(element);
    });
    initializeOptionListeners();
    firstReveal = false;
    selection = undefined;
    correctChoice = Math.floor(Math.random() * options.length);
    feedback.innerText = ' ';
}

//Actions to perform when submitting
function submit() {
    if (selection == undefined) {
        feedback.innerText = 'Please select one of the bags!';
        return;
    }
    if (!firstReveal) {
        revealBadChoice();
    } else {
        checkAnswer();
    }
}

//removes all listeners from option
function removeListeners(option) {
    option.removeEventListener('mouseenter', OptionMouseEnter);
    option.removeEventListener('mouseleave', OptionMouseLeave);
    option.removeEventListener('click', OptionMouseClick);
}

//Reveals an option and removes all listeners
function reveal(option) {
    for (let i in options) {
        if (options[i] == option) {
            i == correctChoice? option.src = rightChoiceImage : option.src = wrongChoiceImage;
            option.style.opacity = 1;
            //Removing listeners
            removeListeners(option);
        }
    }
}

//Reveals the wrong option that player did not select
function revealBadChoice() {
    //revealing bad choice
    for (let i in options) {
        if (i != correctChoice && options[i] != options[selection]) {
            reveal(options[i]);
            //setting feedback message
            feedback.innerText = `Lord Ducky has revealed that option #${parseInt(i) + 1} is a duck. You may switch your choice if you like.`
            break;
        }
    }
    firstReveal = true;
}

//Reveals all options
function checkAnswer() {
    reveal(options[selection]);
    //options.forEach(option => removeListeners(option));
    if (selection == correctChoice) {
        feedback.innerText = 'Congratulations! You found the burger!';
    } else {
        feedback.innerText = 'Oh no! You only found ducks!';
    }
}



reset();
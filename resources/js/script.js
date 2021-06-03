let firstReveal = false;
let correctChoice;

//When player clicks on option
function select(option) {
    if (currentChoice) {
        currentChoice.deselect();
    }
    currentChoice = option;
    currentChoice.select();
}

//resets game
function reset() {
    options.forEach(option => option.reset());
    firstReveal = false;
    currentChoice = undefined;
    correctChoice = Math.floor(Math.random() * options.length);
    feedback.innerText = '';
}

//Actions to perform when submitting
function submit() {
    if (currentChoice == undefined) {
        feedback.innerText = 'Please select one of the bags!';
        return;
    }
    if (!firstReveal) {
        revealBadChoice();
    } else {
        checkAnswer();
    }
}

/*
//removes all listeners from option
function removeListeners(option) {
    option.removeEventListener('mouseenter', OptionMouseEnter);
    option.removeEventListener('mouseleave', OptionMouseLeave);
    option.removeEventListener('click', OptionMouseClick);
}
*/

//Reveals an option
function reveal(option) {
    option.reveal();
}

//Reveals the wrong option that player did not select
function revealBadChoice() {
    while(!firstReveal) {
        let option = options[Math.floor(Math.random() * options.length)];
        if (option.number != currentChoice.number && option.number != correctChoice) {
            option.reveal();
            firstReveal = true;
            //setting feedback message
            feedback.innerText = `Lord Ducky has revealed that option #${option.number + 1} is a duck. You may switch your choice if you like.`;
        }
    }
}

//Reveals all options
function checkAnswer() {
    currentChoice.reveal();
    //options.forEach(option => removeListeners(option));
    if (currentChoice.number == correctChoice) {
        feedback.innerText = 'Congratulations! You found the burger!';
    } else {
        feedback.innerText = 'Oh no! You only found ducks!';
    }
    options.forEach(option => {
        option.active = false;
    });
}



reset();
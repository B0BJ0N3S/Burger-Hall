let nReveals = 0;
const maxReveals = 2;
let correctChoice;

//When player clicks on option
function select(option) {
    if (currentChoice) {
        currentChoice.deselect();
    }
    currentChoice = option;
    currentChoice.select();
}

//reveals all options
function revealAll() {
    options.forEach(option => option.reveal());
}

//resets game
function reset() {
    options.forEach(option => option.reset());
    nReveals = 0;
    currentChoice = undefined;
    correctChoice = Math.floor(Math.random() * options.length);
    feedback.innerText = '';
    revealButton.style.visibility = 'hidden';
}

//Actions to perform when submitting
function submit() {
    if (currentChoice == undefined) {
        feedback.innerText = 'Please select one of the bags!';
        return;
    }
    if (nReveals < maxReveals) {
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
    let revealed = false;
    while(nReveals <= maxReveals && !revealed) {
        let option = options[Math.floor(Math.random() * options.length)];
        if (option.number != currentChoice.number && option.number != correctChoice && option.active) {
            option.reveal();
            nReveals++;
            revealed = true;
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
    revealButton.style.visibility = 'visible';
    options.forEach(option => {
        option.active = false;
    });
}



reset();
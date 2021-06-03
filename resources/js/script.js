//unselecting this option
function deselect(option) {
    option.src = unselected;
}

//When player clicks on option
function select(option) {
    //unselecting previous choice
    if (current) {
        deselect(current);
    }
    //highlighting new choice
    current = option;
    current.src = selected;
}

//resets game
function reset() {
    document.querySelectorAll(".option").forEach(element => {
        deselect(element);
    });
}
// JS Document

// Step 1 - Variables
let buttons; // how can i grab all the buttons for show/hiding content in my HTML?

// Step 2 - Methods
function toggleQuestion(e) {
    const questionEl = e.currentTarget.parentElement.parentElement;
    console.log(questionEl);

    // How do i TOGGLE a class name on my questionEl element? in order to turn on/off the class "active"?
    // this should be ONE LINE of code
    // reference the classList property
}

// Step 3 - Event Listeners
// How do i attach an event listener to all of my buttons, to trigger my toggleQuestion() method?
// Log to the console?
let log = false;
// X starts at 0
let x = 0;
// Correct end value
let goal = 42;
// Output Element
let eOutput = document.querySelector("#output");
// On button click, begin the function chain
document.addEventListener("DOMContentLoaded", function(e) {
    let sButton = ".btn";
    let eButton = document.querySelector(sButton);
    eButton.addEventListener("click", function(e) {
        e.preventDefault();
        eOutput.innerHTML = "";
        eOutput.className = "";
        if (log) console.log(`Button clicked.. running functions... X is: ${x}, GOAL is: ${goal}`);
        first();
    });
});
// Adds 1
function first() {
    x += 1;
    if (log) console.log(`I'm first! I add 1 to X. X is: ${x}`);
    second();
}
// Adds 2
function second() {
    x += 2;
    if (log) console.log(`I'm second! I add 2 to X. X is ${x}`);
    third();
}
// Queues delayed function
function third() {
    setTimeout(delayedThird, 1000);
    if (log) console.log(`I'm third! I queued up a delayed function. X is ${x}`);
    fourth();
}
// Multiplies by 2
function delayedThird(x) {
    x *= 2;
    if (log) console.log(`I'm the delayed third! I multiply X by 2. X is ${x}`);
    fifth();
}
// Subtracts 1
function fourth() {
    x -= 1;
    if (log) console.log(`I'm fourth! I subtract 1 from X. X is ${x}`);
}
// Adds 38
function fifth() {
    x += 38;
    if (log) console.log(`I'm fifth, the last function call! I added 38 to X. X is ${x}`);
    reset();
}
// Resets variable
function reset() {
    let message = "";
    if (x === goal) {
        message = `All done! X is: ${x} which MATCHES the goal of ${goal}!`;
        if (log) console.info(message);
        eOutput.className = "success";
        eOutput.innerHTML = message;
    } else {
        message = `All done! X is: ${x} which DOES NOT match the goal of ${goal}`;
        console.error(message);
        eOutput.className = "error";
        eOutput.innerHTML = message;
    }
    x = 0;
}
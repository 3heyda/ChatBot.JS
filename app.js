// Question-and-answer-Start
let userInput = document.querySelector("#userQuestionInput");

userInput.addEventListener("change", function () {
    bot(userInput.value)
});

const userAnswer = document.querySelector("#userOutputAnswer");


// Start-Function-Bot

function bot(question) {

    // ========================================================
    let salam = ["سلام", "السلام و علیکم", "درود", "salam", "Salam", "Hello!", "Hi"];
    if (salam.includes(question, 1)) {
        userAnswer.innerHTML = "سلام و درود بر تو";
        // ========================================================
    }

    let ahvalPorsi = ["احوالت چطوره؟", "خوبی؟ سلامتی؟", "چه خبرا؟"];
    if (ahvalPorsi.includes(question)) {
        userAnswer.innerHTML = "سلامتی";
    }

    let information_p = ["اسمت چیه", "اسمت چیه؟", "What is your name", "What is your name?", "what's your name?"];
    if (information_p.includes(question)) {
        userAnswer.innerHTML = "My name is Sheyda.", "اسم من شیداست";
    }
    // else {
    //     userAnswer.innerHTML = ("سخن خوبیه ولی براش جوابی نیدارم. ولوم کن بزار بخوابم");
    // }

}



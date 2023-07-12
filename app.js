// Question-and-answer-Start
let userInput = document.querySelector("#userQuestionInput");

userInput.addEventListener("change", function () {
    bot(userInput.value)
});

const userAnswer = document.querySelector("#userOutputAnswer");


// Start-Function-Bot

function bot(question) {

    let salam = ["سلام", "السلام و علیکم", "درود", "salam", "Salam", "Hello!", "Hi"];
    if (salam.includes(question, 1)) {
        userAnswer.innerHTML = "سلام و درود بر تو";

    } else if (resPonse.includes("خوبی؟")) {
        userAnswer.innerHTML = "عشقومی ککا حال خوت چطورن؟";

    } else if (question == "چه خبر؟") {
        userAnswer.innerHTML = "سلامتی جون دل";

    } else if (question == "اسمت چیه؟") {
        userAnswer.innerHTML = "شیمو";

    } else if (question == "خونت کجاس؟") {
        userAnswer.innerHTML = "باغ زهرا خیابون آزادگان";

    } else if (question == "چی میخوری؟") {
        userAnswer.innerHTML = "هزار بار گفتم بازم میگم، هرچی تو بخوری:)";

    } else if (question == "کلاس چندمی؟") {
        userAnswer.innerHTML = "همسن پدرتم با اجازت";

    } else if (question == "هوا چطوره؟") {
        userAnswer.innerHTML = "شیدا خواهر خدا زیادت کنه اینا چه سوالایی از من میپرسی";

    } else {
        userAnswer.innerHTML = "یکی بود یکی نبود در روزگار امروزی پادشاه وب جاوااسکریپت خود را کتک میزد و از رابی میترسید روزی پادشاه پایتون اعلام جنگ نمود و گفت بابا ولم کن";
    }

    let ahvalPorsi = ["احوالت چطوره؟", "خوبی؟ سلامتی؟", "چه خبرا؟"];
    if (ahvalPorsi.includes(question)) {
        userAnswer.innerHTML = "سلامتی";
    }

    let information_p = ["اسمت چیه", "اسمت چیه؟", "What is your name", "What is your name?", "what's your name?"];
    if (information_p.includes(question)) {
        userAnswer.innerHTML = "My name is Sheyda.", "اسم من شیداست";
    }
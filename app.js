// Level 1 Robot


//in the name of GOD
//group name: Data Processors
//members: (Sheyda , Marjan , Mohadese)

// console.log("------------------روش 2-----------------");
// function robat(action) {
//     if (action === 'سلام') {
//         console.log('سلام به روی ماهت');
//     }
//     else if (action === 'Hello') {
//         console.log('Hi');
//     }
//     else if (action === 'Salam') {
//         console.log('Aleykome salam');
//     }
//     else if (action === 'اسمت چیه؟') {
//         console.log('اسمم کوینه');
//     }
//     else if (action === 'What is your Name?') {
//         console.log('My name is Kewin');
//     }
//     else if (action === 'esmet chiye?') {
//         console.log('esmam kewine');
//     }
//     else if (action === 'چی میخوری؟') {
//         console.log('هر چی تو بگی:)');
//     }
//     else {
//         console.log('!!عزیزم دقت کن و مجدد سوالت رو بپرس')
//     }
// }

// // //Outputs
// robat('سلام');
// robat('Hello');
// robat('Salam');
// robat('اسمت چیه؟')
// robat('What is your Name?');
// robat('esmet chiye?');
// robat('چی میخوری؟');

// console.log("------------------روش 2-----------------");
// function resPonse(question) {
//     if (question = "سلام") {
//         console.log(" عزیزم");
//     } else if (question = "چطوری؟") {
//         console.log("مگه دکتری؟");
//     } else if (question == "چه خبر؟") {
//         console.log("سلامتی");
//     } else if (question == "اسمت چیه؟") {
//         console.log("تربچه");
//     } else if (question == "خونت کجاس؟") {
//         console.log("تو باغچه");
//     } else if (question == "چی میخوری؟") {
//         console.log("آلوچه");
//     } else if (question == "کلاس چندمی؟") {
//         console.log("دانشگاه میرم");
//     } else if (question == "هوا چطوره؟") {
//         console.log("نمی دونم");
//     } else {
//         console.log("یکی بود یکی نبود در روزگار امروزی پادشاه وب جاوااسکریپت خود را کتک میزد و از رابی میترسید روزی پادشاه پایتون اعلام جنگ نمود و گفت بابا ولم کن");
//     }
// }

// resPonse("q9")


// Level 2
// Shimobot



let userInput = document.querySelector("#chatbotUserInput");

userInput.addEventListener("change", function(){ 
    bot(userInput.value)
});

function bot(resPonse) {

    if (resPonse.includes("سلام", "سلام چطوری؟", "Chetori", "salam", "Salam", "Hello!", "Hi")) {
        console.log("سلام و درود بر تو");
    } else if (resPonse.includes("خوبی؟","","how are you")) {
        console.log("مگه دکتری؟");
    } else if (question == "چه خبر؟") {
        console.log("سلامتی");
    } else if (question == "اسمت چیه؟") {
        console.log("تربچه");
    } else if (question == "خونت کجاس؟") {
        console.log("تو باغچه");
    } else if (question == "چی میخوری؟") {
        console.log("آلوچه");
    } else if (question == "کلاس چندمی؟") {
        console.log("دانشگاه میرم");
    } else if (question == "هوا چطوره؟") {
        console.log("نمی دونم");
    } else {
        console.log("یکی بود یکی نبود در روزگار امروزی پادشاه وب جاوااسکریپت خود را کتک میزد و از رابی میترسید روزی پادشاه پایتون اعلام جنگ نمود و گفت بابا ولم کن");
    }

}

// bot("سلام")

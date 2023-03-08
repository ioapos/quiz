let questions = [
  {
    id: 1,
    question: "Κατά γενική ομολογία θεωρείστε",
    url: "https://i.pinimg.com/originals/f2/a6/0e/f2a60e2cf3686043baf3b2c663a52ebc.jpg",
    options: [
      "1  Mοιραία",
      "2  Χαριτωμένη",
      "3  Κυριλάτη",
      "4  Μυστήρια",
      "5  Σέξυ",
    ],
  },
  {
    id: 2,
    question: "Κανείς δεν αντιστέκετε",
    url: "https://www.enikos.gr/wp-content/uploads/2021/08/791467_6ae1fc1de3-9573f84524146086.jpg",
    options: [
      "1 Στην γλαφυρότητα σας",
      "2 Στα νάζια σάς",
      "3 Στο βλέμμα σας",
      "4 Στην γλύκα σας",
      "5 Στο χιούμορ σας",
    ],
  },
  {
    id: 3,
    question: "Είστε καλή",
    url: "https://www.alphafreepress.gr/wp-content/uploads/2021/11/karezi.jpg",
    options: [
      "1 Στίς πόζες",
      "2 Στο τραγούδι",
      "3 Στο λέγειν",
      "4 Στο ντύσιμο",
      "5 Στον χορό",
    ],
  },
  {
    id: 4,
    question: "Αἱ κρυφαὶ χάραι ὑμῶν εἰσὶν",
    url: "https://www.tovima.gr/wp-content/uploads/2022/09/18/martha_k-1024x614.jpg",
    options: [
      "1 Προσήνια καἰ ειλικρίνεια,",
      "2 Εύστροφία καὶ ἐπιχειρηματικὸν δαιμόνιον",
      "3 Ρομαντισμὸς και πείσμα",
      "4 Εὐαισθησία, καταστάλαξη ευγένεια,",
      "5 Δυναμισμὸς και καλοκαρδοσύνη",
    ],
  },
  {
    id: 5,
    question: "Σάς αρέσει να",
    url: "https://i0.wp.com/voliotaki.gr/wordpress/wp-content/uploads/2022/07/3257290.jpg?fit=770%2C433&ssl=1",
    options: [
      "1 Δημιουργείτε κοσμήματα",
      "2 Μαγειρεύετε για φίλους",
      "3 Φροντίζετε τον κήπο σάς",
      "4 Παίζετε τάβλι ",
      "5 χαλαρώνετε στο σπίτι με ένα ζωάκι συντροφιά",
    ],
  },
];

let answers = [0, 0, 0, 0, 0];

let question_count = 0;

// window.onload = function () {
//   show(question_count);
// };

// function show(count) {
//   let question = document.getElementById("questions");
//   let [first, second, third, fourth, fifth] = questions[count].options;
//   question.innerHTML = `
//   <h2>${count + 1}. ${questions[count].question}</h2>

//     <ul class= "option_group">
//     <li class="option">${first}</li>
//     <li class="option">${second}</li>
//     <li class="option">${third}</li>
//     <li class="option">${fourth}</li>
//     <li class="option">${fifth}</li> </ul>`;
//   toggleActive();
// }

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  option.forEach(option => {
    console.log(option);
    option.length++;
    // option[i].onclick(option => {
    //     option.length++;
    //     option[i].classList.contains("active")?option[i].classList.remove("active")
    // })
  });
}

applyQuestions = function (q1, q2, q3, q4, q5, url) {
  const options = document.getElementById("quiz-body");

  options.innerHTML = `
    <img src="${url}" alt="${1}">
    <ul class= "option_group">
     <li> <button class="option" data-number="1" onclick="nextanswer(0)">${q1}</button></li>
    <li> <button class="option" onclick="nextanswer(1)">${q2}</button></li>
      <li> <button class="option" onclick="nextanswer(2)">${q3}</button></li>
      <li> <button class="option" onclick="nextanswer(3)">${q4}</button></li>
      <li> <button class="option" onclick="nextanswer(4)">${q5}</button></li>
    </ul>
  `;
};

applyOptions = function (option, url) {
  applyQuestions(option[0], option[1], option[2], option[3], option[4], url);
};

applyQuestion = function (q) {
  const question = document.getElementById("quiz-user");
  question.innerHTML = `<h4>${q}</h4>`;
};

let questionIndex = 0;
applyOptions(questions[0].options, questions[0].url);
applyQuestion(questions[0].question);

function next() {
  questionIndex++;
  applyOptions(questions[questionIndex].options, questions[questionIndex].url);
  applyQuestion(questions[questionIndex].question);
  // const btnNext = document.getElementById("btn-next");
  // btnNext.innerHTML = "ἐπατήθη";
}

function nextanswer(nextAnswerButtonId) {
  if (questionIndex === questions.length - 1) {
    console.log("τέλος");
    console.log(answers);

    let mostAnswered = indexOfMax(answers);
    // if (mostAnswered == answers)
    window.location.replace(`/apotel.html?id=${mostAnswered}`);
    // if (mostAnswered === answers[0]) {
    // window.location.replace(`/apotel.html?id=${mostAnswered}`);
    // }
  }
  answers[nextAnswerButtonId]++;
  questionIndex++;

  applyOptions(questions[questionIndex].options);
  applyQuestion(questions[questionIndex].question);
}
//showResult = function () {

//if (questionIndex > question.length && `${q2}` >= 3) id = "aliki";
//};

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
}
indexOfMax(answers);
// console.log(questions.url[0]);

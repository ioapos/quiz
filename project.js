let questions = [
  {
    id: 1,
    question: "Κατά γενική ομολογία θεωρείστε",
    url: "https://antikatapliktika.files.wordpress.com/2019/03/25755_383209023430_269916953430_3720656_2301133_n-e1295972280792-1.jpeg",
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
    url: "https://www.patrisnews.com/wp-content/uploads/2016/07/tz7.jpg",
    options: [
      "1 Στίς πόζες",
      "2 Στο τραγούδι",
      "3 Στο ντύσιμο",
      "4 Στο λέγειν",
      "5 Στον χορό",
    ],
  },
  {
    id: 4,
    question: "Οί κρυφές σας χάρες είναι",
    url: "https://i1.prth.gr/images/1168x656/files/2022-09-20/martha_karagiannh57837.jpg",
    options: [
      "1 Προσήνια",
      "2 Ευστροφία",
      "3 Καταστάλαξη",
      "4 Πείσμα",
      "5 Δυναμισμός",
    ],
  },
  {
    id: 5,
    question: "Αγαπημένη ενασχόληση",
    url: "https://www.filmy.gr/wp-content/uploads/2019/11/Alice-in-the-Navy-12.jpg",
    options: [
      "1 Χειροποίητη δημιουργία (πχ κοσμήματα)",
      "2 Πεζοπορία, ορειβασία",
      "3 Ανάγνωση, ζωγραφική",
      "4 Ενασχόληση με παιχνίδια πχ(τάβλι, χαρτιά)",
      "5 Συλλογή βίνταζ αντικειμένων",
    ],
  },
];

let answers = [0, 0, 0, 0, 0];

let question_count = 0;
console.log(answers);
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

// With this funtion we loop over the option which ist the class name of each list -> of each option of the questions.options[i]
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
// a function that applys the questions+ the photos(url) in the html
//Basically we fill the questions array with the html
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

// each question is the option value of the questions array.
//This function (apply options) just "calls" the applyQuestions function, and we see the five different questions of the quiz
applyOptions = function (option, url) {
  applyQuestions(option[0], option[1], option[2], option[3], option[4], url);
};
console.log(applyQuestions);
// with this function we apply the h4 html
applyQuestion = function (q) {
  const question = document.getElementById("quiz-user");
  question.innerHTML = `<h4>${q}</h4>`;
};

// we start from index 0 and we call the above functions
let questionIndex = 0;
applyOptions(questions[0].options, questions[0].url);
applyQuestion(questions[0].question);

// this is the click function in our buttons so as we can click the question we want from the quiz,
// In order to work we multiply the question index and we call the functions above in order to see and click the answer we want
function next() {
  //let answerNotclicked = questionIndex.
  questionIndex++;
  applyOptions(questions[questionIndex].options, questions[questionIndex].url);
  applyQuestion(questions[questionIndex].question);
  // const btnNext = document.getElementById("btn-next");
  // btnNext.innerHTML = "ἐπατήθη";
}

// If all or the most questions from the array are clicked , aka if we played the quiz this this function will show
// the result
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

  applyOptions(questions[questionIndex].options, questions[questionIndex].url);
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

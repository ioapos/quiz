// This is the dataset for all the questions. The dataset contains the id representing the index of the question in the array,
// the question, and the options that the user can answer. This dataset could be received from an external api
let questions = [
  {
    id: 1,
    question: "Κατά γενική ομολογία θεωρείστε",
    url: "https://antikatapliktika.files.wordpress.com/2019/03/25755_383209023430_269916953430_3720656_2301133_n-e1295972280792-1.jpeg",
    options: [
      "1.  Mοιραία",
      "2.  Χαριτωμένη",
      "3.  Κυριλάτη",
      "4.  Μυστήρια",
      "5.  Σέξυ",
    ],
  },
  {
    id: 2,
    question: "Κανείς δεν αντιστέκετε",
    url: "https://www.enikos.gr/wp-content/uploads/2021/08/791467_6ae1fc1de3-9573f84524146086.jpg",
    options: [
      "1. Στην γλαφυρότητα σας",
      "2. Στα νάζια σας",
      "3. Στο βλέμμα σας",
      "4. Στην γλύκα σας",
      "5. Στο χιούμορ σας",
    ],
  },
  {
    id: 3,
    question: "Είστε καλή",
    url: "https://www.patrisnews.com/wp-content/uploads/2016/07/tz7.jpg",
    options: [
      "1. Στίς πόζες",
      "2. Στό τραγούδι",
      "3. Στό ντύσιμο",
      "4. Στό λέγειν",
      "5. Στόν χορό",
    ],
  },
  {
    id: 4,
    question: "Οί κρυφές σας χάρες είναι",
    url: "https://i1.prth.gr/images/1168x656/files/2022-09-20/martha_karagiannh57837.jpg",
    options: [
      "1. Προσήνια",
      "2. Ευστροφία",
      "3. Καταστάλαξη",
      "4. Πείσμα",
      "5. Δυναμισμός",
    ],
  },
  {
    id: 5,
    question: "Αγαπημένη ενασχόληση-χόμπι",
    url: "https://www.filmy.gr/wp-content/uploads/2019/11/Alice-in-the-Navy-12.jpg",
    options: [
      "1. Χειροποίητη δημιουργία (πχ κοσμήματα)",
      "2. Πεζοπορία, ορειβασία",
      "3. Ανάγνωση, ζωγραφική",
      "4. Ενασχόληση με παιχνίδια πχ(τάβλι, χαρτιά)",
      "5. Συλλογή αντικειμένων πχ βίνταζ",
    ],
  },
];

// This is the potential answer options template. The individual answers populate the button text body
let answerOptionsHtmlTemplate = (q1, q2, q3, q4, q5) => `
  <div class= "d-grid gap-2">
    <button class="btn btn-light" onclick="nextAnswer(0)">${q1}</button>
    <button class="btn btn-light" onclick="nextAnswer(1)">${q2}</button>
    <button class="btn btn-light" onclick="nextAnswer(2)">${q3}</button>
    <button class="btn btn-light" onclick="nextAnswer(3)">${q4}</button>
    <button class="btn btn-light" onclick="nextAnswer(4)">${q5}</button>
  </div>
`;

let questionImageHtmlTemplate = url => `
    <img src="${url}" alt="img" style="width: 600px; height: 400px; object-fit: contain;">
`;

// we start from index 0 and we call the above functions
let questionIndex = 0;

// Players answers go here
let answers = [0, 0, 0, 0, 0];

// We render the first index manually, in order to kickstart app
renderByIndex(0);

// If all or the most questions from the array are clicked , aka if we played the quiz this this function will show
// the result
function nextAnswer(nextAnswerButtonId) {
  if (questionIndex === questions.length - 1) {
    let mostAnswered = indexOfMax(answers);
    window.location.replace(`/apotel.html?id=${mostAnswered}`);
  }

  answers[nextAnswerButtonId]++;
  questionIndex++;

  renderByIndex(questionIndex);
}

function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }

  return maxIndex;
}

function renderByIndex(index) {
  let questionData = questions[index];

  let imageElement = document.getElementById("image-wrapper");
  imageElement.innerHTML = questionImageHtmlTemplate(questionData.url);

  let questionElement = document.getElementById("question-wrapper");
  questionElement.innerText = questionData.question;

  let optionsElement = document.getElementById("options-wrapper");
  optionsElement.innerHTML = answerOptionsHtmlTemplate(
    questionData.options[0],
    questionData.options[1],
    questionData.options[2],
    questionData.options[3],
    questionData.options[4]
  );

  const question = document.getElementById("page-index");
  question.innerText = index + 1;
}

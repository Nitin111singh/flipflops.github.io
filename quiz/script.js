const quizData = [
    {
        question: "If the J-input of a J-K flip-flop is treated as input and an inverter is connected between J and K inputs, the J-K flip-flop becomes?",
        a: "T FLipflop",
        b: "D latch",
        c: "RS Flipflop",
        d: "D flipflop",
        correct: "a",
    },
    {
        question: "A flipflop circuit can be used for?",
        a: "Counting only",
        b: "Both for counting and scaling",
        c: "Rectification",
        d: "Demodulation",
        correct: "c",
    },
    {
        question: "D flipflop can be made JK FLipflop by making?",
        a: "J=K",
        b: "J=K=1",
        c: "J=0 K=1",
        d: "J=K'",
        correct: "c",
    },
    {
        question: "Which of the following flipflops has no change condition?",
        a: "JK",
        b: "D",
        c: "SR latch",
        d: "T",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})

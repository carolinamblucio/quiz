const conteudoQuiz=[
    {
        pergunta:'Qual o nome do último album lançado pela Taylor Swift?',
        a: 'reputation',
        b: 'Lover',
        c: 'Midnights',
        d: 'folklore',
        correta: 'c'
    },

    {pergunta: 'Quem é o dono da caneca Worlds Best Boss?',
    a:'Professor Farnsworth',
    b:'Michael Scott',
    c:'Jethro Gibbs',
    d:'Mr Burns',
    correta:'b'
    },

    {pergunta: 'Qual o nome da personagem da Zendaya em Euphoria?',
    a:'Lexi',
    b:'Cassie',
    c:'Maddy',
    d:'Rue',
    correta:'d'
    },

    {pergunta: 'Quem escreveu The Handmaids Tale? ',
    a:'Margaret Atwood',
    b:'Alice Munro',
    c:'Virginia Woolf',
    d:'Neil Gaiman',
    correta:'a'
    },

    {pergunta: 'Quem foi a vencedora da 8 temporada de RuPauls Drag Race?',
    a:'Cynthia Lee Fontaine',
    b:'Adore Delano',
    c:'Bob The Drag Queen',
    d:'Kim Chi',
    correta:'c'
    },

];

const quiz = document.getElementById("quiz");
const respostaEls = document.querySelectorAll(".resposta");
const perguntaEl = document.getElementById("pergunta");
const a_texto = document.getElementById("a_texto");
const b_texto= document.getElementById("b_texto");
const c_texto = document.getElementById("c_texto");
const d_texto = document.getElementById("d_texto");
const enviarBtn = document.getElementById("enviar");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = conteudoQuiz[currentQuiz];

    perguntaEl.innerText = currentQuizData.pergunta;
    a_texto.innerText = currentQuizData.a;
    b_texto.innerText = currentQuizData.b;
    c_texto.innerText = currentQuizData.c;
    d_texto.innerText = currentQuizData.d;
}

function getSelected() {
    let resposta = undefined;

    respostaEls.forEach((respostaEl) => {
        if (respostaEl.checked) {
            resposta = respostaEl.id;
        }
    });

    return resposta;
}

function deselectAnswers() {
    respostaEls.forEach((respostaEl) => {
        respostaEl.checked = false;
    });
}

enviarBtn.addEventListener("click", () => {
    
    const resposta = getSelected();

    if (resposta) {
        if (resposta === conteudoQuiz[currentQuiz].correta) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < conteudoQuiz.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Você acertou ${score}/${conteudoQuiz.length} perguntas!!</h2>
                
                <button onclick="location.reload()">Refazer</button>
            `;
        }
    }
});
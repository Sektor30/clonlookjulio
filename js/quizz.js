/* let user = JSON.parse(localStorage.getItem("usuarios"));

const form = document.querySelector('#quizForm');


const questions = [
    {
        text: "¿Qué es un \"género cinematográfico\"?",
        options: [
                    "Una categoría que clasifica las películas según su presupuesto.",
                    "Una categoría que clasifica las películas según su duración.",
                    "Una categoría que agrupa películas según sus características comunes."
                ],
                answer: "c",
                name: "question1"
    },
    {
                text: "¿Quién es el encargado de dirigir a los actores y definir el estilo visual de una película?",
                options: [
                    "El productor",
                    "El director",
                    "El guionista"
                ],
                answer: "b",
                name: "question2"
    },
    {
                text: "¿Qué es un \"plano\" en cine?",
                options: [
                    "Una toma que muestra una imagen específica.",
                    "Una escena completa de la película."
                ],
                answer: "a",
                name: "question3"
    },
    {
                text: "¿Qué hace el \"guionista\" en una película?",
                options: [
                    "Dirige a los actores durante el rodaje.",
                    "Escribe el guion que describe los diálogos y las acciones de los personajes.",
                    "Dirige a los actores durante el rodaje."
                ],
                answer: "b",
                name: "question4"
            },
            {
                text: "¿Qué es una \"escena\" en una película?",
                options: [
                    "Una parte de la película que ocurre en un solo lugar y tiempo.",
                    "Un conjunto de imágenes en movimiento que constituyen la película.",
                    "Una toma que muestra una imagen específica."
                ],
                answer: "a",
                name: "question5"
            }
        ];

        let currentQuestionIndex = 0;

        function renderQuestion(index) {
            const questionContainer = document.getElementById('question-container');
            questionContainer.innerHTML = '';

            const question = questions[index];

            const questionText = document.createElement('p');
            questionText.className = 'question';
            questionText.innerText = question.text;

            questionContainer.appendChild(questionText);

            question.options.forEach((option, i) => {
                const optionContainer = document.createElement('div');
                optionContainer.className = 'form-check';

                const input = document.createElement('input');
                input.type = 'radio';
                input.name = question.name;
                input.value = String.fromCharCode(97 + i); // 'a', 'b', 'c'
                input.id = `${question.name}_option${i}`;
                input.className = 'form-check-input';

                const label = document.createElement('label');
                label.className = 'form-check-label';
                label.htmlFor = input.id;
                label.innerText = option;

                optionContainer.appendChild(input);
                optionContainer.appendChild(label);
                questionContainer.appendChild(optionContainer);
            });
        }

        function updateButtons() {
            const prevButton = document.getElementById('prev-button');
            const nextButton = document.getElementById('next-button');
            const submitButton = document.getElementById('submit-button');

            prevButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
            nextButton.style.display = currentQuestionIndex < questions.length - 1 ? 'block' : 'none';
            submitButton.classList.toggle('d-none', currentQuestionIndex !== questions.length - 1);
        }

        document.getElementById('prev-button').addEventListener('click', () => {
            currentQuestionIndex--;
            renderQuestion(currentQuestionIndex);
            updateButtons();
        });

        document.getElementById('next-button').addEventListener('click', () => {
            currentQuestionIndex++;
            renderQuestion(currentQuestionIndex);
            updateButtons();
        });

        document.getElementById('quizForm').addEventListener('submit', (e) => {
            e.preventDefault();
            validarRespuestas(e);
        });

        renderQuestion(currentQuestionIndex);
        updateButtons();


// Capturar y validar respuestas (funciones existentes, sin cambios)
function capturarRespuestas() {
    const color = document.querySelector('input[name="question1"]:checked')?.value;
    const comida = document.querySelector('input[name="question2"]:checked')?.value;
    const musica = document.querySelector('input[name="question3"]:checked')?.value;
    const deporte = document.querySelector('input[name="question4"]:checked')?.value;
    const vacaciones = document.querySelector('input[name="question5"]:checked')?.value;

    return {
        p1: color,
        p2: comida,
        p3: musica,
        p4: deporte,
        p5: vacaciones
    };
}

function validarRespuestas(e) {
    e.preventDefault();

    const respuestasUser = capturarRespuestas();
    const respuestasCorrectas = {
        p1: "c",
        p2: "b",
        p3: "a",
        p4: "b",
        p5: "a"
    };

    let acumulado = 0;

    const arrayRespuestasUser = Object.values(respuestasUser);
    const arrayRespuestasCorrectas = Object.values(respuestasCorrectas);

    for (let i = 0; i < arrayRespuestasUser.length; i++) {
        if (arrayRespuestasUser[i] == arrayRespuestasCorrectas[i]) {
            acumulado++;
        }
    }
     /* todo lo que sigues es del modal
    const h1 = document.querySelector('#h1-respuesta');
    const btnf = document.querySelector('#btn-final');
    const btnx = document.querySelector('#btn-close');

    for (let i = 0; i < user.length; i++) {
        if (user[i].logged && acumulado >= 3) {
            h1.innerHTML = `Ganaste el examen 🟩 Has respondido correctamente ${acumulado} de ${arrayRespuestasUser.length} preguntas.`;
            btnx.style.display = "none";
            btnf.style.display = "block";
            user[i].progreso += 100;
            user[i].certificado = true;
            localStorage.setItem("usuarios", JSON.stringify(user));
            return;
        }
    }

    h1.innerHTML = `Debes repetir el examen 💀 Has respondido correctamente ${acumulado} de ${arrayRespuestasUser.length} preguntas.`;
    btnf.style.display = "none";
    btnx.style.display = "block";
}

form.addEventListener("submit", validarRespuestas);  */

let user = JSON.parse(localStorage.getItem("usuarios"));

const form = document.querySelector('#quizForm');

const questions = [
    {
        text: "¿Qué es un \"género cinematográfico\"?",
        options: [
            "Una categoría que clasifica las películas según su presupuesto.",
            "Una categoría que clasifica las películas según su duración.",
            "Una categoría que agrupa películas según sus características comunes."
        ],
        answer: "c",
        name: "question1"
    },
    {
        text: "¿Quién es el encargado de dirigir a los actores y definir el estilo visual de una película?",
        options: [
            "El productor",
            "El director",
            "El guionista"
        ],
        answer: "b",
        name: "question2"
    },
    {
        text: "¿Qué es un \"plano\" en cine?",
        options: [
            "Una toma que muestra una imagen específica.",
            "Una escena completa de la película."
        ],
        answer: "a",
        name: "question3"
    },
    {
        text: "¿Qué hace el \"guionista\" en una película?",
        options: [
            "Dirige a los actores durante el rodaje.",
            "Escribe el guion que describe los diálogos y las acciones de los personajes.",
            "Dirige a los actores durante el rodaje."
        ],
        answer: "b",
        name: "question4"
    },
    {
        text: "¿Qué es una \"escena\" en una película?",
        options: [
            "Una parte de la película que ocurre en un solo lugar y tiempo.",
            "Un conjunto de imágenes en movimiento que constituyen la película.",
            "Una toma que muestra una imagen específica."
        ],
        answer: "a",
        name: "question5"
    }
];

let currentQuestionIndex = 0;
let respuestasCapturadas = {}; // Objeto para almacenar las respuestas

// Función para renderizar las preguntas
function renderQuestion(index) {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    const question = questions[index];

    const questionText = document.createElement('p');
    questionText.className = 'question';
    questionText.innerText = question.text;

    questionContainer.appendChild(questionText);

    question.options.forEach((option, i) => {
        const optionContainer = document.createElement('div');
        optionContainer.className = 'form-check';

        const input = document.createElement('input');
        input.type = 'radio';
        input.name = question.name;
        input.value = String.fromCharCode(97 + i); // 'a', 'b', 'c'
        input.id = `${question.name}_option${i}`;
        input.className = 'form-check-input';

        const label = document.createElement('label');
        label.className = 'form-check-label';
        label.htmlFor = input.id;
        label.innerText = option;

        optionContainer.appendChild(input);
        optionContainer.appendChild(label);
        questionContainer.appendChild(optionContainer);
    });
}

// Actualizar los botones de navegación
function updateButtons() {
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const submitButton = document.getElementById('submit-button');

    prevButton.style.display = currentQuestionIndex > 0 ? 'block' : 'none';
    nextButton.style.display = currentQuestionIndex < questions.length - 1 ? 'block' : 'none';
    submitButton.classList.toggle('d-none', currentQuestionIndex !== questions.length - 1);
}

// Capturar la respuesta de la pregunta actual
function capturarRespuestas() {
    const questionName = questions[currentQuestionIndex].name;
    const selectedValue = document.querySelector(`input[name="${questionName}"]:checked`)?.value;

    if (selectedValue) {
        respuestasCapturadas[questionName] = selectedValue;
    }
}

// Evento para ir a la pregunta anterior
document.getElementById('prev-button').addEventListener('click', () => {
    capturarRespuestas();  // Capturamos la respuesta antes de cambiar de pregunta
    currentQuestionIndex--;
    renderQuestion(currentQuestionIndex);
    updateButtons();
});

// Evento para ir a la siguiente pregunta
document.getElementById('next-button').addEventListener('click', () => {
    capturarRespuestas();  // Capturamos la respuesta antes de cambiar de pregunta
    currentQuestionIndex++;
    renderQuestion(currentQuestionIndex);
    updateButtons();
});

// Evento para enviar el quiz
document.getElementById('quizForm').addEventListener('submit', (e) => {
    e.preventDefault();
    validarRespuestas(e);
});

renderQuestion(currentQuestionIndex);
updateButtons();

// Función para validar las respuestas
function validarRespuestas(e) {
    e.preventDefault();

    // Utilizamos el objeto respuestasCapturadas en lugar de capturar las respuestas nuevamente
    const respuestasUser = respuestasCapturadas;

    const respuestasCorrectas = {
        question1: "c",
        question2: "b",
        question3: "a",
        question4: "b",
        question5: "a"
    };

    let acumulado = 0;

    // Comparamos las respuestas
    for (let key in respuestasUser) {
        if (respuestasUser[key] === respuestasCorrectas[key]) {
            acumulado++;
        }
    }

    // Código para mostrar el resultado en el modal
    const h1 = document.querySelector('#h1-respuesta');
    const btnf = document.querySelector('#btn-final');
    const btnx = document.querySelector('#btn-close');

    for (let i = 0; i < user.length; i++) {
        if (user[i].logged && acumulado >= 3) {
            h1.innerHTML = `Ganaste el examen 🟩 Has respondido correctamente ${acumulado} de ${Object.keys(respuestasUser).length} preguntas.`;
            btnx.style.display = "none";
            btnf.style.display = "block";
            user[i].progreso += 100;
            user[i].certificado = true;
            localStorage.setItem("usuarios", JSON.stringify(user));
            return;
        }
    }

    h1.innerHTML = `Debes repetir el examen 💀 Has respondido correctamente ${acumulado} de ${Object.keys(respuestasUser).length} preguntas.`;
    btnf.style.display = "none";
    btnx.style.display = "block";
}

form.addEventListener("submit", validarRespuestas);

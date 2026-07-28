// 1. Captura a hora do sistema (número de 0 a 23)
const horaAtual = new Date().getHours();

const nomeUsuario = document.getElementById('nome-usuario').textContent;

// 2. Captura a tag <span id="saudacao"> do HTML
const elementoSaudacao = document.getElementById('saudacao');

// 3. Estrutura condicional completa
if (horaAtual >= 5 && horaAtual < 12) {
  elementoSaudacao.innerHTML = `Bom dia, <span id="nome-usuario">${nomeUsuario}</span>`;
} else if (horaAtual >= 12 && horaAtual < 18) {
  elementoSaudacao.innerHTML = `Boa tarde, <span id="nome-usuario">${nomeUsuario}</span>`;
} else {
  elementoSaudacao.innerHTML = `Boa noite, <span id="nome-usuario">${nomeUsuario}</span>`;
}

// 1. função responsável por capturar e exibir a hora

function atualizarRelogio() {
  const agora = new Date(); //Date -> É o molde nativo do JS que sabe tudo sobre calendário, fusos horários, horas, minutos e segundos.

  // o método toLocaleTimeString formatada a hora no padrão brasileiro 
  const horaFormatada = agora.toLocaleTimeString('pt-BR');

  //Atualiza o elemento no HTML
  document.getElementById('relogio').textContent = horaFormatada;
}

//2. chama a função imediatamente para carregar a hora assim que a página abre
atualizarRelogio();

//3. Configure o temporizador para rodar a função a cada 1 segundo (1000 ms)
setInterval(atualizarRelogio, 1000);

const dataMarcada = new Date();

document.getElementById('data').textContent = dataMarcada.toLocaleDateString()

const listaTarefas = document.getElementById("listaTarefas"); //const listaTarefas = document.querySelector("#listaTarefas");
const btnAdicionar = document.getElementById("adicionar");
const inputTarefa = document.getElementById("novaTarefa");

btnAdicionar.addEventListener("click", () => { //addEventListener -> Adiciona um ouvinte de evento a um elemento HTML. O primeiro parâmetro é o tipo de evento (click, mouseover, keydown, etc.) e o segundo parâmetro é a função que será executada quando o evento ocorrer.

    const tarefa = inputTarefa.value.trim();
})

/*
const listaTarefas = document.getElementById("listaTarefas");
const btnAdicionar = document.getElementById("adicionar");
const inputTarefa = document.getElementById("novaTarefa");

btnAdicionar.addEventListener("click", () => {

    const texto = inputTarefa.value.trim();

    if (!texto) return;

    const tarefa = document.createElement("div");
    tarefa.classList.add("task");

    tarefa.innerHTML = `
        <input type="checkbox">
        <label>${texto}</label>
        <button class="excluir">🗑️</button>
    `;

    tarefa.querySelector(".excluir").addEventListener("click", () => {
        tarefa.remove();
    });

    listaTarefas.appendChild(tarefa);

    inputTarefa.value = "";
});
*/
let tarefas = [];

function adicionarTarefa() {
  const inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value.trim();

  const mensagem = document.getElementById("mensagem");
  let mensagemErro = "Digite uma tarefa";

  if (tarefa == "") {
    mensagem.textContent = mensagemErro;
  } else {
    let mensagemSucesso = "Tarefa adicionada com sucesso!";
    mensagem.textContent = mensagemSucesso

      tarefas.push(tarefa);
      renderizarTarefas()
      
  }

  inputTarefa.value = "";
}

function renderizarTarefas() {
    const listaTarefa = document.getElementById("listaTarefas");
    listaTarefa.innerHTML = ""

      
    for (let i = 0; i < tarefas.length; i++){
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas[i]
        
        let botaoRemover = document.createElement("button")
        botaoRemover.className = "remover"
        botaoRemover.textContent = "Remover"
        botaoRemover.onclick = () => removerTarefa(i)

        let botaoEditar = document.createElement("button")
        botaoEditar.className = "editar"
        botaoEditar.textContent = "Editar"
        botaoEditar.onclick = () => editarTarefa(i)
        
        novaTarefa.appendChild(botaoEditar)    
        novaTarefa.appendChild(botaoRemover)        
        listaTarefa.appendChild(novaTarefa)
   
      
    }  
  
}
function removerTarefa(i) {
    tarefas.splice(i, 1)
    renderizarTarefas()
}

function editarTarefa(i) {
    let tarefaEditada = prompt("Edita a sua tarefa : ")
    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }
}
function limparLista() {
    tarefas.length = 0
    renderizarTarefas()
    const mensagem = document.getElementById("mensagem")
    mensagem.textContent = "Lista de tarefas limpa com sucesso"
}
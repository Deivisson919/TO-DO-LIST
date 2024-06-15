const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-tasks')



let minhalistadeitens = []

function adicionarnovatarefa()
{minhalistadeitens.push({
  tarefa: input.value,
  concluida: false

})

input.value = ' '

mostrartarefas()

}

function mostrartarefas(){
  let novaLI = ' '
minhalistadeitens.forEach((item, posicao) => {
novaLI = novaLI + `

<li class="task ${item.concluida && "done"}">

    <img src="./todo-list-yt-master/img/checked.png" alt="checked" onclick="concluirtarefa(${posicao})">
    <p>${item.tarefa}</p>
    <img src="./todo-list-yt-master/img/trash.png" alt="delet" onclick="deletaritem(${posicao})">
</li>

`

})

listacompleta.innerHTML = novaLI

localStorage.setItem('lista', JSON.stringify(minhalistadeitens))

}

function concluirtarefa(posicao) {
  minhalistadeitens[posicao].concluida = !minhalistadeitens[posicao].concluida
  mostrartarefas()
}

function deletaritem(posicao){
  minhalistadeitens.splice(posicao, 1)
mostrartarefas()
}

function recarregartarefas(){ 
  const tarefasdolocalstorage = localStorage.getItem('lista')
  if (tarefasdolocalstorage){
  minhalistadeitens = JSON.parse(tarefasdolocalstorage)
}
  console.log(tarefasdolocalstorage)
  mostrartarefas()
}
recarregartarefas()
button.addEventListener('click', adicionarnovatarefa) 
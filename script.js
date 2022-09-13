const NEW_TASK = document.getElementById('add-task')
const BTN_ADD = document.getElementById('btn-add-task')
const FILTER_TASK = document.getElementById('filter-task')
const LIST = document.getElementById('task-collection')
const BTN_DEL = document.getElementsByClassName('btn-del-tasks')[0]

loadEvents()

function loadEvents(){
    document.addEventListener('DOMContentLoaded', showTaskFromLocalStorage)
    BTN_ADD.addEventListener('click', addTask)
    FILTER_TASK.addEventListener('keyup', filterTasks)
    LIST.addEventListener('click', deleteTask)
    BTN_DEL.addEventListener('click', deleteAllTasks)
}
function addTask(){

    if(NEW_TASK.value == ''){

        alert('Insira um valor valido')

    }else{

        const UL = LIST

        const LI = document.createElement('li')
    
        const CONTENT = document.createTextNode(NEW_TASK.value)
    
        const A = document.createElement('a')
        A.className = 'remove-item'
        A.setAttribute('href','#')
    
        const I = document.createElement('i')
        I.textContent = 'x'
    
        A.appendChild(I)
        LI.appendChild(CONTENT)
        LI.appendChild(A)
        UL.appendChild(LI)

    }

    addTaskLocalStorage(NEW_TASK)

    NEW_TASK.value = ''

}
function addTaskLocalStorage(task){

    let tarefas

    if(localStorage.getItem('tarefas') === null){
        tarefas = []
    }else{
        tarefas = JSON.parse( localStorage.getItem('tarefas') )
    }

    tarefas.push(task.value)

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}
function showTaskFromLocalStorage(){

    let tarefas

    if(localStorage.getItem('tarefas') === null){
        tarefas = []
    }else{
        tarefas = JSON.parse( localStorage.getItem('tarefas') )
    }

    tarefas.forEach( function(tarefa){
        
        const UL = LIST

        const LI = document.createElement('li')
    
        const CONTENT = document.createTextNode(tarefa)
    
        const A = document.createElement('a')
        A.className = 'remove-item'
        A.setAttribute('href','#')
    
        const I = document.createElement('i')
        I.textContent = 'x'
    
        A.appendChild(I)
        LI.appendChild(CONTENT)
        LI.appendChild(A)
        UL.appendChild(LI)

    });
}
function deleteTask(e){
    e.preventDefault()

    if(e.target.parentElement.classList.contains('remove-item')){
        e.target.parentElement.parentElement.remove()
    }

}
function filterTasks(){

}
function deleteAllTasks(){

    LIST.innerHTML = ''
    localStorage.removeItem('tarefas')
}
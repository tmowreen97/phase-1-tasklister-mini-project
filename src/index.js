let input = document.querySelector('#new-task-description')
let form = document.querySelector('#create-task-form')

function deleteToDo (e){
  console.log(e.target.parentNode.remove())
}

function buildToDo(todo){
  let p = document.createElement('p')
  let btn = document.createElement('button')
  btn.textContent = ' x '
  btn.addEventListener('click', deleteToDo)
  p.textContent= `${todo} `
  document.querySelector('#list').appendChild(p)
  p.appendChild(btn)
  p.style="red"
}
document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', submitForm)
  
  function submitForm(e){
    e.preventDefault()
    buildToDo(input.value)}
  })

let priorities = ['High Priority', 'Medium Property', 'Low Priority']
function buildDropdown(){
  let list = document.createElement('select')
  let choice1 = document.createElement('option')
  let choice2 = document.createElement('option')
  let choice3 = document.createElement('option')
  choice1.innerHTML = 'High Priority'
  choice2.innerHTML = 'Medium Priority'
  choice3.innerHTML = 'Low Priority'
  list.append(choice1, choice2, choice3)
  form.appendChild(list)
}
buildDropdown(priorities)


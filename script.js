
let prevList = JSON.parse(localStorage.getItem('myArr'));
let todoList = [];
if (prevList != null) {
    todoList = prevList.slice(0, prevList.length);
    addTodo();
}
let cnt = 0;
let ind = todoList.length;
function addTodo() {

    let inputElement = document.querySelector('#todo-input');
    let getDate = document.querySelector('#due-date');

    let todoItem = inputElement.value;
    let dueDate = getDate.value;


    if (todoItem.length > 0)
        todoList.push({ item: todoItem, date: dueDate });

    localStorage.setItem('myArr', JSON.stringify(todoList));
    inputElement.value = '';
    getDate.value = '';
    displayItems();


}

function displayItems() {
    let cointainerEle = document.querySelector('.todo-cointainer');

    let newHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        newHtml +=
        
        `
        <span class="list">${todoList[i].item}</span>
        <span value="Give a timeline" class="list"> ${todoList[i].date}</span>
        <button class="todo-edit" onclick="edit(${i});"
        >Edit</button>
        <button id="del" onclick="todoList.splice(${i},1);displayItems();
        localStorage.setItem('myArr',JSON.stringify(todoList));
        ">Delete</button>`;
    }
    cointainerEle.innerHTML = newHtml;

}

function edit(index) {
    document.querySelector('#todo-input').value = todoList[index].item;
    document.querySelector('#due-date').value = todoList[index].date;
    todoList.splice(index, 1);
    

}
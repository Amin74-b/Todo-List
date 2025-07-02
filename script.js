const btnDark = document.getElementById("dark");
const taskInput = document.getElementById("input")
const btnadd = document.getElementById("add")
const btnsup = document.getElementById("supr")
const timer = document.getElementById("time")
const numTasks = document.getElementById("task")
const itemsContainer = document.getElementById("box03")
const body = document.body;

//dark - light mode switch
btnDark.addEventListener('click', darkmode)
function darkmode() {
    body.classList.toggle('light-mode');
    body.classList.toggle('night');
    btnDark.textContent = body.classList.contains('night') ? ' Night ' : 'light Mode';
};

//show or hide no hide message
const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const taskList = document.getElementById("taskList")

// Add event listener for adding task
addTaskBtn.addEventListener("click",function(){
    const taskText = taskInput.value.trim()

    if (taskText ===""){
        alert("please enter a task!")
        return;
    }
    const li = document.createElement("li")
    li.textContent = taskText
    li.addEventListener("click",function(){
        taskList.removeChild(li)

    })
    taskList.appendChild(li)

    taskInput.value = ""

}) 
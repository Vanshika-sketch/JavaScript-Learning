const taskInput = document.getElementById("taskInput")
const addTaskBtn = document.getElementById("addTaskBtn")
const clearAllBtn = document.getElementById("clearALlBtn")
const taskList = document.getElementById("taskList")
const emptyMsg = document.getElementById("emptyMsg")
const taskForm = document.getElementById("taskForm")

const STORAGE_KEY = "todo.tasksv1"
let tasks =[]

function loadTasks(){
    try{
        const raw = localStorage.getItem(STORAGE_KEY) 
        if(!raw) return []
        const parsed = JSON.parse(raw)
        return Array.isArray(parsed) ? parsed :[]
    } catch (err){
        console.error("loadTasks error:",err)
        return[]
    }
}
function saveTasks(){
    try {
        localStorage.setItem(STORAGE_KEY,JSON.stringify(tasks));
    } 
    catch (err){
        console.error("saveTasks error:",err);
    }
}
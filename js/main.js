"use stric";

let taskList = [];


/*********
 * FONCTIONS
 */
function showTaskList() {

    document.querySelector("#todolist").innerHTML = "<ul> </ul>";

    taskList.forEach((task, index) =>
        
        document.querySelector("#todolist ul").insertAdjacentHTML(
            "beforeend",
            `
            <li data-index=${index}>
            <a href=# class="details" data-index=${index}>${task.name} - ${task.level} %</a>
            <p class="hide"> Description : ${task.description} </p>
            </li>
            `
        )
    )

    document
        .querySelectorAll(".details")
        .forEach((a) => a.addEventListener("click", showDetails));
}

function registerTask(e) {

    e.preventDefault();
    
   let name = document.querySelector("#nom").value; 
   let level = document.querySelector("#level").value;
   let description = document.querySelector("#description").value;

   const NEWTASK = {
       name : name,
       level : level,
       description : description
   }

   
   taskList.push(NEWTASK);
   
   TASKFORM.classList.add("hide");
   showTaskList();
}

function addNewTask() {
    
    TASKFORM.classList.remove("hide");    
}

//TODO Ajouter la fonction deleteAllTasks
function deleteAllTasks() {

}

function showDetails() {

    console.log(this.dataset.index);
    let index= this.dataset.index;
   document.querySelector('li[data-index="'+index+'"] p').classList.toggle("hide");
}

/**********
 * CODE PRINCIPAL
 */

showTaskList();

const TASKFORM = document.querySelector("#taskForm");

document.querySelector("#submit").addEventListener("click", registerTask);
document.querySelector("#addTask").addEventListener("click", addNewTask);
document.querySelector("#deleteAll").addEventListener("click", deleteAllTasks);
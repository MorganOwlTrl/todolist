"use stric";

let taskList = [];


/*********
 * FONCTIONS
 */

/**Affichage de la liste des tâches*/
function showTaskList() {

    //resset de l'UL à chaque chargement de la fonction pour éviter l'affichage en double des tâches
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

/**Enregistre la nouvelle tâche saisi dans le tableau taskList */
function registerTask(e) {

    //Empêche le rechargement de la page au click sur le bouton submit du formulaire
    e.preventDefault();
    
   let name = document.querySelector("#nom").value; 
   let level = document.querySelector("#level").value;
   let description = document.querySelector("#description").value;

   //Creation d'un objet tache
   const NEWTASK = {
       name : name,
       level : level,
       description : description
   }
   
   //Insertion de l'objet tache dans taskList
   taskList.push(NEWTASK);

   //vide les champs formulaire
   document.querySelector("#nom").value ="";
   document.querySelector("#level").value="0";
   document.querySelector("#description").value="";
   
   //Masque le formulaire
   TASKFORM.classList.add("hide");

   //Affiche la liste des tâches mis à jour
   showTaskList();
}

/**Fonction d'affichage du formulaire */
function addNewTask() {
    TASKFORM.classList.remove("hide");    
}

/**reset le tableau taskList pour éffacer toutes les tâches */
function deleteAllTasks() {
    taskList = [];
    showTaskList();

}

/** Affiche le paragraphe description au clic sur la tache */
function showDetails() {

    console.log(this.dataset.index);
    let index= this.dataset.index;
   document.querySelector('li[data-index="'+index+'"] p').classList.toggle("hide");
}

/**********
 * CODE PRINCIPAL
 */

document.addEventListener("DOMContentLoaded", function() {
showTaskList();

const TASKFORM = document.querySelector("#taskForm");

document.querySelector("#submit").addEventListener("click", registerTask);
document.querySelector("#addTask").addEventListener("click", addNewTask);
document.querySelector("#deleteAll").addEventListener("click", deleteAllTasks);
}
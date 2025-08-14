import  "./styles.css";
document.addEventListener("DOMContentLoaded",()=>{
//initial setup
const myLibrary = [];
let selectIndex = 0;
class Task{
    constructor(details,title,date,finish,priority){
        this.id = crypto.randomUUID();
        this.details = details;
        this.title = title;
        this.date = date;
        this.finish = finish;
        this.priority = priority;
    }
    toggleFinish() {
    this.finish = !this.finish;
    }
}

function renderLibrary() {
  const projects = document.getElementById('projects');
  projects.innerHTML = ""; // Clear previous display

  const content = document.getElementById('mainContent');
   content.innerHTML = ""; // Clear previous display


  myLibrary.forEach((task, index) => {
    const projTitle = document.createElement('div');
    projTitle.classList.add('projTitle');
    projTitle.dataset.id = task.id;

    projTitle.innerHTML = `<button class="projBtn">${task.title}</button>`;

    const card = document.createElement('div');
    card.classList.add('task-card');
    card.dataset.id = task.id;

    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>Priority: ${task.priority}</p>
      <p>Details: ${task.details}</p>
      <p>Date: ${task.date}</p>
      <p>Status: ${task.finish ? "Finished" : "Not Finished"}</p>
      <button class="toggle-finish">Toggle Finish</button>
      <button class="remove-task">Remove</button>`;
    

    // Toggle finish button
    card.querySelector('.toggle-finish').addEventListener('click', () => {
      task.toggleFinish();
      renderLibrary();
      saveData();
    });

    // Remove task button
    card.querySelector('.remove-task').addEventListener('click', () => {
      removeTaskById(task.id);
    });

    // Add to mainContent
    projTitle.querySelector('.projBtn').addEventListener('click',()=>{
        // addToContent(task.id,card);
        content.innerHTML = ""; // Clear previous display
        content.appendChild(card);
        selectIndex = index;
         // renderLibrary();
    });
    
    
    projects.appendChild(projTitle);
    if (index == selectIndex) content.appendChild(card);
  });
}

function removeTaskById(id) {
  const index = myLibrary.findIndex(task => task.id === id);
  if (index !== -1) {
    myLibrary.splice(index, 1);
    renderLibrary();
    saveData();
  }

}

const dialog = document.getElementById("dialogBox");
const newTaskBtn = document.getElementById("newTaskBtn");
const closeBtn = document.getElementById("closeBtn");


newTaskBtn.addEventListener("click", ()=>{
    dialog.showModal();
});
closeBtn.addEventListener("click", () => {
    dialog.close();
});

//Submit data fom input form
const form = document.getElementById("input");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const details = document.getElementById("details").value;
    const title = document.getElementById("title").value;
    const dueDate = document.getElementById("dueDate").value;
    const finish = document.getElementById("finishCheck").checked;
    const priority = document.getElementById("priority").value;

    const newTask = new Task(details,title,dueDate,finish,priority);
    
    myLibrary.push(newTask);
    console.log(myLibrary);
    renderLibrary();
    form.reset();
    dialog.close();
    selectIndex = myLibrary.length-1;
    saveData();

})
// save to local storage
function saveData(){
localStorage.setItem("myLibraryKey",JSON.stringify(myLibrary));
}

function loadLibrary(){
    const store = JSON.parse(localStorage.getItem("myLibraryKey"));
    if (store){
        myLibrary.length = 0 ; 
        store.forEach(task =>{
            let object = new Task(task.details,task.title,task.date,task.finish,task.priority);
            myLibrary.push(object);
        });
    }
}

loadLibrary();
renderLibrary();
});




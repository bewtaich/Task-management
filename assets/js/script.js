// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const rand = crypto.randomUUID();
    return rand
}

// Todo: create a function to create a task card
function createTaskCard(task) {
  const cardSkel=`<div class="card draggable">
                 <div class="card-body">
                  ${task.Title}, ${task.Date}, ${task.Desc}
                 </div>
                 </div>`;
  $('#todo-cards').prepend(cardSkel)
}


const dialog = 
$("#task-dialog-form").dialog({
autoOpen: false,
height: 400,
width: 350,
modal: true,
buttons: {
  "Add Task":handleAddTask,
  Cancel: function() {
    dialog.dialog("close");
    }
}
})



// Todo: create a function to render the task list and make cards draggable


// Todo: create a function to handle adding a new task
function handleAddTask(){
  
  const title = $('#taskTitle')
  const date = $('#taskDate')
  const desc = $('#taskDesc')
  let currenttaskid = generateTaskId();
  const task = {
    Title:title.val(),
    Date:date.val(),
    Desc:desc.val(),
    id:currenttaskid
  }

  console.log(task)
  createTaskCard(task);
}



// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker

$(document).ready(function () {

$("#add-task-button").on("click", function() {
    dialog.dialog("open");
  });
});

const form = dialog.find( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  handleAddTask();
});

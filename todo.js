const ul = document.getElementById("tasks");

//saves to storage using chrome.storage.sync.set({task},function())
function saveToStorage(tasks, callback)
{
    chrome.storage.sync.set({tasks:tasks}, function(){
        callback();
    });
}

//gets tasks from storage using sync.get()
function getFromStorage(callback)
{
    chrome.storage.sync.get(["tasks"], function(result){
        console.log(result);
        if(result && result.tasks)
        {
            callback(result.tasks)
        }
        else
        {
            callback([]);
        }
    });
}

//prints a task on index.html by spitting html
function printTask()
{
    //the getFromStorage() function gets previous task from chrome storage
    getFromStorage(function(tasks){
        let html = "";
        $("#tasks").empty();    //empties out the task array

        //prints out a new task inside <ul></ul>
        tasks.forEach(task => html = `${html}
        <li class="${task.done ? "complete" : "incomplete"}">
        <input ${task.done ? "checked" : ""} class="done" type="checkbox">
        ${task.name}
        <button class="delete">Delete</button>
        </li>`);

        ul.insertAdjacentHTML("beforeend", html);   //new task stacks on top
    });
}

printTask();

//jquery used here
//selects all the checkbox it class ".done" and changes the done value
$(document).on("click", ".done", function(){
    const that = this;
    getFromStorage(function(tasks){
        tasks[$(that).parent().index()].done = !tasks[$(that).parent().index()].done;
        console.log(tasks);

        saveToStorage(tasks, function(){
            printTask();
        })
    });
});

//jquery used here
//selects all the buttons and deletes a task when user clicks a button
$(document).on("click", ".delete", function(){
    console.log($(this).parent().index());
    getFromStorage(function(tasks){
        const that = this;
        const index = $(that).parent().index();
        tasks.splice(index, 1);
        console.log(tasks);

        saveToStorage(tasks, function(){
            printTask();
        })
    });
    printTask();
});


document.getElementById("addTask").addEventListener("click", function(){
    const val = document.getElementById("newTask").value;
    console.log(val);

    getFromStorage(function(tasks){
        tasks.push({
            name: val,
            done: false
        })

        saveToStorage(tasks, function(){
            printTask();
        })
    });
    document.getElementById("newTask").value = "";
});

$("#todo").on("click", function(){
    $("#card").fadeToggle();
});

$("#card").fadeToggle();

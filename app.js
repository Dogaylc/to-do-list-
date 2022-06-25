var tasks=[]

function addTask() {
    let textbox=document.getElementById('textBox')
    let tasklist=document.getElementById('tasks')
    if(textbox.value.length == 0) return;
    tasks.push(textbox.value)
    tasklist.innerHTML += "\n" + "<li id='task-"+ tasks.length +"' onclick='deleteTask("+ tasks.length +")'><u>"+textbox.value+"</u></li>"
}

function deleteTask(taskid){ 
    let selectedTask=document.getElementById('task-'+taskid)
    selectedTask.remove()
}
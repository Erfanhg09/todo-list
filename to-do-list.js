

let input = document.getElementById("taskInput")
let button = document.getElementById('addTaskBtn')
let ul = document.getElementById('task')

function addtask() {
    const tasktext = input.value.trim();
    if (tasktext === "") {
        alert('Please enter text');
        return;
    }

    const creat = document.createElement('span');
    creat.innerText = tasktext;
    input.value = "";
    creat.addEventListener("click",()=>{
        creat.classList.toggle("done")
    })

    const delet = document.createElement("button");
    delet.innerText = "❌";

    
    delet.addEventListener("click", () => {
        ul.removeChild(creat);
    });

    creat.appendChild(delet);
    ul.appendChild(creat);
}

button.addEventListener("click", ()=>{
    addtask()
})

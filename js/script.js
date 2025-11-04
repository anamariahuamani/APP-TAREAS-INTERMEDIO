const input = document.querySelector('form input[type="text"]');
const userInput = document.querySelector("#inputUsuario");
const lista = document.querySelector("#lista");
let idCounter = 1;
const stats = document.querySelector("#stats");

userInput.addEventListener("submit", (e) => {
    e.preventDefault()
    agregarTarea()
})
let  agregarTarea = () => {
    idCounter ++;
    const tarea = input.value;
    if(tarea === ""){
        alert("Por favor ingresa una tarea");
        return;
    };
    lista.innerHTML += `
        <div class="contenedor-tarea" id="${idCounter}">
            <label>
                <input type="checkbox">
                ${tarea}
            </label>
            <img src="./assets/image.png" alt="eliminar" class="btnEliminar">
        </div>
    `;
    input.value = "";
    updateStats();
}
lista.addEventListener("click", (e) => {
    if(e.srcElement.nodeName === "IMG"){
        deleteTask(e.srcElement.parentElement.id);
    } else if(e.srcElement.nodeName === "INPUT"){
        updateStats();
    } 

})
let updateStats = () => {
    stats.innerText = `Tareas: ${lista.children.length} Tareas Completadas: ${lista.querySelectorAll('input[type="checkbox"]:checked').length}`;
}
let deleteTask = (id) => {
    let task = document.getElementById(id);
    task.remove();
    updateStats();
}


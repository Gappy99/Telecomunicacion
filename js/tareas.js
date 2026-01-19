function agregarTarea() {
    let texto = document.getElementById("tarea").value;
    let prioridad = document.getElementById("prioridad").value;

    if (texto === "") {
        alert("Escribe una tarea");
        return;
    }

    let li = document.createElement("li");
    li.className = "tarea " + prioridad;

    li.textContent = texto + " - " + prioridad + " ";

    // BOTÓN EDITAR
    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-editar";

    btnEditar.onclick = function () {
        let nuevoTexto = prompt("Editar tarea:", texto);
        if (nuevoTexto !== null && nuevoTexto !== "") {
            texto = nuevoTexto;
            li.textContent = texto + " - " + prioridad + " ";
            li.appendChild(btnEditar);
            li.appendChild(btnEliminar);
        }
    };

    // BOTÓN ELIMINAR
    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.className = "btn-eliminar";

    btnEliminar.onclick = function () {
        li.remove();
    };

    li.appendChild(btnEditar);
    li.appendChild(btnEliminar);

    document.getElementById("lista").appendChild(li);
    document.getElementById("tarea").value = "";
}
document.addEventListener('DOMContentLoaded', () => {

    let rutinas = [
        { nombre: "Día de pecho", descripcion: "Ejercicios para fortalecer el pecho" },
        { nombre: "Día de piernas", descripcion: "Ejercicios para fortalecer las piernas" }
    ];
    function renderRoutineList() {
        const routineList = document.getElementById('routine-list');
        routineList.innerHTML = '';

        rutinas.forEach(rutina => {
            const listItem = document.createElement('li');
            listItem.textContent = rutina.nombre + ' - ' + rutina.descripcion;
            routineList.appendChild(listItem);
        });
    }
    function addRoutine() {
        const rutinaName = document.getElementById('routine-name').value;
        const rutinaDescription = document.getElementById('routine-description').value;
        rutinas.push({ nombre: rutinaName, descripcion: rutinaDescription });
        renderRoutineList();
    }

});

    function addRoutine() {
        const rutinaName = document.getElementById('routine-name').value;
        const rutinaDescription = document.getElementById('routine-description').value;

        if (!rutinaName || !rutinaDescription) {
            alert('Por favor, llena todos los campos');
            return;
        }

        rutinas.push({ nombre: rutinaName, descripcion: rutinaDescription });
        renderRoutineList();
    }

    function editRoutine(index) {
        const rutina = rutinas[index];
    }

    function deleteRoutine(index) {
        if (confirm('¿Estás seguro de eliminar esta rutina?')) {
            rutinas.splice(index, 1);
            renderRoutineList();
        }
    }

    function searchRoutines(query) {
        const resultados = rutinas.filter(rutina => rutina.nombre.toLowerCase().includes(query.toLowerCase()));
    }

    // Event listeners
    const addRoutineForm = document.getElementById('add-routine-form');
    addRoutineForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addRoutine();
    });

    renderRoutineList();
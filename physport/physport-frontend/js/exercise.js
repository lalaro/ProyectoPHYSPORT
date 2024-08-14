document.addEventListener('DOMContentLoaded', () => {
    let rutinas = JSON.parse(localStorage.getItem('rutinas')) || [
        { nombre: "Día de pecho", descripcion: "Ejercicios para fortalecer el pecho" },
        { nombre: "Día de piernas", descripcion: "Ejercicios para fortalecer las piernas" }
    ];

    function renderRoutineList() {
        const routineList = document.getElementById('routine-list');
        routineList.innerHTML = '';

        rutinas.forEach((rutina, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${rutina.nombre} - ${rutina.descripcion}`;
            routineList.appendChild(listItem);

            // Agregar botón de eliminar para cada rutina
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => deleteRoutine(index));
            listItem.appendChild(deleteButton);
        });
    }

    function saveRoutines() {
        localStorage.setItem('rutinas', JSON.stringify(rutinas));
    }

    function addRoutine() {
        const rutinaName = document.getElementById('routine-name').value;
        const rutinaDescription = document.getElementById('routine-description').value;

        if (!rutinaName || !rutinaDescription) {
            alert('Por favor, llena todos los campos');
            return;
        }

        rutinas.push({ nombre: rutinaName, descripcion: rutinaDescription });
        saveRoutines();
        renderRoutineList();
    }

    function deleteRoutine(index) {
        if (confirm('¿Estás seguro de eliminar esta rutina?')) {
            rutinas.splice(index, 1);
            saveRoutines();
            renderRoutineList();
        }
    }

    const addRoutineForm = document.getElementById('add-routine-form');
    addRoutineForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addRoutine();
    });

    renderRoutineList();
});
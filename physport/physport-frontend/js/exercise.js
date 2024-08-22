class RoutineManager {
    constructor() {
        this.routines = JSON.parse(localStorage.getItem('routines')) || this.getDefaultRoutines();
        this.routineList = document.getElementById('routine-list');
        this.addRoutineForm = document.getElementById('add-routine-form');
        this.continueButton = document.querySelector('.continue-btn');

        this.initialize();
    }

    getDefaultRoutines() {
        return [
            { name: "Día de pecho", description: "Ejercicios para fortalecer el pecho" },
            { name: "Día de piernas", description: "Ejercicios para fortalecer las piernas" },
            { name: "Día de brazos", description: "Ejercicios para fortalecer los bíceps y tríceps" },
            { name: "Día de abdomen", description: "Ejercicios para fortalecer el core" },
            { name: "Día de cardio", description: "Ejercicios para mejorar la resistencia cardiovascular" },
            { name: "Día de estiramientos", description: "Ejercicios para aumentar la flexibilidad y reducir el riesgo de lesiones" },
            { name: "Día de full body", description: "Ejercicios para trabajar todo el cuerpo de manera equilibrada" },
        ];
    }

    initialize() {
        this.renderRoutineList();

        this.addRoutineForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addRoutine();
        });

        this.continueButton.addEventListener('click', () => {
            this.navigateToNextPage();
        });
    }

    renderRoutineList() {
        this.routineList.innerHTML = '';

        this.routines.forEach((routine, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <p>${routine.name} - ${routine.description}</p>
                <button class="update-btn">Actualizar</button>
                <button class="delete-btn">Eliminar</button>
            `;
            this.routineList.appendChild(listItem);

            const updateButton = listItem.querySelector('.update-btn');
            updateButton.addEventListener('click', () => this.editRoutine(index));

            const deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', () => this.deleteRoutine(index));
        });
    }

    saveRoutines() {
        localStorage.setItem('routines', JSON.stringify(this.routines));
    }

    addRoutine() {
        const routineName = document.getElementById('routine-name').value;
        const routineDescription = document.getElementById('routine-description').value;

        if (!routineName || !routineDescription) {
            alert('No se agregó ninguna rutina');
            return;
        }

        this.routines.push({ name: routineName, description: routineDescription });
        this.saveRoutines();
        this.renderRoutineList();
    }

    deleteRoutine(index) {
        if (confirm('¿Estás segura de que quieres eliminar esta rutina?')) {
            this.routines.splice(index, 1);
            this.saveRoutines();
            this.renderRoutineList();
        }
    }

    editRoutine(index) {
        const newName = prompt('Ingresa un nuevo nombre:', this.routines[index].name);
        const newDescription = prompt('Ingresa una nueva descripción:', this.routines[index].description);

        if (newName && newDescription) {
            this.routines[index] = { name: newName, description: newDescription };
            this.saveRoutines();
            this.renderRoutineList();
        }
    }

    navigateToNextPage() {
        window.location.href = 'Food.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new RoutineManager();
});

document.addEventListener('DOMContentLoaded', () => {
    let routines = JSON.parse(localStorage.getItem('routines')) || [
        { name: "Día de pecho", description: "Ejercicios para fortalecer el pecho" },
        { name: "Día de piernas", description: "Ejercicios para fortalecer las piernas" }
    ];

    function renderRoutineList() {
        const routineList = document.getElementById('routine-list');
        routineList.innerHTML = '';

        routines.forEach((routine, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <p>${routine.name} - ${routine.description}</p>
                <button class="update-btn">Update</button>
                <button class="delete-btn">Delete</button>
            `;
            routineList.appendChild(listItem);

            // Add event listeners for the buttons
            const updateButton = listItem.querySelector('.update-btn');
            updateButton.addEventListener('click', () => editRoutine(index));

            const deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', () => deleteRoutine(index));
        });
    }

    function saveRoutines() {
        localStorage.setItem('routines', JSON.stringify(routines));
    }

    function addRoutine() {
        const routineName = document.getElementById('routine-name').value;
        const routineDescription = document.getElementById('routine-description').value;

        if (!routineName || !routineDescription) {
            alert('Please fill in all fields');
            return;
        }

        routines.push({ name: routineName, description: routineDescription });
        saveRoutines();
        renderRoutineList();
    }

    function deleteRoutine(index) {
        if (confirm('Are you sure you want to delete this routine?')) {
            routines.splice(index, 1);
            saveRoutines();
            renderRoutineList();
        }
    }

    function editRoutine(index) {
        const newName = prompt('Enter new name:', routines[index].name);
        const newDescription = prompt('Enter new description:', routines[index].description);

        if (newName && newDescription) {
            routines[index] = { name: newName, description: newDescription };
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

    const continueButton = document.querySelector('.continue-btn');
    continueButton.addEventListener('click', () => {
        window.location.href = 'target-page.html'; // Replace with the URL of the target page
    });
});

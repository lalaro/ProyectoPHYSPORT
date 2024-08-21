document.addEventListener('DOMContentLoaded', () => {
    let meals = JSON.parse(localStorage.getItem('meals')) || [
        { name: "Desayuno", description: "Huevos revueltos con tostadas" },
        { name: "Almuerzo", description: "Pollo a la parrilla con ensalada" },
        { name: "Cena", description: "Salmón al horno con verduras" },
        { name: "Snack", description: "Fruta fresca y yogur" },
        { name: "Postre", description: "Tarta de manzana casera" },
        { name: "Bebida", description: "Batido de proteínas con plátano" },
        { name: "Merienda", description: "Sándwich de pavo y aguacate" },
    ];

    function renderMealList() {
        const mealList = document.getElementById('meal-list');
        mealList.innerHTML = '';

        meals.forEach((meal, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <p>${meal.name} - ${meal.description}</p>
                <button class="update-btn">Actualizar</button>
                <button class="delete-btn">Eliminar</button>
            `;
            mealList.appendChild(listItem);

            // Add event listeners for the buttons
            const updateButton = listItem.querySelector('.update-btn');
            updateButton.addEventListener('click', () => editMeal(index));

            const deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', () => deleteMeal(index));
        });
    }

    function saveMeals() {
        localStorage.setItem('meals', JSON.stringify(meals));
    }

    function addMeal() {
        const mealName = document.getElementById('meal-name').value;
        const mealDescription = document.getElementById('meal-description').value;

        if (!mealName || !mealDescription) {
            alert('No se agrego ninguna comida');
            return;
        }

        meals.push({ name: mealName, description: mealDescription });
        saveMeals();
        renderMealList();
    }

    function deleteMeal(index) {
        if (confirm('Are you sure you want to delete this meal?')) {
            meals.splice(index, 1);
            saveMeals();
            renderMealList();
        }
    }

    function editMeal(index) {
        const newName = prompt('Enter new name:', meals[index].name);
        const newDescription = prompt('Enter new description:', meals[index].description);

        if (newName && newDescription) {
            meals[index] = { name: newName, description: newDescription };
            saveMeals();
            renderMealList();
        }
    }

    const addMealForm = document.getElementById('add-meal-form');
    addMealForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addMeal();
    });

    renderMealList();

    const continueButton = document.querySelector('.continue-btn');
    continueButton.addEventListener('click', () => {
        window.location.href = 'Profile.html'; 
    });
});

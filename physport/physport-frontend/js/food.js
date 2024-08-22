class MealManager {
    constructor() {
        this.meals = JSON.parse(localStorage.getItem('meals')) || this.getDefaultMeals();
        this.mealList = document.getElementById('meal-list');
        this.addMealForm = document.getElementById('add-meal-form');
        this.continueButton = document.querySelector('.continue-btn');

        this.initialize();
    }

    getDefaultMeals() {
        return [
            { name: "Desayuno", description: "Huevos revueltos con tostadas" },
            { name: "Almuerzo", description: "Pollo a la parrilla con ensalada" },
            { name: "Cena", description: "Salmón al horno con verduras" },
            { name: "Snack", description: "Fruta fresca y yogur" },
            { name: "Postre", description: "Tarta de manzana casera" },
            { name: "Bebida", description: "Batido de proteínas con plátano" },
            { name: "Merienda", description: "Sándwich de pavo y aguacate" },
        ];
    }

    initialize() {
        this.renderMealList();

        this.addMealForm.addEventListener('submit', (event) => {
            event.preventDefault();
            this.addMeal();
        });

        this.continueButton.addEventListener('click', () => {
            this.navigateToNextPage();
        });
    }

    renderMealList() {
        this.mealList.innerHTML = '';

        this.meals.forEach((meal, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <p>${meal.name} - ${meal.description}</p>
                <button class="update-btn">Actualizar</button>
                <button class="delete-btn">Eliminar</button>
            `;
            this.mealList.appendChild(listItem);

            const updateButton = listItem.querySelector('.update-btn');
            updateButton.addEventListener('click', () => this.editMeal(index));

            const deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', () => this.deleteMeal(index));
        });
    }

    saveMeals() {
        localStorage.setItem('meals', JSON.stringify(this.meals));
    }

    addMeal() {
        const mealName = document.getElementById('meal-name').value;
        const mealDescription = document.getElementById('meal-description').value;

        if (!mealName || !mealDescription) {
            alert('No se agregó ninguna comida');
            return;
        }

        this.meals.push({ name: mealName, description: mealDescription });
        this.saveMeals();
        this.renderMealList();
    }

    deleteMeal(index) {
        if (confirm('¿Estás segura de que quieres eliminar esta comida?')) {
            this.meals.splice(index, 1);
            this.saveMeals();
            this.renderMealList();
        }
    }

    editMeal(index) {
        const newName = prompt('Ingresa un nuevo nombre:', this.meals[index].name);
        const newDescription = prompt('Ingresa una nueva descripción:', this.meals[index].description);

        if (newName && newDescription) {
            this.meals[index] = { name: newName, description: newDescription };
            this.saveMeals();
            this.renderMealList();
        }
    }

    navigateToNextPage() {
        window.location.href = 'Profile.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MealManager();
});

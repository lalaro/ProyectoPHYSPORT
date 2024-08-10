class User {
    constructor(id, name, email, password, age, gender, weight, height, goals, preferences) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.age = age;
        this.gender = gender;
        this.weight = weight;
        this.height = height;
        this.goals = goals;
        this.preferences = preferences;
    }

    toString() {
        return `User(id=${this.id}, name=${this.name}, email=${this.email}, age=${this.age}, gender=${this.gender}, weight=${this.weight}, height=${this.height}, goals=${this.goals}, preferences=${this.preferences})`;
    }
}

// Ejemplo de uso
const user = new User("123", "John Doe", "john@example.com", "password123", 30, "Male", 75, 180, 2, "Vegetarian");
console.log(user.toString());


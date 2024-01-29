var person = {
    name: "Isht Chawla",
    age: 22,
    occupation: "Software Engineer"
};

// Function to print person's properties
function printPersonDetails(person) {
    for (var property in person) {
        if (person.hasOwnProperty(property)) {
            console.log(property + ": " + person[property]);
        }
    }
}

// Call the function with the person object
printPersonDetails(person);
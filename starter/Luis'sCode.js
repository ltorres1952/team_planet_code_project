// Import the prompt-sync library to handle user input
const prompt = require("./prompt-sync")();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require("./gravityFactors");
// Define a function to show user factors based on input type and value
function calculateValue(input) {
    // Initialize an object to hold the results
    let results = {};
    // Declare a variable to hold the unit of measurement
    let unit = userUnit;
    // Iterate over each item in the gravityFactors object
    for (let planet in gravityFactors) {
        results[planet] = parseFloat((input * gravityFactors[planet]).toFixed(2));
    }
    switch (unit) {
        case "kg":
            for (let planet in results) {
                console.log(`Your weight on ${planet} is: ${results[planet]}kg`);
            }
    }
    // Calculate the factor multiplied by the input value and round it to two decimals
    // Switch case to determine the measurement unit based on factor type
    // Iterate over the results and log each one

}


function userInput() {
    console.log("Enter your type of unit: ");
    const userUnit = prompt(">");
    conole.log(`Enter value of ${userUnit}`);
    const userValue = prompt(">");
}
// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally

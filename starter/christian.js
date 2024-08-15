// Import the prompt-sync library to handle user input

// Import the gravityFactors module which contains factors for different planets

// Define a function to show user factors based on input type and value
// Initialize an object to hold the results
// Declare a variable to hold the unit of measurement
// Iterate over each item in the gravityFactors object
// Calculate the factor multiplied by the input value and round it to two decimals
// Switch case to determine the measurement unit based on factor type
// Iterate over the results and log each one

// Define a function to get user inputs for factor type and value
// Prompt the user to enter the type of factor they want to calculate
// Prompt the user to enter the numerical value of the factor
// Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally'

// 
const prompt = require("prompt-sync")();
const gravityFactors = require("./utils/earthGravityFactors.js");
const alienGravityFactors = require("./utils/alienGravityFactors.js");

function showUserFactors(planetType, factorType, factorUnit) {

    const factors = {};
    let measurement;

    switch (planetType) {
        case "earth":
            planetType = gravityFactors;
            break;
        case "alien":
            planetType = alienGravityFactors;
            break;
        default:

    }

    for (let planet in planetType) {
        factors[planet] = parseFloat((factorUnit * planetType[planet]).toFixed(2));

    }

    switch (factorType) {
        case "jump":
            measurement = "cm"

            break;
        case "weight":
            measurement = "kg"
            break;
        case "aura":
            measurement = "aura"
            break;
        default:
            measurement = "units";
    }
    for (planet in factors) {
        console.log(`your ${factorType} on ${planet} is: ${factors[planet]} ${measurement}`)
    }

};

function getUserInput() {
    console.log(`what are you measuring? Enter: jump, weight and aura`);
    const factorType = prompt(">");
    console.log(`Enter the value of your ${factorType} on earth`);
    const userValue = prompt(">");
    showUserFactors(factorType, userValue)

}
global.getUserIput = getUserInput;
global.showUserFactors = showUserFactors;
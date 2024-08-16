const prompt = require("prompt-sync")();
const gravityFactors = require("./utils/earthGravityFactors");
const alienGravityFactors = require("./utils/alienGravityFactors");
const factorTypes = ['jump', 'weight'];


function calculateValue(planetType, factorType, factorUnit) {
    const factors = {};
    let measurement;
    let planetGravity = {};
    switch (planetType) {
        case 'earth':
            for (let planet in gravityFactors) {
                planetGravity[planet] = gravityFactors[planet];
            }
            break;
        case 'alien':
            for (let planet in alienGravityFactors) {
                planetGravity[planet] = alienGravityFactors[planet];
            }
            break;
    }




    // trim it, match case, break if input matches item in array

    switch (factorType) {
        case 'jump':
            measurement = 'cm';
            for (let planet in planetGravity) {
                factors[planet] = parseFloat((factorUnit / planetGravity[planet]).toFixed(2));
            }
            break;
        case 'weight':
            measurement = 'kg';
            for (let planet in planetGravity) {
                factors[planet] = parseFloat((factorUnit * planetGravity[planet]).toFixed(2));
            }
            break;
        default:
            measurement = 'units';
            break;
    }
    for (let planet in factors) {
        console.log(`Your ${factorType} on ${planet} is: ${factors[planet]}${measurement}`);
    }
}

function userInput() {
    console.log("What do you want to measure('weight' or 'jump'): ");
    let userUnit = prompt(">");
    // console.log(`Enter system of measurement('imperial' or 'metric'`);
    // let userSystem = prompt(">");
    // console.log(`Enter value of ${userUnit}`);
    // let userMeasurement = prompt(">");
    console.log(`Enter value of ${userUnit}`);
    let userValue = prompt(">");
    for (let i = 0; i < factorTypes.length - 1; i++) {
        parseFloat(userValue);
        !isNaN(userValue);
        userValue.trim();

        while (true) {
            if (!isNaN(userValue) == true || userValue == factorTypes[i]) {
                break;
            } else {
                console.error("Not that");
            }
        }
    }
    console.log("What planets do you want to measure on?('alien', 'earth')");
    let planetType = prompt(">")
    calculateValue(planetType, userUnit, userValue);
}
global.calculateValue = calculateValue;
global.userInput = userInput;
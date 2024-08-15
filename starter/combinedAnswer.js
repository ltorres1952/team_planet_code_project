const prompt = require("prompt-sync")();
const gravityFactors = require("./utils/earthGravityFactors");
const alienGravityFactors = require("./utils/alienGravityFactors");

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
    while (true) {
        if(factorType = "jump"||"weight" ) {
			break;
		}
		else{
			console.error("you are :0")
		}
    }
    for (let planet in factors) {
        console.log(`Your ${factorType} on ${planet} is: ${factors[planet]}${measurement}`);
    }
}

function userInput() {
    console.log("What do you want to measure('weight' or 'jump'): ");
    let userUnit = prompt(">");
    console.log(`Enter value of ${userUnit}`);
    let userValue = prompt(">");
    console.log("What planets do you want to measure on?('alien', 'earth')");
    let planetType = prompt(">")
    calculateValue(planetType, userUnit, userValue);
}
global.calculateValue = calculateValue;
global.userInput = userInput;
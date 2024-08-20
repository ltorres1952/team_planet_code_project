const prompt = require("prompt-sync")();
const gravityFactors = require("./utils/earthGravityFactors");
const alienGravityFactors = require("./utils/alienGravityFactors");
const validWords = ['jump', 'weight'];


function calculateValue(planetType, factorType, userMeasurement, factorUnit) {
    let factors = {};
    let measurement;
    let planetGravity = {};
    console.log(factorType);
    // trim it, match case, break if input matches item in array

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
    if (factorType == 'jump') {
        if (userMeasurement == 1) {
            measurement = 'in';
        } else if (userMeasurement == 2) {
            measurement = 'cm';
        };
        for (let planet in planetGravity) {
            factors[planet] = parseFloat((factorUnit / planetGravity[planet]).toFixed(2));
        }
    }
    else if (factorType == 'weight') {
        if (userMeasurement == 1) {
            measurement = 'lb';
        } else if (userMeasurement == 2) {
            measurement = 'kg';
        }
        for (let planet in planetGravity) {
            factors[planet] = parseFloat((factorUnit * planetGravity[planet]).toFixed(2));
        }
    }
    else if (factorType == 'pushups') {
        if (userMeasurement == 1) {
            measurement = 'in';
        } else if (userMeasurement == 2) {
            measurement = 'cm';
        }
        for (let planet in planetGravity) {
            factors[planet] = parseFloat((factorUnit / planetGravity[planet]).toFixed(2));
        }
    }
    console.log(factors);
    for (let planet in factors) {
        console.log(`Your ${factorType} on ${planet} is: ${factors[planet]}${measurement}`);
    }

 
}

// parseFloat(userValue);
// !isNaN(userValue);
function userInput() {
    let factorType;
    while (true) {
        const validTypes = ["jump", "weight", "pushups"];
        let isMatch = false;
        console.log("What do you want to measure? ('jump' or 'weight' or 'pushups')");
        factorType = prompt(">").trim().toLowerCase();
        for (let i = 0; i < validTypes.length; i++) {
            if (factorType === validTypes[i]) {
                isMatch = true;
                break;
            }
        }
        if (isMatch) {
            break;
        } else {
            console.error(`You entered ${factorType}. Please enter the prompt correctly`);
        }
    }
    console.log(`What measurement system are you using? (1 for metric, 2 for imperial)`)
    let userMeasurement = prompt(">");
   
    console.log(`Enter value of `);
    let factorUnit = prompt(">");
    console.log("What planets do you want to measure on?('alien', 'earth')");
    let planetType = prompt(">");
    calculateValue(planetType, factorType, userMeasurement, factorUnit);
}
global.calculateValue = calculateValue;
global.userInput = userInput;
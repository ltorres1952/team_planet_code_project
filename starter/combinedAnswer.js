const prompt = require("prompt-sync")();
const gravityFactors = require("./utils/earthGravityFactors");
const alienGravityFactors = require("./utils/alienGravityFactors");
const validWords = ['jump', 'weight'];


function calculateValue(planetType, factorType, userMeasurement, factorUnit) {
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
            if (userMeasurement == 'imperial') {
                measurement = 'in'
            } else if(userMeasurement == 'metric'){
                measurement = 'cm'
            }
            for (let planet in planetGravity) {
                factors[planet] = parseFloat((factorUnit / planetGravity[planet]).toFixed(2));
            }
            break;
        case 'weight':
            if (userMeasurement == 'imperial') {
                measurement = 'lb'
            } else if (userMeasurement == 'metric') {
                measurement = 'kg'
            }
            for (let planet in planetGravity) {
                factors[planet] = parseFloat((factorUnit * planetGravity[planet]).toFixed(2));
            }
            break;
        case 'pushups':
            if (userMeasurement == 'imperial') {
                measurement = 'in'
            } else if (userMeasurement == 'metric') {
                measurement = 'cm'
            }
            for (let planet in planetGravity) {
                factors[planet] = parseFloat((factorUnit / planetGravity[planet]).toFixed(2));
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
// parseFloat(userValue);
// !isNaN(userValue);
function userInput() {
    // console.log(`Enter system of measurement('imperial' or 'metric'`);
    // let userSystem = prompt(">");
    // console.log(`Enter value of ${userUnit}`);
    // let userMeasurement = prompt(">");
    let isMatch;
    console.log("What do you want to measure('weight' or 'jump' or 'pushups'): ");
    let userUnit = prompt(">");
    // while (true) {
    //     let userUnit = prompt(">");
    //     userUnit = userUnit.trim().toLowerCase();
    //     validWords.forEach((item) => { 
    //         if (item == userUnit) {
                
    //         }
            
    //     })

       
    // }
    
    console.log(`What measurement system are you using?('metric' or 'imperial')`)
    let userMeasurement = prompt(">");
    console.log(`Enter value of ${userUnit}`);
    let userValue = prompt(">");
    console.log("What planets do you want to measure on?('alien', 'earth')");
    let planetType = prompt(">");
    calculateValue(planetType, userUnit, userMeasurement, userValue);
}
global.calculateValue = calculateValue;
global.userInput = userInput;
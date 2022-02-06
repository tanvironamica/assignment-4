// problem 1:

function anaToVori(vori) {
    var vori = vori * 16;
    return vori;
}
var gold = anaToVori(3);


// problem 2: 

function pandaCost(singaraQuantity, somucaQuantity, jelapiQuantity) {
    const perSingaraFood = 7;
    const perSomucaFood = 10;
    const perJelapiFood = 15;
    // food calculation 
    const singaraFoodQuantity = singaraQuantity * perSingaraFood;

    const somucaFoodQuantity = somucaQuantity * perSomucaFood;
    const jelapiFoodQuantity = jelapiQuantity * perJelapiFood;
    // adding all food quantity  
    const totalFood = singaraFoodQuantity + somucaFoodQuantity + jelapiFoodQuantity;
    return totalFood;
}
const firstOption = pandaCost(1, 0, 0);

// problem 3: 

function picnicBudget(price) {
    const picnicPlaceFirstPeople = 5000;
    const picnicPlaceSecondPeople = 4000;
    const picnicPlaceThirdPeople = 3000;
    if (price <= 100) {
        const budget = price * picnicPlaceFirstPeople;
        return budget;
    } else if (price <= 200) {
        const firstPicnicPeople = 100 * picnicPlaceFirstPeople;
        const picnicPeople = price - 100;
        const secondPicnicPeople = picnicPeople * picnicPlaceSecondPeople;
        const totalPeople = firstPicnicPeople + secondPicnicPeople;
        return totalPeople;
    } else {
        const firstPicnicPeople = 100 * picnicPlaceFirstPeople;
        const secondPicnicPeople = 100 * picnicPlaceSecondPeople;
        const picnicPeople = price - 200;
        const thirdPicnicPeople = picnicPeople * picnicPlaceThirdPeople;
        const totalPeople = firstPicnicPeople + secondPicnicPeople + thirdPicnicPeople;
        return totalPeople;
    }
}
const picnic = picnicBudget(300);


// problem 4:

const names = ['abul', 'babul', 'cabu', 'kabul'];

function oddFriend(names) {
    const odd = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];

        if (names[i].length % 2 != 0) {
            return element;
        }
    }
    return odd;
}
const oddNames = oddFriend(names);
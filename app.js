
//create variables
let destinationOptions = ["San Jose, CA", "Las Vegas, NV", "San Francisco, CA", "Seattle, WA"];
let restaurantOptions = ["Apple Bees", "Red Lobster", "Steakhouse"];
let transportationOptions = ["Fly", "Taxi", "Walking", "Train", "Uber"];
let entertainmentOptions = ["Cruise Ship", "Comedy Show", "Club", "Shooting Range"];

function randomSelection(arrayOptions) {
    return arrayOptions[Math.floor(Math.random() * arrayOptions.length)];
}

function run() {
    let selectedDestination = randomSelection(destinationOptions);
    let selectedRestaurant = randomSelection(restaurantOptions);
    let selectedTransportation = randomSelection(transportationOptions);
    let selectedEntertainment = randomSelection(entertainmentOptions);

    createList('destinationOptionsDiv', destinationOptions, selectedDestination)
    createList('restaurantOptionsDiv', restaurantOptions, selectedRestaurant)
    createList('selectedTransportationDiv', transportationOptions, selectedTransportation)
    createList('selectedEntertainmentDiv', entertainmentOptions, selectedEntertainment)
}

function createList(divName, arrayOptions, selected) {

    var str = '<form name="form">';

    arrayOptions.forEach(function (array, i) {
        let uniqueIdentifier = divName + i;
        if (selected == array) {
            str += `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${divName}" id="${uniqueIdentifier}" value="${array}" checked>
                    <label class="form-check-label" for="${uniqueIdentifier}"> ${array} </label>
                </div>
            `;
        } else {
            str += `
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="${divName}" id="${uniqueIdentifier}" value="${array}">
                    <label class="form-check-label" for="${uniqueIdentifier}"> ${array} </label>
                </div>
            `;
        }
    });

    str += '</form>';
    document.getElementById(divName).innerHTML = str;
    return str;
}


function submit() {
    let userSelectedDestination = 'Destination: ' + $("input:radio[name=destinationOptionsDiv]:checked").val();
    let userSelectedResturaunt = 'Resturaunt: ' + $("input:radio[name=restaurantOptionsDiv]:checked").val();
    let userSelectedTransportation = 'Transportation: ' + $("input:radio[name=selectedTransportationDiv]:checked").val();
    let userSelectedEntertainment = 'Entertainment: ' + $("input:radio[name=selectedEntertainmentDiv]:checked").val();

    let message = `
        <div class="card">
            <div class="card-body">
            <h4 class="card-title">Day Trip Details</h4>
                <ul>
                    <li>${userSelectedDestination}</li>
                    <li>${userSelectedResturaunt}</li>
                    <li>${userSelectedTransportation}</li>
                    <li>${userSelectedEntertainment}</li>
                </ul>
            </div>
            <div class="card-footer">Cost: Free!</div>
        </div>
    `
    console.log('Submission')
    console.log(userSelectedDestination)
    console.log(userSelectedResturaunt)
    console.log(userSelectedTransportation)
    console.log(userSelectedEntertainment)

    document.getElementById('dayTripResults').innerHTML = message;
}


run();
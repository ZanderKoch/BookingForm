/**
 * @file script for a webapp that lets users book rooms and calculates prices
 * @author Zander Koch
 * @version 1.0
 */

////////////////
//declarations//
////////////////
/**@type {Number} */
let dailyRoomCost;

/**@type {Element} */
let formElem

/////////////
//functions//
/////////////

/**
 * get the daily cost of the selected room type.
 * enable or disable relevant elements
 * @returns price of currently selected room
 * @version 1.0
 */
//I'm aware this doesn't follow SRP but i don't think it's worth writing two 
//functions in such a small project
function checkRoomSelect(){
    if(formElem.roomType[0].checked){
        formElem.persons.disabled = true;
        formElem.addition[2].disabled = false;
        dailyRoomCost = formElem.roomType.value.split(",")[1];
    }
    else if(formElem.roomType[1].checked){
        formElem.persons.disabled = true;
        formElem.addition[2].disabled = false;
        dailyRoomCost = formElem.roomType.value.split(",")[1];
    }
    else if(formElem.roomType[2].checked){
        formElem.persons.disabled = false;
        formElem.addition[2].disabled = true;
        formElem.addition[2].checked = false;
        dailyRoomCost = parseInt(formElem.roomType.value.split(",")[1]);
    }
    console.log("dailyRoomCost: " + dailyRoomCost) //debug
}

/**
 * main entry point for the script
 */
function main(){
    //initializing reference to form
    formElem = document.querySelector("#booking");
    //initialising reference to 
    let spnTotalCost = document.querySelector("#totalCost");

    //adding event listeners
    for(element of formElem.roomType){
        console.log(element) //debug
        addListener(element, "click", checkRoomSelect);
    }
}

main();
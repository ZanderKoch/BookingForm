/**
 * @file script for a webapp that lets users book rooms and calculates prices
 * @author Zander Koch
 * @version 1.0
 */

////////////////
//declarations//
////////////////
/**@type {Element} */
let formElem;
/**@type {Element} */
let spnTotalCost;


/////////////
//functions//
/////////////

/***
 * validates the entered campaign code
 * @version 1.0
 */
function validateCampaignCode(){

}

/**
 * checks if the user selected a family room and updates form appropriatley
 * @version 1.0
 */
function checkIfFamilyRoom(){
    if(formElem.roomType[2].checked == true){
        formElem.persons.disabled = false;
        formElem.persons.parentNode.style.color = "#000"
        
        formElem.addition[2].disabled = true;
        formElem.addition[2].checked = false;
        formElem.addition[2].parentNode.style.color = "#999"
    }
    else{
        formElem.persons.disabled = true;
        formElem.persons.parentNode.style.color = "#999"

        formElem.addition[2].disabled = false;
        formElem.addition[2].parentNode.style.color = "#000"
    }
}

/**
 * calculates the total cost of a planned stay at the hotel and displays it
 * @version 1.0
 */
function calculateTotalCost(){
    let dailyRoomCost = 0;
    for(room of formElem.roomType){
        if (room.checked == true) {
            console.log(room);
            dailyRoomCost = parseInt(room.value.split(",")[1]);
        }
    }
    
    let dailyExtrasCost = 0;
    for(extra of formElem.addition){
        if(extra.checked){
            dailyExtrasCost += parseInt(extra.value.split(",")[1]);
        }
    }

    let stayDuration = parseInt(formElem.nights.value);

    spnTotalCost.innerHTML = (dailyExtrasCost + dailyRoomCost) * stayDuration;
}

/**
 * main entry point for the script
 */
function main(){
    //initializing reference to form
    formElem = document.querySelector("#booking");
    //initialising reference to 
    spnTotalCost = document.querySelector("#totalCost");

    //adding event listeners
    for(element of formElem.roomType){
        addListener(element, "click", checkIfFamilyRoom);
    }
    for(element of formElem.addition){
        addListener(element, "click", calculateTotalCost);
    }
    addListener(formElem.nights, "change", calculateTotalCost);
    
    checkIfFamilyRoom();
    calculateTotalCost();
}

addListener(window, "load", main())
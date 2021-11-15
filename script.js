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
    if(rbtnRoomType[0].checked){
        slctRoomGuests.disabled = true;
        chkExtraLakeView.disabled = false;
        dailyRoomCost = 600;
    }
    else if(rbtnRoomType[1].checked){
        slctRoomGuests.disabled = true;
        chkExtraLakeView.disabled = false;
        dailyRoomCost = 800;
    }
    else if(rbtnRoomType[2].checked){
        slctRoomGuests.disabled = false;
        chkExtraLakeView.disabled = true;
        dailyRoomCost = 950
    }
    console.log("dailyRoomCost: " + dailyRoomCost) //debug
}



/**
 * main entry point for the script
 */
function main(){

    //html reference initilization
    let rbtnRoomTypes = document.querySelectorAll("input[type=radio]");
    console.log(rbtnRoomTypes); //debug
    let slctRoomGuests = document.querySelector("#room > * > select");
    console.log(slctRoomGuests); //debug
    
    let slctTimeStaying = document.querySelector("#date > * > select");
    console.log(slctTimeStaying); //debug

    let chkExtraInternet = document.querySelectorAll("input[type=checkbox]")[0];
    console.log(chkExtraInternet); //debug
    let chkExtraParking = document.querySelectorAll("input[type=checkbox]")[1];
    console.log(chkExtraParking); //debug
    let chkExtraLakeView = document.querySelectorAll("input[type=checkbox]")[2];
    console.log(chkExtraLakeView); //debug

    let spnTotalCost = document.querySelector("totalCost");
    console.log(spnTotalCost); //debug

    let txtCampaignCode = document.querySelector("input[name=campaigncode]");
    console.log(txtCampaignCode); //debug

    let txtCustomerZipcode = document.querySelector("input[name=zipcode]");
    console.log(txtCustomerZipcode); //debug
    let txtCustomerCity = document.querySelector("input[name=city]");
    console.log(txtCustomerCity); //debug
    let txtCustomerPhoneNumber = document.querySelector("input[name=telephone]")
    console.log(txtCustomerPhoneNumber); //debug

    //adding event listeners
    for(element in rbtnRoomTypes){
        addListener(element, "click", checkRoomSelect);
    }
}

main();
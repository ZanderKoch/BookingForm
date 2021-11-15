/**
 * @file script for a webapp that lets users book rooms and calculates prices
 * @author Zander Koch
 * @version 1.0
 */

/////////////
//functions//
/////////////

/**
 * main entry point for the script
 */
function main(){

    //html reference initilization
    let rbtnRoomType = document.querySelectorAll("input[type=radio]");
    console.log(rbtnRoomType); //debug
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



}

main();
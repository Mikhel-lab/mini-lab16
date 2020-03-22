const displayBoard = document.querySelector("#displayBoard");
const txtSMS = document.querySelector("#txtSMS")

var pageCount1 = 1;
var xtersPerPage = 160;

txtSMS.addEventListener('keyup', countCharacters);

function countCharacters() {
    let sms = txtSMS.value;
    let smsPieces = sms.split('').length;

     pageCount = Math.floor(smsPieces / 160) + 1;
         let totalCharactrs = xtersPerPage * pageCount;

     displayBoard.innerHTML = `page count: ${pageCount} (${smsPieces}/${totalCharactrs})`;
}




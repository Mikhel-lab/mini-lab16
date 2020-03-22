// Select all elements of interest...

const txtMessage = document.getElementById('txtMessage');
const txtFeedback = document.getElementById('txtFeedback');

txtMessage.addEventListener('keypress', countWords);

//Define the event handler function,..
console.log(txtMessage)
function countWords() {
	// Get message typed in textarea
	let message = txtMessage.value;

	//Sanitize the retrieved message by taken away repeated spaces and replacing a single spaces.
	message = message.replace(/\s+/g, ` ` );


	//Split sanitized message into word pieces
	let wordPieces = message.split(' ');

   // Count the total number of words in wordpieces
   let numWords = wordPieces.length;

   let wordsRemaining = eval(250 - numWords);

   



   if (wordsRemaining < 50) {
      txtFeedback.value = "Sorry, you have exceeded the maximum number of words allowed!"

   } else {
   	txtFeedback.value =  `you have  ${wordsRemaining} remaining...`;

}
}
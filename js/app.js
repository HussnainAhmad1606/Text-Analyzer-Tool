let analyzeBtn = document.querySelector("#analyzeBtn");
analyzeBtn.addEventListener("click", analyzeText);


function analyzeText () {
let textInputFromUser = document.querySelector("#textInputFromUser");
	// console.log("function is running");
	// console.log(textInputFromUser.value)
	if (textInputFromUser.value==""){
		let error = document.querySelector("#error");
		error.innerHTML = ` <div class="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>ERROR!</strong> Text field is empty. Please Enter some text and try again.
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
		return false;
	}
	else {
		error.innerHTML = null;
	}

	// ALL STRING FUNCTIONS THAT WILL SHOW ON UI
	// Get length of the given text
	let lengthOfText = textInputFromUser.value.length;
	// console.log("Length of Input Text: ",lengthOfText);

	// Get Words in the given Text
	let totalWordsInText = textInputFromUser.value.split(" ").length;
	// console.log("Totol Words of Input Text: ",totalWordsInText)

	// Get total Spaces in the given Text
	let totalSpacesInText = totalWordsInText - 1;
	// console.log("Total Spaces of Input Text:",totalSpacesInText);

	// Total Punctuations in the given Text
	var totalPunctuationExpress = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
	var totalPunctuations = textInputFromUser.value.match(totalPunctuationExpress);

	// Total UpperCase letters in the given Text
	var uppercaseExpress = /A|B|C|D|E|F|G|H|I|J|K|L|M|N|O|P|Q|R|S|T|U|V|W|X|Y|Z/g;
	var totalUpperCaseLetters = textInputFromUser.value.match(uppercaseExpress);
	// console.log("UpperCase Letters: ",totalUpperCaseLetters.length); 

	// Total LowerCase letters in the given Text
	var lowercaseExpress = /a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z/g;
	var totalLowerCaseLetters = textInputFromUser.value.match(lowercaseExpress);
	// console.log("LowerCase Letters: ",totalLowerCaseLetters.length); 

	// Total numbers in the given Text
	var numbersExpress = /0|1|2|3|4|5|6|7|8|9/ig;
	var totalNumbersInText = textInputFromUser.value.match(numbersExpress);
	// console.log('Total Numbers: ', totalNumbersInText);

	if(totalUpperCaseLetters == null){
		if(totalLowerCaseLetters == null){
			if(totalNumbersInText==null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>0</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;	
			}

	else{let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;	}
		}
		else {
			if(totalNumbersInText == null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>0</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;
			}
	else{let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;	}}
	}
	else {
		if(totalLowerCaseLetters==null){
			if(totalNumbersInText == null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>0</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;
			}
else{let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;}
		}
		else{let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>Not Done</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;}
	}


	if(totalLowerCaseLetters == null){
		if(totalUpperCaseLetters == null){
			if(totalNumbersInText==null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>0</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;
			}
	else{let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;}
		}
		else {
			if(totalNumbersInText == null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>0</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;
			}
	else {let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;}}
	}
	else {
		if(totalUpperCaseLetters== null){
			if(totalNumbersInText == null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>0</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;

			}
			else{
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;}
		}
		else {
			let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;
}
	}


	if(totalPunctuations == null){
		if(totalLowerCaseLetters == null){
			if(totalUpperCaseLetters == null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;
			}
			else{
				if(totalNumbersInText == null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>0</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;
				}
				else{
				let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;}}
		}
		
		else{
			if(totalUpperCaseLetters==null){
				if(totalNumbersInText == null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>0</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;
				}
else{let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;}
			}
			else{let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>0</b></p>

  </div>
</div>
	`;}
}
	}
	else {
		if(totalUpperCaseLetters == null){
			if(totalNumbersInText == null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>0</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>${totalPunctuations.length}</b></p>

  </div>
</div>
	`;
			}
else{let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>0</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>${totalPunctuations.length}</b></p>

  </div>
</div>
	`;}
		}
		else{
			if(totalLowerCaseLetters == null){
let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>0</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>${totalPunctuations.length}</b></p>

  </div>
</div>
	`;
			}
	else {let informationAboutText = document.querySelector("#informationAboutText");
	informationAboutText.innerHTML = `
<div class="jumbotron jumbotron-fluid my-4 br-4">
  <div class="container">
    <h2 class="display-5">We have found following Information: </h2>
    <p class="lead">► Your Text: <b>${textInputFromUser.value}</b></p>
    <p class="lead">► Total Character(s): <b>${lengthOfText}</b></p>
    <p class="lead">► Total UpperCase Character(s): <b>${totalUpperCaseLetters.length}</b></p>
    <p class="lead">► Total LowerCase Character(s): <b>${totalLowerCaseLetters.length}</b></p>
    <p class="lead">► Total Number(s): <b>${totalNumbersInText.length}</b></p>
    <p class="lead">► Total Word(s): <b>${totalWordsInText}</b></p>
    <p class="lead">► Total Space(s): <b>${totalSpacesInText}</b></p>
    <p class="lead">► Total Punctuation Mark(s): <b>${totalPunctuations.length}</b></p>

  </div>
</div>
	`;}}
	}
	


}
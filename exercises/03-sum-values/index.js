// adding the function to the window makes it globally available
window.calculateSumListener = function() {
	
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;

	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	let integerA = parseInt(stringA);
	let integerB = parseInt(stringB);
	let result = integerA + integerB;

 	document.getElementById("resultNumber").value = result.toString();

	//your code goes here
};

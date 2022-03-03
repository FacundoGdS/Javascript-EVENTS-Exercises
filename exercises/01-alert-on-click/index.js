window.myClickFunction = function myClickFunction() {
	alert("Your first function!");
};

let button2 = document.querySelector("#button2");
button2.addEventListener('click', (e)=>{
	myClickFunction();
});

console.log(button2);

/* LIs.forEach(LI => LI.addEventListener('click', (e)=>{
	LI.parentNode.removeChild(LI);
})); */

/* window.click2 = ()=> myClickFunction(); */
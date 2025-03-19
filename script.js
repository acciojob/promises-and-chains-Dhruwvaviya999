//your JS code here. If required.

let userAge = document.querySelector("#age");
let userName = document.querySelector("#name");
let submitBtn = document.querySelector("#btn");
let message = document.querySelector("#message");

submitBtn.addEventListener("click", (e)=>{
	e.preventDefault();
	if(userAge.value == "" || userName.value == ""){
		message.style.display = "block";
	};

	if(userAge.value > 18){
		setTimeout(()=>{
			alert("Welcome, John. You can vote.");
		}, 4000);
	} else {
		setTimeout(()=>{
			alert("Oh sorry Doe. You aren't old enough.");
		}, 4000);
	}
	
});
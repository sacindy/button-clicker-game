var add = document.getElementById("bob");  
add.addEventListener("click", counter);

function counter(){
	var count = document.getElementById("number");	
	var num = count.innerHTML;
	num++;
		console.log("test");
	count.innerHTML=num;
	
//	console.log ("this is time clicked", number);

	if(num > 10){
		alert("New High Score");
	}
	

}

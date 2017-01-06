var imageVar = document.querySelector('img');

imageVar.onclick = changeimage;

function changeimage(){ //function to change the image of a block

	
    var imageSrc = imageVar.getAttribute('src');

	if(imageSrc === 'images/dalai_lama.jpg'){
		console.log("inside true");
		imageVar.setAttribute('src','images/info.png');
	}else{
		console.log("inside false");
		imageVar.setAttribute('src','images/dalai_lama.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function(){
	setUserName();
}

if(!localStorage.getItem('name')){
	setUserName();
}else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "Welcome " + storedName;
}

function setUserName(){
	var myName = prompt('Please enter Name');
	localStorage.setItem('name',myName);
	myHeading.textContent = "Welcome, "+ myName;
}


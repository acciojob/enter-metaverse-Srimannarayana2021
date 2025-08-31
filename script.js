//your JS code here. If required.
const initialText = document.getElementById("status");
const enterButton = document.getElementById("enterBtn");

enterButton.addEventListener("click",function(){
	initialText.innerHTML = "<h1>Entered Metaverse</h1>" ;
});
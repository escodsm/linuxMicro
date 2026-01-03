const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", ()=> {
	title.textContent = "Blue branch says hi";
	title.style.color = "blue";
});

const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", ()=> {
	title.textContent = "Red branch was here";
	title.style.color = "red";
});

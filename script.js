const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", ()=> {
	title.textContent = "Reverted: to pink";
	title.style.color = "pink";
});

const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", ()=> {
	title.textContent = "Merged: red & blue";
	title.style.color = "purple";
});

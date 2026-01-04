const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", ()=> {
    console.log("Button clicked...");
	title.textContent = "Final attempt";
	title.style.color = "pink";
});

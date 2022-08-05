function showMenu() {
	let menu = document.querySelector("#menu");
	let menuIcon = document.querySelector("#menuIcon");
	let main = document.querySelector("main");

	if(menu.classList.contains("displayed")) {
		menu.classList.remove("displayed");
		menuIcon.classList.remove("closeIcon");
		main.classList.remove("blur");
	} else {
		menu.classList.add("displayed");
		menuIcon.classList.add("closeIcon");
		main.classList.add("blur");
	}
}
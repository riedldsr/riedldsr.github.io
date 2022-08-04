function showMenu() {
	let menu = document.querySelector("#menu");
	let menuIcon = document.querySelector("#menuIcon");

	if(menu.classList.contains("displayed")) {
		menu.classList.remove("displayed");
		menuIcon.classList.remove("closeIcon");
	} else {
		menu.classList.add("displayed");
		menuIcon.classList.add("closeIcon");
	}
}
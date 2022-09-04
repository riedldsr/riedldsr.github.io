function toggleOverlay() {
	let menu = document.querySelector("#menu");
	let menuList = document.querySelector("#menu ul");
	let menuIcon = document.querySelector("#menuIcon");
	let main = document.querySelector("main");
	let overlay = document.querySelector("#overlay");
	let image = document.querySelector("#fullScreenImage");

	if(overlay.classList.contains("displayed")) {
		menu.classList.remove("displayed");
		menuIcon.classList.remove("closeIcon");
		main.classList.remove("blur");
		overlay.classList.remove("displayed");
		menuList.classList.remove("displayed");
		if(image) {
			image.classList.remove("displayed");
			setTimeout(() => { image.src = ""; }, 500);
		}
	} else {
		menu.classList.add("displayed");
		menuIcon.classList.add("closeIcon");
		main.classList.add("blur");
		overlay.classList.add("displayed");
		menuList.classList.add("displayed");
	}
}

function sendEmail() {
	inputName = document.querySelector("#inputName").value;
	inputEmail = document.querySelector("#inputEmail").value;
	inputSubject = document.querySelector("#inputSubject").value;
	inputMessage = document.querySelector("#inputMessage").value;

	
	if(inputName && inputEmail && inputSubject && inputMessage) {
		var data = "inputName=" + encodeURIComponent(inputName) + "&inputEmail=" + encodeURIComponent(inputEmail) + "&inputSubject=" +
		encodeURIComponent(inputSubject) + "&inputMessage=" + encodeURIComponent(inputMessage);
		fetch("http://localhost:8080/emails", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded"
			},
			body: data

		}).then((response) => {
			if(response.body == 'error') {
				alert("Message failed to send...");
			} else {
				inputName = "";
				inputEmail = "";
				inputSubject = "";
				inputMessage = "";
				alert("Message sent successfully!");
			}
		});
	}
}
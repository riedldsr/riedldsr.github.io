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
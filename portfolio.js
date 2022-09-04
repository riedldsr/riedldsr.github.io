function createImageContainer(file) {
	const imageContainer = document.createElement('div');
	imageContainer.setAttribute('class', 'imageContainer');
	const image = document.createElement('img');
	image.src = `images/portfolio/${file}`;
	imageContainer.appendChild(image);
	return imageContainer;
}

fetch("http://localhost:8080/photos").then((response) => {
	response.json().then((data) => {
		const mainContent = document.querySelector("#mainContent");
		data.forEach((file) => {
			mainContent.appendChild(createImageContainer(file));
		});

		let portfolioImages = document.querySelectorAll(".imageContainer>img");
		for(let i = 0; i < portfolioImages.length; i++) {
			portfolioImages[i].addEventListener('click', function(e) {
				let overlay = document.querySelector("#overlay");
				let main = document.querySelector("main");
				let image = document.querySelector("#fullScreenImage");

				overlay.classList.add("displayed");
				main.classList.add("blur");
				image.classList.add("displayed");
				image.src = e.target.src;
			});
		}
	});
});
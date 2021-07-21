const myArray = new Array(58).fill();

myArray.forEach((item, i) => {
	const li = document.createElement("li");
	li.textContent = `{src: '/doc/c${i + 1}.jpg', caption: ''},`;
	list.append(li);
	li.style.textAlign = "center";
	li.style.listStyle = "none";
});

<!--  ADD IMAGES LIMITLESS -->

const main = document.querySelector("main");

const myArray = new Array(5).fill();

const createPics = () => myArray.map(createImg);

const createImg = (item, i) => {
	const image = document.createElement("img");
	item = `/doc/ls${i + 11}.jpg`;
	image.style.width = "100%";
	image.style.height = "100%";
	image.setAttribute("src", item);

	return image;
};

function intoDom(name, i) {
	for (i = 0; i < myArray.length; i++) {
		const div = document.createElement("div");
		div.classList.add(name);

		return div;
	}
}
const landScapes = createPics();

landScapes.forEach((landscape) => {
	const imgBox = intoDom("image-box");
	imgBox.append(landscape);
	main.append(imgBox);
});

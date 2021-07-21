function Tag(element,className, width, height) {
	this.className = className;
	this.element = element;
	this.width = width;
	this.height = height;
	this.createTag = function () {
		const newElement = document.createElement(element);
        newElement.classList.add(className);
        newElement.style.width = width;
        newElement.style.height = height;
		return newElement;
	};
}
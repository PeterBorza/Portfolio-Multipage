const main = document.querySelector("main");
const p = console.log;

const tag = (tagName, className) => {
	const element = document.createElement(tagName);
	element.classList.add(className);

	return element;
};

const getPositions = async () => {
	const response = await fetch("Json/positions.json");

	if (response.status !== 200) {
		throw new Error("cannot fetch the data");
	}

	const data = await response.json();
	return data;
};

const myObject = async () => {
	try {
		const data = await getPositions();
		renderData(data);
	} catch (err) {
		p("rejected:", err.message);
	}
};

myObject();

const renderData = (data) => data.map(renderBg);

const renderBg = (item) => {
    const div = tag("div", 'circle');
    div.style.left = item.left;
    div.style.top = item.top;
    div.style.opacity = item.opacity;
    div.style.position = 'absolute';
    div.style.width = item.size;
    div.style.height = item.size;
    main.append(div);

    return div;
};


<!-- CSS -->

main{
    width: $w;
    height: 100vh;
    background: linear-gradient(to right, #4ac29a, #bdfff3);
    display: flex;
    flex-wrap: wrap;
}

.circle{
    position: absolute;
    border-radius: 50%;
    background-color: white;
    box-shadow: inset 0 0 15px rgba(194, 188, 188, 0.479),
                      0 0 15px pale(0.3);
}

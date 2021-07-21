const getApi = async () => {
	const response = await fetch("https://api.thecatapi.com/v1/images/search");

	if (response.status !== 200) {
		throw new Error("cannot fetch the data");
	}

	const data = await response.json();
	return data;
};

const renderData = (data) =>
	data.map((item) => (catBox.innerHTML = `<img src='${item.url}'>`));

const onClick = () => {
	getApi()
		.then((data) => renderData(data))
        .catch((err) => p("rejected:", err.message));
        p('hello');
};

const onClick2 = async () => {
    try {
        const data = await getApi();
        renderData(data);
    } catch  (err){
        p("rejected:", err.message);
    }
    
};

btn.addEventListener("click", () => {
	onClick2();
	p("something");
});
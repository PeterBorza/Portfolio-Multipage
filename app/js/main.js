const getBkgColors = async () => {
	const response = await fetch('Json/colors.json');
	const data = await response.json();

	return data;
};

const loadColors = async () => {
	try {
		const data = await getBkgColors();
		renderTabsSections(data);
	} catch (err) {
		p('rejected', err.message);
	}
};

const renderTabsSections = data => {
	const { palet3 } = data;
	palet3.map((item, i) => {
		const anchor = tag('a', 'href', `#section${i + 1}`);
		anchor.textContent = `${i + 1}`;
		header.append(anchor);

		const section = tag('div', 'id', `section${i + 1}`);
		section.classList.add('section-style');
		section.style.backgroundColor = `#${item}`;
		const mframe = portfolioPage();
		if (i == 0) {
			section.append(mframe);
		}
		main.append(section);

		return [anchor, section];
	});
};

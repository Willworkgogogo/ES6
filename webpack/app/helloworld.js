var styles = require('../style.css');

// 导出函数
module.exports = () => {
	let content = "Hello";
	const NAME = "es6";
	var div = document.createElement("div");
	div.innerHTML = `${content}  ${NAME}`;
	div.setAttribute("class", styles.content)
	return div;
};
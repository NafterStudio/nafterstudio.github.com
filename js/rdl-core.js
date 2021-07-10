function playRDL(rawRDL, elementID) {
	console.log("RDL Rendering...");
	let parentElement = document.getElementById(elementID);
	let opRDL = rawRDL.split('\\');
	let opElement = document.createElement('div');
	for(let i = 0; i < opRDL.length; ++i) {
		let tmpElement;
		switch(opRDL[i]) {
		case 'a':
			tmpElement = document.createElement('a');
			tmpElement.innerHTML = opRDL[i + 1];
			tmpElement.href = opRDL[i + 2];
			i+=2;
			break;
		case 'i':
			tmpElement = document.createElement('img');
			tmpElement.src = opRDL[i + 1];
			++i;
			break;
		case '[]':
			tmpElement = document.createElement('p');
			tmpElement.innerHTML = '<input type="checkbox" disabled="disabled">' + opRDL[i + 1];
			i+=2;
			break;
		case '[x]':
			tmpElement = document.createElement('p');
			tmpElement.innerHTML = '<input type="checkbox" checked="true" disabled="disabled">' + opRDL[i + 1];
			i+=2;
			break;
		case '':
			tmpElement = document.createElement('br');
			break;
		default:
			tmpElement = document.createElement(opRDL[i]);
			tmpElement.innerHTML = opRDL[i + 1];
			++i;
			break;
		}
		opElement.appendChild(tmpElement);
	}
	parentElement.appendChild(opElement);
	console.log("RDL Rendered.");
	return;
}

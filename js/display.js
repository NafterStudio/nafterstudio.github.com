function addNode(key) {
	let opElement = document.createElement('td');
	opElement.innerHTML = key;
	return opElement;
}

function bigger(element) {
	element.style.transform='scale(1.05)';
	return;
}
function normal(element) {
	element.style.transform='scale(1)';
	return;
}

function playList(elementListID, elementPageID, allArticle, ind) {
	let parentListElement = document.getElementById(elementListID);
	let parentPageElement = document.getElementById(elementPageID);
	while(parentListElement.children.length > 0) {
		parentListElement.children[0].remove();
	}
	while(parentPageElement.children.length > 0) {
		parentPageElement.children[0].remove();
	}
	let opElement;
	let pg = parseInt(getCookie('pg')) - 1;

	//list show{
	let app = manifest[0].articlePerPage;
	let maxBound = app * (pg + 1);
	if(allArticle.length < app * (pg + 1)) {
		maxBound = allArticle.length;
	}
	for(let i = app * pg; i < maxBound;++i) {
		let tmpElement = addNode(allArticle[i].key);
		tmpElement.id = 'article' + (i - app * pg + 1);
		tmpElement.setAttribute('onmouseenter', 'bigger(this)');
		tmpElement.setAttribute('onmouseleave', 'normal(this)');
		tmpElement.setAttribute('onclick', 'content(' + ind[i] + ')');
		opElement = document.createElement('tr');
		opElement.appendChild(tmpElement);
		parentListElement.appendChild(opElement);
	}
	//}

	//page show{
	let pageNum = Math.ceil(allArticle.length / app);
	let pns = manifest[0].pageNumShow;
	if(pns < 5) {
		pns = 5;
	}
	if(pns >= pageNum) {
		for(let i = 1; i <= pageNum; ++i) {
			opElement = addNode(i);
			opElement.setAttribute('onclick', 'pageChange(' + i + ', eval(getCookie("ind")))');
			parentPageElement.appendChild(opElement);
		}
	} else {
		for(let i = 1; i <= pns; ++i) {
			if(pg <= parseInt(pns / 2)) {
				if(i == pns - 1) {
					opElement = addNode('...');
					opElement.setAttribute('onclick', 'pageChange(' + i + ', eval(getCookie("ind")))');
				} else if(i == pns) {
					opElement = addNode(pageNum);
					opElement.setAttribute('onclick', 'pageChange(' + pageNum + ', eval(getCookie("ind")))');
				} else {
					opElement = addNode(i);
					opElement.setAttribute('onclick', 'pageChange(' + i + ', eval(getCookie("ind")))');
				}
			} else if(pg >= pageNum - parseInt((pns - 1) / 2) - 1) {
				if(i == 2) {
					opElement = addNode('...');
					opElement.setAttribute('onclick', 'pageChange(2, eval(getCookie("ind")))');
				} else if(i == 1) {
					opElement = addNode(1);
					opElement.setAttribute('onclick', 'pageChange(1, eval(getCookie("ind")))');
				} else {
					opElement = addNode(pageNum - pns + i);
					opElement.setAttribute('onclick', 'pageChange(' + (pageNum - pns + i) + ', eval(getCookie("ind")))');
				}
			} else {
				if(i == 2) {
					opElement = addNode('...');
					opElement.setAttribute('onclick', 'pageChange(' + (pg - parseInt(pns / 2) + 2) + ', eval(getCookie("ind")))');
				} else if(i == pns - 1) {
					opElement = addNode('...');
					opElement.setAttribute('onclick', 'pageChange(' + (pg + parseInt((pns - 1) / 2)) + ', eval(getCookie("ind")))');
				} else if(i == pns) {
					opElement = addNode(pageNum);
					opElement.setAttribute('onclick', 'pageChange(' + pageNum + ', eval(getCookie("ind")))');
				} else if(i == 1){
					opElement = addNode(1);
					opElement.setAttribute('onclick', 'pageChange(1, eval(getCookie("ind")))');
				} else {
					opElement = addNode(pg + i - parseInt(pns/2));
					opElement.setAttribute('onclick', 'pageChange(' + (pg + i - parseInt(pns/2)) + ', eval(getCookie("ind")))');
				}
			}
			parentPageElement.appendChild(opElement);
		}
	}
	if(getCookie('aa') != 'manifest[1]') {
		opElement = addNode('<');
		opElement.setAttribute('onclick', 'window.location.href="./index.html"');
		parentPageElement.appendChild(opElement);
	}
	//}
	return;
}

function pageChange(page, ind) {
	document.cookie = 'pg=' + page + '; SameSite=Lax;';
	playList('articleNode', 'pageChoose', eval(getCookie('aa')), ind);
	console.log('Now at page ' + page);
	return;
}

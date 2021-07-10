function loadPage() {
	document.title = manifest[0].title;
	document.getElementById('avatar').style.backgroundImage = 'url(' + manifest[0].avatar + ')';
	document.getElementById('welcome').innerHTML = manifest[0].welcome;
}

function orderArray(len) {
	let ret = [];
	for(let i = 0; i < len; ++i) {
		ret.push(i);
	}
	return ret;
}

function getCookie(targetName) {
	let cName = targetName + '=';
	let docCookie = document.cookie.split(';');
	for(let i = 0; i < docCookie.length; ++i) {
		if(docCookie[i].indexOf(cName) == 0) {
			return docCookie[i].slice(cName.length);
		} else if(docCookie[i][0] == ' ' && docCookie[i].indexOf(cName) == 1) {
			return docCookie[i].slice(cName.length + 1);
		}
	}
	return "";
}

function content(contentIndex) {
	document.cookie = 'cont=' + contentIndex + '; SameSite=Lax;';
	window.location.href = './content.html';
	return;
}

function search(elementID) {
	document.cookie = 'key=' + document.getElementById(elementID).value + '; SameSite=Lax;';
	window.location.href = "./filter.html";
	return;
}
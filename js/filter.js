function keyFilter(target) {
	if(target == '') return [[],[]];
	let ret = [[],[]];
	for(let i = 0; i < manifest[1].length; ++i) {
		if(manifest[1][i].key.indexOf(target) != -1 || manifest[1][i].tag.indexOf(target) != -1) {
			ret[0].push(manifest[1][i]);
			ret[1].push(i)
		}
	}
	return ret;
}
var embiggen = function(pId) {
	par = $('#' + pId);
	parStyle = par.attr('style');
	var sizeNum = /(\d+)/;
	if(typeof(parStyle) === "undefined") {
		$('#' + pId).attr('style', 'font-size: 16px');
		$('<button class="btn btn-warning" onClick="undoEmbiggen(\'' + pId + '\');">' +
			'Undo</button>').insertBefore('#embiggen');
	}
	else {
		var currSize = parseInt(sizeNum.exec(parStyle)[1]);
		currSize += 2;
		$('#' + pId).attr('style', 'font-size: ' + currSize + 'px');
	}
};

var undoEmbiggen = function(pId) {
	par = $('#' + pId);
	parStyle = par.attr('style');
	var sizeNum = /(\d+)/;
	var currSize = parseInt(sizeNum.exec(parStyle)[1]);
	currSize -= 2;
	$('#' + pId).attr('style', 'font-size: ' + currSize + 'px');
};
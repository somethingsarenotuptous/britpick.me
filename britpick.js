$(document).ready(function() {
	$('#target').on("submit",function() {
		text = $('#fic').val();
		britpick(text);
		addPopoverData();
		$('.britpicked').popover({html: true, trigger: "hover"});
		$('#fic').val('');
		return false;
	});
});

var britpick = function(text) {
	var noSuggestions = true;
	var caught = new Array();
	var toBritpick = new Array();
	var suggested = new Array();
	var explanations = new Array();
	for(i = 0; i < defaults.length; i++) {
		caught[i] = defaults[i].American;
		toBritpick[i] = defaults[i].AmericanForms;
		suggested[i] = defaults[i].British;
		explanations[i] = defaults[i].Explanation;
	};
	for(i = 0; i < toBritpick.length; i++) {
		if (toBritpick[i].search(',') != -1) {
			toBritpick[i] = toBritpick[i].replace(", ", ",");
			var options = toBritpick[i].split(',');
			for (j = 0; j < options.length; j++) {
				if(text.search(getRegexp(options[j])) != -1) {
					text = suggest(text, options[j], getRegexp(options[j]), suggested[i], explanations[i]);
					noSuggestions = false;
				};
			};
		}
		else {
			if(text.search(getRegexp(toBritpick[i])) != -1){
				text = suggest(text, toBritpick[i], getRegexp(toBritpick[i]), suggested[i], explanations[i]);
				noSuggestions = false;
			};
		};
	};

	var paras = text.split("\n");
	var submitted = "";
	for(i = 0; i < paras.length; i++) {
		submitted += "<p>" + paras[i] + "</p>";
	};
	createBlankCheck(true);
	createCheck(submitted, noSuggestions);
}

var addPopoverData = function () {
	$('.britpicked').each(function(i) {
		for(i = 0; i < defaults.length; i++) {
			item = defaults[i]
			word = defaults[i].British;
			if($(this).text() === word) {
				$(this).attr("title", item.American + " vs. " + item.British);
				$(this).attr("data-content", item.Explanation);
			}
		};
	});
}

var getRegexp = function (base) {
	var re = new RegExp("\\b" + base + "\\b", "gi");
	return re;
}

var suggest = function (text, wrong, re, right, explained) {
	if (text.search("<del class='tbd text-error'>" + wrong) != -1) {
		if (text.search("<del class='tbd text-error'>" + wrong + "</del>") != -1)
		// covers case where one Americanism can have multiple British equivs: e.g., 'pop' ('fizzy drink', 'dad, father')
		{
			return text.replace(re, wrong + "</del> <button class='btn btn-success britpicked'>" + right + "</button>");
		}
		else {
		//covers case where one Americanism contains another but we don't want recursive replacement: 'trash can'
			var newRe = new RegExp("\\b" + re + "(.*)\\b", "gi");
			return text.replace(newRe, wrong + "$1</del> <button class='btn btn-success britpicked'>" + right + "</button>");
		}
		
	}
	else {
		return text.replace(re, "<del class='tbd text-error'>" + wrong + "</del>" + " " + "<button class='btn " +
			"btn-success britpicked'>" + right + "</button>");
	}
	
}

var createBlankCheck = function(form) {
	$('#splash').remove();
	$('#form').remove();
	$('li').removeClass('active');
	$('#check').addClass('active');
	$('#altLead').remove();
	if (!form) {
		$('#headline').prepend("<p class='lead' id='altLead'>You need to submit your text in the <a href='#'" + 
			" onClick='recreateIndex();'>form</a> in order to Britpick it!</p>");
		$('#britpicked').html("<div id='britpicked' class='container-narrow'><div id='result'></div></div>");
	}
}

var createCustomize = function () {
	$('#splash').remove();
	$('#form').remove();
	$('#britpicked').html("<div id='britpicked' class='container-narrow'><div id='result'></div></div>");
	$('li').removeClass('active');
	$('#customize').addClass('active');
	$('#altLead').remove();
	$('#headline').prepend("<div class='jumbotron hero-unit' id='altLead'><h2>Coming soon!</h2></p>");
}

var recreateIndex = function() {
	location.assign("index.html");
	$('#headline').append("<div id='splash' class='jumbotron hero-unit'><h1>Britpick.me</h1><p></p>" + 
		"<p class='lead'>Quick, easy, and customizable Britpicking</p><p>for American (and other " + 
		"non-Brit) fic authors</p></div>");
	$('#headline').append("<div id='form'><form id='target'><legend>Paste your fic in the box:</legend>" + 
		"<textarea id='fic' class='input-block-level' rows='6' placeholder='Your un-Britpick-ed text'" + 
		" autofocus required></textarea><br/><button type='submit' class='btn btn-primary btn-large'>" + 
		"Britpick it!</button></form></div>");
	$('li').removeClass('active');
	$('#start').addClass('active');
	$('#altLead').remove();
	$('#britpicked').html("<div id='britpicked' class='container-narrow'><div id='result'></div></div>");
}

var createCheck = function(submitted, noSuggestions) {
	if (noSuggestions) {
		$('#britpicked').prepend("<h1>Your Britpick-ed fic:</h1><p class='lead'>Britpick.me caught no " +
			"errant Americanisms. Congratulations!</p>");
		$('#result').html(submitted);
	}
	else {
		$('#britpicked').prepend("<h1>Your Britpick-ed fic:</h1><p class='lead'>Hover over suggested changes " +
			"(in <del class='tbd text-error'>red</del> <button class='btn btn-success'>green</button>) to learn " +
			"about why the change is recommended.</p>");
		$('#result').html(submitted);
	}
}
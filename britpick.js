$(document).ready(function() {
	notaBene();
	$('#target').on("submit",function() {
		text = $('#fic').val();
		britpick(text, toExclude);
		addPopoverData(scrub(text));
		$('.britpicked').popover({html: true, trigger: "click"});
		$('#fic').val('');
		return false;
	});
});

var toExclude = [];

var notaBene = function() {
	$('#NBmore').click(function() {
	  	$('#NBtext').slideToggle('slow', function() {
	  	});
	});
}

var scrub = function(text) {
	return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

var britpick = function(text, toExclude) {
	var noSuggestions = true;
	var caught = new Array();
	var toBritpick = new Array();
	var suggested = new Array();
	var explanations = new Array();
	var excluded;
	for(i = 0; i < defaults.length; i++) {
		excluded = false;
		for(j = 0; j < toExclude.length; j++) {
			if(defaults[i].American === toExclude[j]) {
				console.log("Excluding '" + toExclude[j] + "'");
				excluded = true;
			}
		}
		if(!(excluded)) {
			caught[i] = defaults[i].American;
			toBritpick[i] = defaults[i].AmericanForms;
			suggested[i] = defaults[i].British;
			explanations[i] = defaults[i].Explanation;
		}
		else {
			toBritpick[i] = "αω";
		}
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

var addPopoverData = function (text) {
	// without next line, get 'unterminated string literal' error
	text = text.replace(/\n/g, "<br/>");
	text = text.replace(/\r/g, "<br/>");
	$('.britpicked').each(function(i) {
		for(i = 0; i < defaults.length; i++) {
			item = defaults[i]
			word = defaults[i].British;
			if($(this).text() === word) {
				$(this).attr("title", item.American + " vs. " + item.British);
				$(this).attr("data-content", item.Explanation + "<br/><br/><button class='btn btn-primary' " +
					"onClick=\"ignore('" + scrub(text) + "', '" + item.American + "');\">Ignore <em>" + item.American + 
					"</em></a>");
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

var ignore = function(text, word) {
	toExclude.push(word);
	britpick(text, toExclude);
	addPopoverData(text);
	$('.britpicked').popover({html: true, trigger: "click"});
	$('#excluding').remove();
	$("<div id='excluding'><ul class='nav nav-pills well' " +
		"id='excluded_words'><li class='active pull-left'><a href='#'>Excluding:</a></li></ul></div>").insertBefore('#result');
	for(i = 0; i < toExclude.length; i++) {
		$('#excluded_words').append("<li class='disabled'><a href=''>" + toExclude[i] + "</a></li>");
	};
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$('#fic').val('');
	return false;
}

var createBlankCheck = function(form) {
	$('#splash').remove();
	$('#form').remove();
	$('#britpicked_head').remove();
	$('#britpicked_lead').remove();
	$('#nb').remove();
	$('#buttons').remove();
	$('.britpick_breaks').remove();
	$('li').removeClass('active');
	$('#check').addClass('active');
	$('#altLead').remove();
	if (!form) {
		$('#main').prepend("<p class='lead' id='altLead'>You need to submit your text in the <a href='#'" + 
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
	$('#main').prepend("<div class='jumbotron hero-unit' id='altLead'><h2>Coming soon!</h2></p>");
}

var recreateIndex = function() {
	location.assign("index.html");
	$('#main').append("<div id='splash' class='jumbotron hero-unit'><h1>Britpick.me</h1><p></p>" + 
		"<p class='lead'>Quick, easy, and customizable Britpicking</p><p>for American (and other " + 
		"non-Brit) fic authors</p></div>");
	$('#main').append("<div id='form'><form id='target'><legend>Paste your fic in the box:</legend>" + 
		"<span class='help-block'>You can paste plain text, rich text, or HTML in the box. For more on " +
		"how the Britpicker works, see the <a href='faq.html' target='_blank'>FAQ</a>.</span>" +
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
		$('#britpicked').prepend("<h1 id='britpicked_head'>Your Britpick-ed fic:</h1><p id='britpicked_lead' " +
			"class='lead'>Britpick.me caught no errant Americanisms. Congratulations!</p><div id='buttons' " +
			"class='container-narrow btn-toolbar' style='float: right'><button id='embiggen' class='btn btn-primary' " +
			"onClick=\"embiggen('result');\">Embiggen Text</button></div><br class='britpick_breaks' /><br " +
			"class='britpick_breaks' />");

		$('#result').html(submitted);
	}
	else {
		$('#britpicked').prepend("<h1 id='britpicked_head'>Your Britpick-ed fic:</h1><p id='britpicked_lead' " +
			"class='lead'>Click on suggested changes (in <del class='tbd text-error'>red</del> <button " +
			"class='btn btn-success'>green</button>) to learn about why the change is recommended.</p><div " + 
			"id='buttons' class='container-narrow btn-toolbar' style='float: right'><button id='embiggen' " +
			"class='btn btn-primary' onClick=\"embiggen('result');\">Embiggen Text</button></div><br " +
			"class='britpick_breaks' /><br class='britpick_breaks' /><div class='alert' id='nb'><button type='button' " +
			"class='close' data-dismiss='alert'>&times;</button><span id='NBmore'><strong>NB:</strong> click for " +
			"more info/warnings.</span><div id='NBtext' style='display:none;'><br/><p>Many of the suggestions you'll " +
			"receive from this tool are <em>highly context-dependent</em>. Be sure to read the explanations (click on " +
			"the green buttons to see them) if you're confused or if the suggestion seems silly&mdash;it might be! " +
			"You can also choose to ignore a particular item by clicking the blue 'Ignore' button below the explanation.</p>" +
			"<p>This tool is intended as a first-pass Britpicker; it can't handle anything more than the most obvious " +
			"substitutions, but for me, at least, it's useful to find those pesky places where I write 'bathroom' instead " +
			"of 'toilet/loo' or 'apartment' instead of 'flat' without ever noticing.</p></div></div>");
		notaBene();
		$('#result').html(submitted);
	}
}
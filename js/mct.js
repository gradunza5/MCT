$(document).ready(function() {
	// set up columns from template
	$(".col").each(function() {
		$(this).append($("#templates #colTemplate").html());
	});
});

function setup() {
	$(".col").each(function() {
		var col = $(this);

		// get challenge rating
		var cr = parseInt(col.find(".crInput").val());
		// get size
		var sz = col.find(".sizeSel").val();
		// get hit dice
		var hd = col.find(".hdSelect").val();

		// calculate and set ACR
		var acr = cr + getCRMod(sz);
		col.find(".ACRRow .value").text(acr);

		// calculate and set hit points
		var hp = acr * hd;
		col.find(".HPRow .value").text(hp);

		// calculate and set dv
		

		// set ov
		col.find(".OVRow .value").text(acr);
	});
}

function addCondition(caller) {
	var container = caller.parentNode;
	$(container).append($("#templates #condTemplate").html());
}

function addTactic(caller) {
	var container = caller.parentNode;
	$(container).append($("#templates #tacticTemplate").html());
}

function addStrategy(caller) {
	var container = caller.parentNode;
	$(container).append($("#templates #strategyTemplate").html());
}

function getCRMod(size) {
	var out = 0;

	switch(size) {
		case "1": // fine
			out = -8;
			break;
		case "2": // diminutive
			out = -6;
			break;
		case "3": // tiny
			out = -4;
			break;
		case "4": // small
			out = -2;
			break;
		case "5": // medium
			out = 0;
			break;
		case "6": // large
			out = 0;
			break;
		case "7": // huge
			out = 0;
			break;
		case "8": // gargantuan
			out = 0;
			break;
		case "9": // colossal
			out = 0;
			break;
		default:
			out = 0;
	} return out;
}

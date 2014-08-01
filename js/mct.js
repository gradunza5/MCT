$(document).ready(function() {
	// set up columns from template
	$(".col").each(function() {
		$(this).append($("#templates #colTemplate").html());
	});
});

function setup() {
	alert("setup!");
}

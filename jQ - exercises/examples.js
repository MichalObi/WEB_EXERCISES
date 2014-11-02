$(document).ready(function() { 
	$("#after").on("click", function() {
		$("#random_1").after("<h3>It is after random h2</h3>");
		$(this).find("h3").addClass("h3_after");
	 });

	$("#before").on("click", function() {
		$("#random_1").before("<h3>It is before random h2</h3>");
	 });

	$("#ex_input").change(function() {
		alert("changed!");
	});

});
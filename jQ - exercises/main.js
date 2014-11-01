$(document).ready(function(){
	/* adding css */
	$(".X li:first-child").css({"color": "red"});
	$(".Y li:first-child").css({"font-weight": "bold", "color": "black"});
	$(".X").find(".Y").find("#special").css({"font-style": "italic"}).addClass("greeny");

$(".btn-primary").on("click", function(){
	var next_li_item = $("<li>Atrakcja_4</li>");
	$(this).before(next_li_item); /*add to all ul*/
	$(this).remove();
});

$(".photo").on("mouseenter", function(){
	$(this).parent().find("h4").text("Kliknij obrazek, aby zobaczyć opis!");
});

$(".photo").on("mouseleave", function(){
	$(this).parent().find("h4").text("");
});

$(".photo").on("click", function(){
	$(this).parent().find(".X").slideToggle(400);
	$(this).parent().find("h4").remove();
});

$(".close_x").on("click", function() {
	$(this).children().toggleClass('glyphicon-chevron-down', 'glyphicon-chevron-up');
	$(this).next().slideToggle("slow");
});

$("#button_1").on("click", function() {
	$("#button_1").toggleClass('btn-danger', 'btn-success');

	if($("#button_1").hasClass("btn-danger")) {
		$("#panel_1").animate({'top': '-100px'}, 'fast');
	} else {
		$("#panel_1").animate({'top': '0px'}, 'fast');
	}
});

$("#button_2").on("click", function() {
	$("#button_2").toggleClass('btn-danger', 'btn-success');

	if($("#button_2").hasClass("btn-danger")) {
		$("#panel_2").animate({'top': '-100px'}, 'fast');
	} else {
		$("#panel_2").animate({'top': '0px'}, 'fast');
	}
});

$("#button_3").on("click", function() {
	$("#button_3").toggleClass('btn-danger', 'btn-success');

	if($("#button_3").hasClass("btn-danger")) {
		$("#panel_3").animate({'top': '-100px'}, 'fast');
	} else {
		$("#panel_3").animate({'top': '0px'}, 'fast');
	}
});
});

$(document).ready(function(){
	$('#fullpage').fullpage({
				menu: '#menu',
				anchors: ['firstPage', 'secondPage', '3rdPage'],
				sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
				autoScrolling: false
	});

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

	if($("#button_1").hasClass("btn-success")){
		$(this).removeClass("btn-success");
		$(this).addClass("btn-danger");
		$(this).text("Undo Animation!")
		$("#panel_1").animate({'top': '-100px'}, 'fast');
		
	}

	else {
		$(this).removeClass("btn-danger");
		$(this).addClass("btn-success");
		$(this).text("DO Animation!");
		$("#panel_1").animate({'top': '0px'}, 'fast');
	}

});


$("#button_2").on("click", function() {

	if($("#button_2").hasClass("btn-success")){
		$(this).removeClass("btn-success");
		$(this).addClass("btn-danger");
		$(this).text("Undo Animation!")
		$("#panel_2").animate({'top': '-100px'}, 'fast');
		
	}

	else {
		$(this).removeClass("btn-danger");
		$(this).addClass("btn-success");
		$(this).text("DO Animation!");
		$("#panel_2").animate({'top': '0px'}, 'fast');
	}
});

$("#button_3").on("click", function() {

	if($("#button_3").hasClass("btn-success")){
		$(this).removeClass("btn-success");
		$(this).addClass("btn-danger");
		$(this).text("Undo Animation!")
		$("#panel_3").animate({'top': '-100px'}, 'fast');
		
	}

	else {
		$(this).removeClass("btn-danger");
		$(this).addClass("btn-success");
		$(this).text("DO Animation!");
		$("#panel_3").animate({'top': '0px'}, 'fast');
	}
});

$("#radius_imp").on("keyup", function() {

	var rad = +$(this).val();
	var area = Math.round((Math.PI*rad*rad)*100)/100;
	$("#radius").text(rad).addClass("result");
	$("#area").text(area).addClass("result");

});

$("#draw_circ").on("click", function() {

	if($(this).hasClass("btn-warning")){
	// canvas circle - use value of rad in input
	var rad = +$("#radius_imp").val();

	if(rad < 100) {
	var canvas = document.getElementById('myCanvas');
	var context = canvas.getContext('2d');
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;

	context.beginPath();
	context.arc(centerX, centerY, rad, 0, 2 * Math.PI, false);// start angle from 0 and angle with 2PI = full circle
	context.fillStyle = 'green';
	context.fill();
	context.lineWidth = 5;
	context.strokeStyle = '#003300';
	context.stroke();

	$(this).removeClass("btn-warning");
	$(this).addClass("btn-success");
	$(this).text("Undo");
} else {
	$("#circ_alert").text("It is too big. Make sure your radius is < then 100 px.");
}

} else {

	var canvas = document.getElementById('myCanvas');
	canvas.width = canvas.width;

	$(this).removeClass("btn-success");
	$(this).addClass("btn-warning");
	$(this).text("Draw circle");
}

});

});

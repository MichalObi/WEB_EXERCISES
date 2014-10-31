$(document).ready(function(){
	/* adding css */
	$(".X li:first-child").css({"color": "red"});
	$(".Y li:first-child").css({"font-weight": "bold", "color": "black"});
	$(".X").find(".Y").find("#special").css({"font-style": "italic"}).addClass("greeny");

$("button").on("click", function(){
	var next_li_item = $("<li>Atrakcja_4</li>");
	$(this).closest("button").before(next_li_item); /*add to all ul*/
	$(this).remove();
});

$(".panel").on("mouseenter", function(){
	$(".photo").slideDown();
});

});
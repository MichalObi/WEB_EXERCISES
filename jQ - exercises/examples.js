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

	$("#add_data").on("click", function() {
		if($("#add_data").hasClass("btn-default")) {
			$(this).toggleClass('btn-default', false);
			$(this).toggleClass('btn-success', true);
			$(this).text("Remove data from h3");
			$("#data_store").data('tajnedane', '123');
			$("#display_data").text($("#data_store").data('tajnedane'));
	}else {
			$(this).toggleClass('btn-success', false);
			$(this).toggleClass('btn-default', true);
			$(this).text("Add data to h3");
			$("#data_store").removeData();
			$("#display_data").text("empty");
	}
	});

	$('#start').click(animateBox);
 
	$('#reset').click(function() {
	    $('#div_to_animate').queue('fx', []); // empty a queue - no animation to do - stop
	});
	 
	// added animation will be executed just one becouse we dequeue in the end
	$('#add').click(function() {
	    $('#div_to_animate').queue( function(){ 
	        $(this).animate({ height : '-=25'}, 2000);// add new animation too an animation queue
	        $(this).dequeue();
	    });
	});
	 
	function animateBox() {
	  $('#div_to_animate').slideUp(2000)
	           .slideDown(2000)
	           .hide(2000)
	           .show(2000, animateBox);//repeat function - > infinite loop
	}

	$("#delay_btn").on("click", function() {
		$('#delay_div').hide("slow").delay(2000).show("slow"); // div will stay hidden for 2 seconds before showing.
	 });

	$("#eq_list li:eq(0)").addClass('testclass');


});
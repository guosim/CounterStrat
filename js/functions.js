$(document).ready(function() {


	$("#map").change(function(){
		$("img[name=image-swap]").attr("src",$(this).val());


	$('#create').click(
		function() {
			alert("?");
			var someText = "my dynamic text";
			var node = $('<div class="frame">').append(someText).click(function () { alert("click!"); });
			$(this).append(newDiv);
	  }
	)

	$(".frame").draggable()
	  .click(function() {
	    $(this).draggable( {disabled: false});
	}).dblclick(function() {
	    $(this).draggable({ disabled: true });
	});

});
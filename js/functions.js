$(document).ready(function() {


	$("#select-map").change(
		function() {
			console.log('map changed');
			$('.map').attr('src','images/' + $('#select-map').val() + '.jpg');
	});

	$('#create').click(
		function() {
			console.log('create box');
			var initialText = "Edit here!";
			var node = $('<div class="frame">').append(someText).click(function () { alert("click!"); });
			$(this).append(newDiv);
	  }
	)

	/*$(".frame").draggable()
	  .click(function() {
	    $(this).draggable( {disabled: false});
	}).dblclick(function() {
	    $(this).draggable({ disabled: true });
	});*/

});
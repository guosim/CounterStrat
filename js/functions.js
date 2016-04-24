$(document).ready(function() {

var $numBox = 0;
	$("#select-map").change(
		function() {
			console.log('map changed');
			$('.map').attr('src','images/' + $('#select-map').val() + '.jpg');
	});

	$('#create').click(
		function() {
			$numBox = $numBox + 1;
			$('<div class="node"><div class="textbox" contentEditable="true"> #' + $numBox + ' Edit here!</div></div>').appendTo('#left');
			$(".textbox").resizable().draggable();
	  });


});
$(document).ready(function() {

	var $num = 0;

	$("#select-map").change(
		function() {
			console.log('map changed');
			$('.map').attr('src','images/' + $('#select-map').val() + '.jpg');
	});

	$("#create").click(
		function() {
			$num = $num + 1;
			//create node, add classes
			$('<div class="node' + $num + '"><div class="textbox box' + $num + '" contentEditable="true"> #' + $num + ' Edit here!</div></div>').appendTo('#left').resizable().draggable();
			$('.box'+$num)
				.resizable()
				.draggable()
				//link to canvas, displays one canvas at a time
				.click(function() {
					if($(this).is('.ui-draggable-dragging')){
						return;
					};
					$("canvas").css("display", "none");
					var nodeClass = $(this).parent().prop("className").split(" ");
					//console.log(nodeClass[0]);
					$("canvas").each(
						function() {
							var canvasClass = $(this).prop("className");
							if(nodeClass[0] === canvasClass) {
								$(this).css("display", "inline");
								//console.log($(this).css("display"));
							}
						});
				});
			$('<canvas class="node' + $num + '"></canvas>').appendTo("#right");
			//console.log($("canvas.node" + $num)); 
			$("canvas.node" + $num).init();
			$("canvas").css("display", "none");
	});

});
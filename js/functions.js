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
			$('<div class="node' + $num + '"><div class="textbox box' + $num + '" contentEditable="true"> #' + $num + '</div></div>').appendTo('#left');
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

			context = $("canvas.node" + $num).get(0).getContext("2d");
			//console.log($("canvas.node" + $num).get(0).getContext("2d"));
			//Malone's canvas
			$("canvas.node" + $num).mousedown(function(e){
			  var mouseX = e.pageX - this.offsetLeft;
			  var mouseY = e.pageY - this.offsetTop;
			  paint = true;
			  console.log(mouseX, mouseY, paint);
			  addClick(mouseX, mouseY, false);
			  redraw();
			});
			$("canvas.node" + $num).mousemove(function(e){
			  if(paint){
			    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
			    redraw();
			  }
			});
			$("canvas.node" + $num).mouseup(function(e){
			  paint = false;
			});
			$("canvas.node" + $num).mouseleave(function(e){
			  paint = false;
			});
			var clickX = new Array();
			var clickY = new Array();
			var clickDrag = new Array();
			var paint;

			function addClick(x, y, dragging)
			{
			  clickX.push(x);
			  clickY.push(y);
			  clickDrag.push(dragging);
			}
			function redraw(){
			  context.clearRect(0, 0, 700, 700); // Clears the canvas

			  context.strokeStyle = "#32cd32";
			  context.lineJoin = "round";
			  context.lineWidth = 1;
						
			  for(var i=0; i < clickX.length; i++) {		
			    context.beginPath();
			    if(clickDrag[i] && i){
			      context.moveTo(clickX[i-1], clickY[i-1]);
			     }else{
			       context.moveTo(clickX[i], clickY[i]);
			     }
			     //console.log(clickX[i], clickY[i])
			     context.lineTo(clickX[i], clickY[i]);
			     context.closePath();
			     context.stroke();
			  }
			}

			$("canvas").css("display", "none");
	});

});
function reload() {
  location.reload();
}

size1 = 5;
color1 = "black";
window.onload = function() {
	var myCanvas = document.getElementById("myCanvas");
	var ctx = myCanvas.getContext("2d");
    
    // Fill Window Width and Height
    myCanvas.width = window.innerWidth;
	myCanvas.height = window.innerHeight;
	
	// Set Background Color
    ctx.fillStyle="#fff";
    ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
	
    // Mouse Event Handlers
	if(myCanvas){
		var isDown = false;
		var canvasX, canvasY;
		ctx.lineWidth = size1;
    ctx.lineCap = "round";
    ctx.globalAlpha = 0.1;
		
		$(myCanvas)
		.mousedown(function(e){
			isDown = true;
      ctx.globalAlpha = 0.1;
			ctx.beginPath();
			canvasX = e.pageX - myCanvas.offsetLeft;
			canvasY = e.pageY - myCanvas.offsetTop;
			ctx.moveTo(canvasX, canvasY);
		})
		.mousemove(function(e){
			if(isDown !== false) {
				canvasX = e.pageX - myCanvas.offsetLeft;
				canvasY = e.pageY - myCanvas.offsetTop;
        ctx.globalAlpha = 0.1;
				ctx.lineTo(canvasX, canvasY);
				ctx.strokeStyle = color1;
        ctx.lineWidth = size1;
				ctx.stroke();
			}
		})
		.mouseup(function(e){
			isDown = false;
			ctx.closePath();
		});
	}
	
	// Touch Events Handlers
	draw = {
		started: false,
		start: function(evt) {

			ctx.beginPath();
      ctx.lineCap = "round";
			ctx.moveTo(
				evt.touches[0].pageX,
				evt.touches[0].pageY
			);

			this.started = true;

		},
		move: function(evt) {

			if (this.started) {
				ctx.lineTo(
					evt.touches[0].pageX,
					evt.touches[0].pageY
				);
        ctx.globalAlpha = 0.1;
				ctx.strokeStyle = color1;
        
				ctx.lineWidth = size1;
				ctx.stroke();
			}

		},
		end: function(evt) {
			this.started = false;
		}
	};
	
	// Touch Events
	myCanvas.addEventListener('touchstart', draw.start, false);
	myCanvas.addEventListener('touchend', draw.end, false);
	myCanvas.addEventListener('touchmove', draw.move, false);
	
	// Disable Page Move
	document.body.addEventListener('touchmove',function(evt){
		evt.preventDefault();
	},false);
};
function black() {
  color1 = "black";
}
function blue() {
  color1 = "#00bbff";
}
function red() {
  color1 = "#ed1f48";
}
function green() {
  color1 = "#00ffbf";
}
function purple() {
  color1 = "#c300ff";
}
function yellow() {
  color1 = "#e8ff69";
}
function colors(color) {
  color1 = color;
}
function colorpick() {
  var picker = document.getElementById('head').value;
  color1 = picker;
  
  
  
}


function shiro() {
  color1 = "#fff";
  document.getElementById("slide").value = 30;
}
function noir() {
  color1 = "black";
  size1 = 1;
}

///*
function cc() {
  size1 = document.getElementById("slide").value;

}//*/
setInterval(cc,50);
function screenshot() {
  const screenshotTarget = document.body;

  html2canvas(screenshotTarget).then((canvas) => {
      const base64image = canvas.toDataURL("image/png");
      window.location.href = base64image;
  });
}


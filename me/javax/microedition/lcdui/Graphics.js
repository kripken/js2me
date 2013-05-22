(function () {
	function Graphics(canvas) {
		this.element = canvas;
		this.context = canvas.getContext('2d');
		this.color = '#000';
	}
	Graphics.prototype = {
		$setColor_III_V: function (r, g, b) {
			this.color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
			this.context.fillStyle = this.color;
			this.context.strokeStyle = this.color;
		},
		$fillRect_IIII_V: function (x, y, width, height) {
			this.context.fillRect(x, y, width, height);
		},
		$drawLine_IIII_V: function (x1, y1, x2, y2) {
			this.context.beginPath();
			this.context.moveTo(x1, y1);
			this.context.lineTo(x2, y2);
			this.context.stroke();
			this.context.closePath();
		},
		$setFont_Ljavax_microedition_lcdui_Font__V: function (font) {
			//TODO
		},
		$drawString_Ljava_lang_String_III_V: function (str, x, y, anchor) {
			//TODO: anchor
			this.context.fillText(str, x, y);
		}
			
	};
	js2me.findPackage(js2me.JAVA_ROOT + '.$javax.$microedition.$lcdui')['$Graphics'] = Graphics;
})();
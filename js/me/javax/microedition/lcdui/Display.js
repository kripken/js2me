(function () {
	function Display() {
	}
	Display.prototype = {
		$getDisplay_Ljavax_microedition_midlet_MIDlet__Ljavax_microedition_lcdui_Display_: function (midlet) {
			if (!midlet.display) {
				midlet.display = new Display();
				var element = document.getElementById('screen');
				midlet.display.element = element;
			}
			return midlet.display;
		},
		$setCurrent_Ljavax_microedition_lcdui_Displayable__V: function (displayable) {
			clearTimeout(this.timeout);
			var screen = this.element;
			if (this.current) {
				this.current.active = false;
			}
			this.current = displayable;
			this.timeout = setTimeout(function () {
				if (displayable.title) {
					document.getElementById('title').innerHTML = displayable.title.text;
				}
				screen.innerHTML = '';
				screen.appendChild(displayable.element);
				displayable.active = true;
				displayable.refreshCommands();
			}, 1);
		}
	};
	js2me.findPackage(js2me.JAVA_ROOT + '.$javax.$microedition.$lcdui')['$Display'] = Display;
})();
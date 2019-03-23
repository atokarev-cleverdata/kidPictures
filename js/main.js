document.addEventListener("DOMContentLoaded", function(event) {

	window.addEventListener("keydown", function(event) {
		if (event.keyCode == 8) {
			game.handleBackSpace();
		} else {
			game.onKeyPressed(event.key);
		}
	});

	window.addEventListener("gamestart", function(event) {
		document.getElementById("thumbsup").style.display = 'none';
		game.onLoad();
	});

	window.addEventListener("gamecomplete", function(event) {
		document.getElementById("thumbsup").style.display = 'inline';
		setTimeout(function(){window.dispatchEvent(new Event("gamestart"))}, 5000);
	});

	window.dispatchEvent(new Event("gamestart"));
});
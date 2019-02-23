document.addEventListener("DOMContentLoaded", function(event) {
	var pictures = [
		'ПЯТАЧОК.jpg',
		 'СОВА.png'
	];

	var engKeys = "QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,."
	var rusKeys = "ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ"

	function keyToLetter(key) {
		var upcaseKey = key.toUpperCase();
		var keyIndex = engKeys.indexOf(upcaseKey);
		return (keyIndex == -1) ? upcaseKey : rusKeys[keyIndex];
	};

	function loadPictures() {
		var pictureFile = pictures[Math.floor(Math.random() * pictures.length)];
		console.log("Loading picture ", pictureFile);

		var picture = document.getElementById("picture");
		picture.src = 'images/' + pictureFile;

	};

	function onKeyPressed(key) {
		var letter = keyToLetter(key);
		console.log(letter);
	};

	window.addEventListener("keypress", function(event) {
		onKeyPressed(event.key);
	});

	loadPictures();
});
document.addEventListener("DOMContentLoaded", function(event) {
	var pictures = [
		'ПЯТАЧОК.jpg',
		 'СОВА.png'
	];

	var engKeys = "QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,."
	var rusKeys = "ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ"

	var pictureName = ""
	var position = 0
	var errorsCount = 0

	function keyToLetter(key) {
		var upcaseKey = key.toUpperCase();
		var keyIndex = engKeys.indexOf(upcaseKey);
		return (keyIndex == -1) ? upcaseKey : rusKeys[keyIndex];
	};

	function loadPicture() {
		var pictureFile = pictures[Math.floor(Math.random() * pictures.length)];
		var picture = document.getElementById("picture");
		picture.src = 'images/' + pictureFile;

		pictureName = pictureFile.substring(0, pictureFile.indexOf('.'));

		var text = document.getElementById("text");
		var blanks = ""
		for (var i = 0; i < pictureName.length; i++) {
			blanks += "<span>_</span>"
		}

		text.innerHTML = blanks
	};

	function onKeyPressed(key) {
		var letter = keyToLetter(key);
		if (rusKeys.indexOf(letter) == -1) {
			return;
		}

		var text = document.getElementById("text");
		var span = text.childNodes[position];

		span.textContent = letter;
		span.style.color = (pictureName[position] == letter) ? 'black' : 'red';
		position++;
	};

	window.addEventListener("keypress", function(event) {
		onKeyPressed(event.key);
	});

	loadPicture();
});
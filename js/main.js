document.addEventListener("DOMContentLoaded", function(event) {
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

		document.getElementById("caption").textContent = pictureName;

		var text = document.getElementById("text");
		var blanks = ""
		for (var i = 0; i < pictureName.length; i++) {
			blanks += "<span>_</span>"
		}

		text.innerHTML = blanks
		position = 0;
		errorsCount = 0;
		document.getElementById("thumbsup").style.visibility = 'hidden';
	};

	function onKeyPressed(key) {
		if (position < pictureName.length) {
			var letter = keyToLetter(key);
			if (rusKeys.indexOf(letter) == -1) {
				return;
			}

			var text = document.getElementById("text");
			var span = text.childNodes[position];

			span.textContent = letter;
			if (pictureName[position] != letter) {
				errorsCount++;
				span.style.color = 'red';
			}

			position++;
			checkSuccess();
		}
	};

	function checkSuccess() {
		if (position == pictureName.length && errorsCount == 0) {
			document.getElementById("thumbsup").style.visibility = 'visible';
			setTimeout(loadPicture, 5000)
		}
	}

	function handleBackSpace() {
		if (position > 0) {
			position--;
			var text = document.getElementById("text");
			var span = text.childNodes[position];
			var existingLetter = span.textContent;
			
			if (existingLetter != pictureName[position]) {
				errorsCount--;
				span.style.color = 'black';
			}

			span.textContent = '_';
		}
	}

	window.addEventListener("keydown", function(event) {
		if (event.keyCode == 8) {
			handleBackSpace();
		} else {
			onKeyPressed(event.key);
		}
	});

	loadPicture();
});
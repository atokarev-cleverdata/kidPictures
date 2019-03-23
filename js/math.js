var game = function() {

	var numLeft = 0;
	var numRight = 0;
	var numSum = 0;

	var position = 0;
	var totalLength = 0;
	var errorsCount = 0;

	var potSnippet = '<img src="assets/honeypot.png" height="70">';

	function keyToDigit(key) {
		var result = parseInt(key, 10);
		return Number.isNaN(result) ? -1 : result;
	}

	function checkSuccess() {
		if (position == totalLength && errorsCount == 0) {
			window.dispatchEvent(new Event("gamecomplete"));
		}
	}

	function updateScreen(elemId, digit, isError) {
		
		document.getElementById(elemId);
	}

	return {
		onKeyPressed: function(key) {
			if (position < totalLength) {
				var digit = keyToDigit(key);
				if (digit == -1) {
					return;
				}

				if (position == 0) {
					updateScreen("num-left", digit, digit == numLeft);
				} else if (position == 1) {
					updateScreen("num-right", digit, digit == numRight);
				} else {

				}

				position++;
				checkSuccess();
			}
		},
		handleBackSpace: function() {
			console.log("backspace");
		},
		onLoad: function() {
			numLeft = Math.floor(Math.random() * 9) + 1;
			numRight = Math.floor(Math.random() * 9) + 1;
			numSum = numLeft + numRight;

			document.getElementById("num-left").textContent = "_";
			document.getElementById("num-right").textContent = "_";
			document.getElementById("num-sum").textContent = numSum > 9 ? "__" : "_";

			document.getElementById("pot-left").innerHTML = potSnippet.repeat(numLeft);
			document.getElementById("pot-right").innerHTML = potSnippet.repeat(numRight);

			position = 0;
			totalLength = numSum > 9 ? 4 : 3;
		}
	};
}();

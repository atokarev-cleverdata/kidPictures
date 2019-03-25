var game = function() {

	var limit = 5;

	var numLeft = 0;
	var numRight = 0;
	var numSum = 0;

	var position = 0;
	var totalLength = 0;
	var errorsCount = 0;
	var digits = [];
	var digitValues = [];

	var potSnippet = '<img src="assets/honeypot.png" height="70">';
	var digitSnippet = '<span>_</span>';

	function keyToDigit(key) {
		var result = parseInt(key, 10);
		return Number.isNaN(result) ? -1 : result;
	}

	function checkSuccess() {
		if (position == totalLength && errorsCount == 0) {
			window.dispatchEvent(new Event("gamecomplete"));
		}
	}

	return {
		onKeyPressed: function(key) {
			if (position < totalLength) {
				var digit = keyToDigit(key);
				if (digit == -1) {
					return;
				}

				var span = digits[position];

				span.textContent = digit;
				if (digitValues[position] != digit) {
					errorsCount++;
					span.style.color = 'red';
				}

				position++;
				checkSuccess();
			}
		},
		handleBackSpace: function() {
			if (position > 0) {
				position--;
				var span = digits[position];
				var existingDigit = parseInt(span.textContent, 10);
				
				if (existingDigit != digitValues[position]) {
					errorsCount--;
					span.style.color = 'black';
				}

				span.textContent = '_';
			}
		},
		onLoad: function() {
			numLeft = Math.floor(Math.random() * limit) + 1;
			numRight = Math.floor(Math.random() * limit) + 1;
			numSum = numLeft + numRight;

			document.getElementById("num-left").innerHTML = digitSnippet;
			document.getElementById("num-right").innerHTML = digitSnippet;
			document.getElementById("num-sum").innerHTML = digitSnippet.repeat(numSum > 9 ? 2 : 1);

			document.getElementById("pot-left").innerHTML = potSnippet.repeat(numLeft);
			document.getElementById("pot-right").innerHTML = potSnippet.repeat(numRight);

			digitValues = [numLeft, numRight];
			if (numSum > 9) {
				digitValues.push(Math.floor(numSum / 10));
				digitValues.push(numSum % 10);
			} else {
				digitValues.push(numSum);
			}

			digits = [
				document.getElementById("num-left").childNodes[0],
				document.getElementById("num-right").childNodes[0],
				document.getElementById("num-sum").childNodes[0]
			];

			if (numSum > 9) {
				digits.push(document.getElementById("num-sum").childNodes[1])
			}

			position = 0;
			totalLength = numSum > 9 ? 4 : 3;
		}
	};
}();

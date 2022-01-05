"use strict";
var JsonUnFlat = (function () {
	function JsonUnFlat() {
	}

	JsonUnFlat.unflat = function (json) {
		var unflatten = {};
		var _loop_1 = function (item) {
			var _this;
			var splittedKey = item.split('.');
			splittedKey.map(function (keysPart, i) {
				if (i == 0) {
					_this = unflatten;
				}
				if (/(__proto__|prototype)/.test(keysPart) !== true) {
				    if (!_this[keysPart]) {
				      if (splittedKey.length === i + 1) {
					_this[keysPart] = json[item];
				      }
				      else {
					_this[keysPart] = {};
					_this = _this[keysPart];
				      }
				    }
				    else {
				      _this = _this[keysPart];
				    }
				  }
			});
		};
		for (var item in json) {
			_loop_1(item);
		}
		return unflatten;
	};
	return JsonUnFlat;
}());

module.exports = JsonUnFlat;
module.exports.JsonUnFlat = JsonUnFlat;

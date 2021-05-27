;(function(window) {

	'use strict';

	var LucyDom = {};

	LucyDom.getById = function (root, id) {
		return root.getElementById(id);
	};

	LucyDom.findAll = function (root, selector) {
		if (typeof root.querySelectorAll === 'undefined') {
			return [];
		}

		return root.querySelectorAll(selector);
	};

	LucyDom.find = function (root, selector) {
		if (typeof root.querySelector === 'undefined') {
			return null;
		}

		return root.querySelector(selector);
	};

	LucyDom.getClosest = function (element, selector) {
		if (typeof element.closest === 'undefined') {
			return null;
		}

		return element.closest(selector);
	};

	LucyDom.hasClass = function (element, className) {
		if (typeof element.classList === 'undefined') {
			return false;
		}

		return element.classList.contains(className);
	};

	LucyDom.addClass = function (element, className) {
		if (typeof element.classList === 'undefined') {
			return;
		}

		return element.classList.add(className);
	};

	LucyDom.removeClass = function (element, className) {
		if (typeof element.classList === 'undefined') {
			return;
		}

		return element.classList.remove(className);
	};

	LucyDom.toggleClass = function (element, className) {
		if (typeof element.classList === 'undefined') {
			return;
		}

		return element.classList.toggle(className);
	};

	LucyDom.onEvent = function (eventTarget, eventName, handler) {
		eventTarget.addEventListener(eventName, function (event) {
			var returnValue = handler.apply(this, [event]);

			if (returnValue === false) {
				event.stopPropagation();
				event.preventDefault();
			}
		}, false);
	};

	LucyDom.onChildEvent = function (eventTarget, childSelector, eventName, handler) {
		eventTarget.addEventListener(eventName, function (event) {
			var childElement = LucyDom.getClosest(event.target, childSelector);

			if (childElement !== null) {
				var returnValue = handler.apply(childElement, [event]);

				if (returnValue === false) {
					event.stopPropagation();
					event.preventDefault();
				}
			}
		}, false);
	};


	/**
	 * Add to global namespace
	 */
	window.LucyDom = LucyDom;

})(window);

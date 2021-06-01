;(function(window) {

	'use strict';

	/**
	 * Constructor
	 */
	function LucyModal(title, onOpen, onClose) {
		this._title = title;
		this._active = false;
		this._modal = null;
		this._onOpen = onOpen;
		this._onClose = onClose;
	}


	LucyModal.prototype.open = function() {
		if (this._active) {
			return false;
		}

		if (this._modal === null) {
			this._modal = this._createModal();
		}

		this._onOpen(this._modal);
		LucyDom.addClass(this._modal.container, 'modal--active');
		this._active = true;
	};


	LucyModal.prototype.close = function() {
		if (!this._active) {
			return false;
		}

		if (this._modal === null) {
			return false;
		}

		LucyDom.removeClass(this._modal.container, 'modal--active');
		this._onClose(this._modal);
		this._active = false;
	};


	LucyModal.prototype._createModal = function() {
		var container = document.createElement('div');
		container.setAttribute('class', 'modal__container');
		container.setAttribute('tabindex', '-1');
		container.setAttribute('role', 'dialog');
		container.setAttribute('aria-hidden', 'true');
		container.innerHTML = '<div class="modal">' +
				'<div class="modal__header">' +
					'<a href="#" title="Close" class="modal__close">×</a>' +
					'<div class="modal__title">Dialog</div>' +
				'</div>' +

				'<div class="modal__body">' +
				'</div>' +
			'</div>';

		document.body.appendChild(container);
		var modal = {
			container: container,
			title: LucyDom.find(container, '.modal__title'),
			body: LucyDom.find(container, '.modal__body'),
			closeButton: LucyDom.find(container, '.modal__close')
		};

		modal.title.textContent = this._title;
		var self = this;
		LucyDom.onEvent(modal.closeButton, 'click', function (event) {
			self.close();
			event.preventDefault();
		});

		return modal;
	};


	/**
	 * Add to global namespace
	 */
	window.LucyModal = LucyModal;

})(window);

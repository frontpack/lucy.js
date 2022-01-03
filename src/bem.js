;(function(window) {

	'use strict';

	function LucyBemBlock(blockName, domNode) {
		this.blockName = blockName;
		this.domNode = domNode;
	}


	LucyBemBlock.prototype.each = function(selector, visitor) {
		LucyDom.each(this.domNode, selector, visitor);
	};


	LucyBemBlock.prototype.hasModifier = function(modifier) {
		return LucyDom.hasClass(this.domNode, this._formatModifier(modifier));
	};


	LucyBemBlock.prototype.addModifier = function(modifier) {
		LucyDom.addClass(this.domNode, this._formatModifier(modifier));
	};


	LucyBemBlock.prototype.removeModifier = function(modifier) {
		LucyDom.removeClass(this.domNode, this._formatModifier(modifier));
	};


	LucyBemBlock.prototype.toggleModifier = function(modifier) {
		LucyDom.toggleClass(this.domNode, this._formatModifier(modifier));
	};


	LucyBemBlock.prototype._formatModifier = function(modifier) {
		return this.blockName + '--' + modifier;
	};


	window.LucyBemBlock = LucyBemBlock;

})(window);


;(function(window) {

	'use strict';

	function LucyBemElement(block, elementName, domNode) {
		this.block = block;
		this.elementName = elementName;
		this.domNode = domNode;
	}


	LucyBemElement.prototype.getBlock = function() {
		return this.block;
	};


	LucyBemElement.prototype.hasModifier = function(modifier) {
		return LucyDom.hasClass(this.domNode, this._formatModifier(modifier));
	};


	LucyBemElement.prototype.addModifier = function(modifier) {
		LucyDom.addClass(this.domNode, this._formatModifier(modifier));
	};


	LucyBemElement.prototype.removeModifier = function(modifier) {
		LucyDom.removeClass(this.domNode, this._formatModifier(modifier));
	};


	LucyBemElement.prototype.toggleModifier = function(modifier) {
		LucyDom.toggleClass(this.domNode, this._formatModifier(modifier));
	};


	LucyBemElement.prototype._formatModifier = function(modifier) {
		return this.block.name + '__' + this.elementName + '--' + modifier;
	};


	window.LucyBemElement = LucyBemElement;

})(window);


;(function(window) {

	'use strict';

	function LucyBem(root) {
		this.root = root;
	}


	LucyBem.prototype.eachBlock = function(
		blockName,
		visitor
	) {
		var simpleBlockName = this._extractBlockName(blockName);

		LucyDom.each(this.root, this._formatBlockSelector(blockName), function (element, info) {
			visitor(new LucyBemBlock(simpleBlockName, element), info);
		});
	};


	LucyBem.prototype.onElementEvent = function(
		blockName,
		elementName,
		eventName,
		handler
	) {
		var self = this;
		var simpleBlockName = this._extractBlockName(blockName);
		var simpleElementName = this._extractElementName(elementName);

		LucyDom.onChildEvent(
			this.root,
			this._formatElementSelector(blockName, elementName),
			eventName,
			function (event) {
				var el = this;
				var blockEl = LucyDom.getClosest(el, self._formatBlockSelector(blockName));

				if (blockEl !== null) {
					var block = new LucyBemBlock(simpleBlockName, blockEl);
					var element = new LucyBemElement(block, simpleElementName, el);
					handler(element, event);
				}
			}
		);
	};


	LucyBem.prototype._extractBlockName = function(
		blockName
	) {
		if (typeof blockName === 'object') {
			return blockName.block;
		}

		return blockName;
	};


	LucyBem.prototype._extractElementName = function(
		elementName
	) {
		if (typeof elementName === 'object') {
			return elementName.element;
		}

		return elementName;
	};


	LucyBem.prototype._formatBlockSelector = function(
		blockName,
		elementName
	) {
		if (typeof blockName === 'object') {
			var def = blockName;
			blockName = blockName.block;

			if (typeof def.modifier === 'string') {
				blockName = blockName + '--' + def.modifier;
			}
		}

		return '.' + blockName;
	};


	LucyBem.prototype._formatElementSelector = function(
		blockName,
		elementName
	) {
		if (typeof elementName === 'object') {
			var def = elementName;
			elementName = elementName.element;

			if (typeof def.modifier === 'string') {
				elementName = elementName + '--' + def.modifier;
			}
		}

		return this._formatBlockSelector(blockName) + '__' + elementName;
	};


	window.LucyBem = LucyBem;

})(window);

# Lucy.js

Helpers for vanilla JavaScript.

<a href="https://www.paypal.me/janpecha/5eur"><img src="https://buymecoffee.intm.org/img/button-paypal-white.png" alt="Buy me a coffee" height="35"></a>


## Installation

[Download a latest package](https://github.com/frontpack/lucy.js/releases) or use [Composer](http://getcomposer.org/):

```
composer require frontpack/lucy.js
```

## DOM & events

Include `src/dom.js`.

```js
LucyDom.getById(document, 'element-id');
LucyDom.findAll(document, 'selector'); // returns elements collection
LucyDom.find(document, 'selector'); // returns one element
LucyDom.getClosest(element, 'selector');

LucyDom.hasClass(element, 'class-name');
LucyDom.addClass(element, 'class-name');
LucyDom.removeClass(element, 'class-name');
LucyDom.toggleClass(element, 'class-name');
```

**Element events**

```js
LucyDom.onEvent(eventTarget, 'eventName', handler);

// for example
LucyDom.onEvent(myElement, 'click', function (event) {
	console.log('Clicked!');
	console.log(this); // this === myElement
});
```

**Delegated events**

```js
LucyDom.onChildEvent(eventTarget, 'child selector', 'eventName', handler);

// for example
LucyDom.onChildEvent(myElement, 'a.ajax', 'click', function (event) {
	console.log('AJAX click');
	console.log(this); // this === child
});
```

## Modal

Include `src/modal.js`.

```js
var myModal = new LucyModal('My Title', function (modal) {
	console.log('Modal opened!');
	modal.title.textContent = 'Hello Title!';
	modal.body.innerHTML = '<p>Modal content</p>';
	modal.closeButton.setAttribute('title', 'Close this');

}, function (modal) {
	console.log('Modal closed!');
});
```

------------------------------

License: [New BSD License](license.md)
<br>Author: Jan Pecha, https://www.janpecha.cz/

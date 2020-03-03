# Hornet Widget
A quick cookie clicker addon that makes Garden information display the amount of garden sacrifices.

# How do I load it?
There are a few options.

## Bookmarklet
1. Copy this code and save it as a bookmark.
2. Paste it in the URL section.
3. Whenever you want to load the mod, just click the bookmark!

```js
javascript: (function () {
	Game.LoadMod("https://emeraldsemerald.github.io/HornetWidget/HornetWidget.js");
}());
```

## Userscript
If you instead use Tampermonkey or Greasemonkey, you should be able to use this script instead:

```js
// ==UserScript==
// @name Hornet Widget
// @namespace HornetWidget
// @include https://cookieclicker.eu/cookieclicker/
// @version 1
// @grant none
// ==/UserScript==

var code = "(" + (function() {
    var checkReady = setInterval(function() {
        if (typeof Game.ready !== 'undefined' && Game.ready) {
            Game.LoadMod("https://emeraldsemerald.github.io/HornetWidget/HornetWidget.js");
            clearInterval(checkReady);
        }
    }, 1000);
}).toString() + ")()";

window.eval(code);
```

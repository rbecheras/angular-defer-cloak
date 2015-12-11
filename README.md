# angular-defer-cloak

Angular `defer-cloak` directive  + CSS rules as an improved alternative to the native angular [`ng-cloak` directive](https://docs.angularjs.org/api/ng/directive/ngCloak).

## Installation

    bower install angular-defer-cloak

## Initialisation of your application

```js
angular.module('app',['deferCloak'])
```

```html
<html>
  <head>
    <link rel="stylesheet" href="bower_components/angular-defer-cloak/angular-defer-cloak.min.css">
    <script src="bower_components/angular-defer-cloak/angular-defer-cloak.min.js"></script>
  </head>
  <body data-ng-app="app">
    <!-- ... -->
  </body>
</html>
```

## Usage example


```html

  <div data-defer-cloak data-ng-show="isLoading">
      Loading ...
  </div>
  <div data-defer-cloak class="error-content" data-ng-show="items && items.length === 0 && !isLoading">
      <p class="error-text">No item available</p>
  </div>
  <div data-defer-cloak class="error-content" data-ng-show="errorRetrievingItems">
      <p class="error-text">Can't fetch items</p>
  </div>

  <ul>
      <li data-ng-repeat="item in items">
        {{item.label}}
      </li>
  </ul>
</body>
```

## LICENSE

The MIT License (MIT)

Copyright (c) 2015 Rémi Becheras <rbecheras@sirap.fr> (https://github.com/rbecheras)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

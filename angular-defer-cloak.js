/**
 * angular-defer-cloak.js
 *
 * Released under MIT License.
 * Copyright (c) 2015 Rémi Becheras All rights reserved
 *
 */

(function(){
'use strict';

  angular.module('deferCloak').directive("deferCloak", function () {
      return {
          restrict: 'A',
          link: function (scope, element, attrs) {
              attrs.$set("deferCloak", undefined);
              element.removeClass("defer-cloak");
          }
      };
  });

})();


"use strict";

angular.module('app.ui').directive('smartHtmlPopoverPopup', function () {
    return {
        restrict: "EA",
        replace: true,
        scope: { title: "@", content: "@", placement: "@", animation: "&", isOpen: "&" },
        template: '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title" bind-html-unsafe="title" ng-show="title"></h3><div class="popover-content" bind-html-unsafe="content"></div></div></div>'
    };
});
angular.module('app.ui').directive('smartHtmlPopover',function ($tooltip) {
    return $tooltip("smartHtmlPopover", "popover", "click");
});
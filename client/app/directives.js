angular.module('APP')
    .directive('greetingCenter', ['$document', function ($document) {
        return {
            link: function (scope, element, attr) {

                var contentHeight = $("#map").height(),
                    contentWidth = $("#map").width(),
                    greetingTop = (contentHeight - element.outerHeight()) / 2,
                    greetingLeft = (contentWidth - element.outerWidth()) / 2;


                element.css({
                    top: greetingTop,
                    left: greetingLeft
                });
            }
        };
    }])
    .directive('mapResize', function () {
        var headerHeight = $('header').height();

        return {
            link: function (scope, element, attr) {

                function resize() {
                    var height = $(window).height();

                    element.css({
                        height: height - headerHeight
                    });
                }

                $(window).resize(function () {
                    resize();
                });

                resize();
            }
        };
    });

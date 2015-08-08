angular.module('APP')
    .directive('greetingCenter', ['$document', function ($document) {
        return {
            link: function (scope, element, attr) {

                function resize() {
                    var contentHeight = $("#map").height(),
                        contentWidth = $("#map").width(),
                        greetingTop = (contentHeight - element.outerHeight() - 200) / 2,
                        greetingLeft = (contentWidth - element.outerWidth()) / 2;


                    element.css({
                        top: greetingTop,
                        left: greetingLeft
                    });
                };

                $(window).resize(function () {
                    resize();
                });

                resize();
            }
        };
    }])
    .directive('mapResize', function () {
        var headerHeight = $('header').height();

        return {
            link: function (scope, element, attr) {

                function resize() {
                    var height = $(window).height();

                    if (height <= 400) {
                        element.css({
                            height: 400
                        });
                    } else {
                        element.css({
                            height: height - headerHeight
                        });
                    }
                }

                $(window).resize(function () {
                    resize();
                });

                resize();
            }
        };
    });

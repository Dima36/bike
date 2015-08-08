angular.module('APP')
    .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };
    }])
    .controller('MainCtrl', ['$scope', '$http', '$location', '$rootScope', 'leafletData', function ($scope, $http, $location, $rootScope, leafletData) {

        // Map Default
        var mapdefaults = {
            position: {
                lat: 48.921718,
                lng: 24.709759,
                zoom: 12
            },
            paths: {
                p1: {
                    latlngs: [{
                        lat: 0,
                        lng: 0
                    }]
                }
            },
            layers: {
                relief: {
                    defaultLayer: {
                        name: 'Google',
                        layerType: 'SATELLITE',
                        type: 'google'
                    }
                },
                route: {
                    routeLayer: {
                        name: 'Google',
                        layerType: 'ROADMAP',
                        type: 'google'
                    }
                }
            }
        }


        // Map Config
        angular.extend($scope, {
            defaults: {
                zoomControlPosition: 'topright',
                maxZoom: 18,
                minZoom: 10
            },
            frankivsk: {
                lat: 48.921718,
                lng: 24.709759,
                zoom: 12
            },
            maxbounds: {
                southWest: {
                    lat: 49.890589,
                    lng: 21.514097
                },
                northEast: {
                    lat: 47.813015,
                    lng: 28.105049
                }
            },
            controls: {
                scale: true
            },
            layers: {
                baselayers: mapdefaults.layers.route
            },
            route: {
                p1: {
                    color: 'red',
                    weight: 8,
                    latlngs: []
                }
            }
        });

        console.log();

        // Map path switcher
        $rootScope.$on("$locationChangeStart", function () {
            $scope.location = $location.path();
            $scope.frankivsk = mapdefaults.position;

            if ($scope.location === "/routes") {
                $scope.layers.baselayers = mapdefaults.layers.relief;
            } else {
                $scope.layers.baselayers = mapdefaults.layers.route;
            }
        });

        $http.get("data/data.json").success(function (response) {
            $scope.mapContent = response;
        });



        $scope.loadRoute = function loadRoute(roadName) {
            var data = $scope.mapContent[roadName];

            $scope.i = 0;
            $scope.route.p1.latlngs = [];
            angular.forEach(data.latlngs, function () {
                $scope.route.p1.latlngs.push({
                    lat: data.latlngs[$scope.i][1],
                    lng: data.latlngs[$scope.i][0]
                });
                $scope.i++
            });

            $scope.title = data.title;
            $scope.complexity = data.complexity;
            $scope.info = data.info;
            $scope.frankivsk = data.location;

        };
}]);





angular.module('APP').animation('.reveal-animation', function () {
    return {
        enter: function (element, done) {
            element.css('display', 'none');
            element.fadeIn(600, done);
            return function () {
                element.stop();
            }
        },
        leave: function (element, done) {
            element.fadeOut(600, done)
            return function () {
                element.stop();
            }
        }
    }
})

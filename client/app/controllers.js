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
            paths: {
                route: {
                    color: 'red',
                    weight: 8,
                    latlngs: [{
                        lat: 0,
                        lng: 0
                }]
                }
            }
        });



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


        // Map data
        $http.get('data/routes.json').success(function (data) {
            $scope.mapContent = data;
        });




        $scope.loadRoute = function loadRoute(roadName) {
            var data = $scope.mapContent[roadName];

            $scope.title = data.title;
            $scope.complexity = data.complexity;
            $scope.info = data.info;
            $scope.frankivsk = data.location;
            $scope.paths.route.latlngs = data.latlngs;





            console.log($scope.title);
            console.log($scope.complexity);
            console.log($scope.info);

            console.log(data.latlngs);
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

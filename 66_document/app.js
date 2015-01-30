var app = angular.module('app', []);

app.controller('DocumentController', ['$scope', '$document', function($scope, $document)
{
    $scope.title       = $document[0].title;
    $scope.windowTitle = angular.element(window.document)[0].title;
}]);
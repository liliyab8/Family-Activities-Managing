
app.controller("famNavbar", function($scope, user, $location) {
    $scope.isUserLoggedIn = function() {
        return user.isLoggedIn();
    }

    $scope.logout = function() {
        user.logout();
        $location.path("/");
    }
})
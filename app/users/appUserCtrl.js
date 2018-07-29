app.controller('appUserCtrl', function($scope, user, $location, recipes) {

   // Checking if the user is logged in, if not navigating back to home page
    if (!user.isLoggedIn()) {
        $location.path("/");
        return;
    }
    else {
        $location.path("/appUser");
        return;
    }

    
})
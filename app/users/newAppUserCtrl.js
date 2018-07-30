app.controller("newAppUserCtrl", function($scope, user, $location) {
 // Checking if the user is logged in, if not navigating back to home page
 if (!user.isLoggedIn()) {
    $location.path("/");
    return;
}
else {
    $location.path("/newAppUser");
    return;
}
   
})
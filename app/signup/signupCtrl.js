app.controller("signupCtrl", function ($scope, user, $location) {

    $scope.email = "";
    $scope.password = "";
    $scope.image = "";
    $scope.invalidLogin = false;

    $scope.signUp = function () {
        $scope.invalidLogin = false;              
            user.signUp($scope.first_name, $scope.last_name, $scope.email, $scope.password, $scope.image).then(function (activeUser) {               
                $location.path("/newAppUser");
                
            }, function () {
                $scope.invalidLogin = true;
            })        
    }
    // $scope.createUserCard = function () {
    //     userCard.createUserCard({
    //         first_name = $scope.first_name,
    //         last_name = $scope.last_name,
    //         email = $scope.email,
    //         password = $scope.password,
    //         image = $scope.image,
    //         // imageUrl: $scope.image.dataURL, userId: user.getActiveUser().id
    //     }).then(function () {
    //         $location.path("/newAppUser")
    //     }, function (err) {
    //         console.log(err);
    //     })
    // }

    // return {
    //     signUp: signUp
    //     // createUserCard: createUserCard
    // }

})

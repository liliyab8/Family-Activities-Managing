app.factory('user', function ($http, $q) {

    var activeUser = null;

    usersCardsArray = [
        {
            first_name: "Mila",
            last_name: "Belogolov",
            email: "liliya.belogolov@gmail.com",
            password: "123",
            image: "C:\Users\USER\Pictures\Saved Pictures\mila.jpg"
        },
        {
            first_name: "Vanesa",
            last_name: "Belogolov",
            email: "liliya.belogolov@gmail.com",
            password: "123",
            image: "C:\Users\USER\Pictures\Saved Pictures\vanesa.JPG"
        }
    ];

    function User(plainUser) {
        this.first_name = plainUser.first_name;
        this.last_name = plainUser.last_name;
        this.email = plainUser.email;
        this.password = plainUser.password;
        this.image = plainUser.image;
    }

    function User(first_name, last_name, email, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    function User(first_name, last_name, email, password, image) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
        this.image = image;
    }

    function isLoggedIn() {
        return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function login(email, password) {
        var async = $q.defer();
        var firstUserUrl = "https://family-managment.herokuapp.com/users";

        $http.get(firstUserUrl).then(function (response) {
            var users = response.data;
            for (i = 0; i < users.length; i++) {
                if (users[i].email == email && users[i].password == password) {
                    activeUser = new User(users[i]);
                }
            }
            async.resolve(activeUser);
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    }

    function signUp(first_name, last_name, email, password, image) {
        var async = $q.defer();
        var firstUserUrl = "https://family-managment.herokuapp.com/users";
        var user = new User(first_name, last_name, email, password, image);
        $http.post(firstUserUrl, user).then(function (response, status) {
            activeUser = response.data;
            usersCardsArray.push(user);
            async.resolve(activeUser);
        }, function (err) {
            async.reject(err);
        });
        return async.promise;
    }
    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout,
        signUp: signUp
    }
}) 

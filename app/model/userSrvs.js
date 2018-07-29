app.factory('user', function($http, $q) {

    var activeUser = null;

    function User(plainUser) {
       this.fname = plainUser.fname;
       this.lname = plainUser.lname;
       this.email = plainUser.email;
   } 

   function isLoggedIn() {
    return activeUser ? true : false;
    }

    function logout() {
        activeUser = null;
    }

    function login(email, password) {
       var async = $q.defer();
        if (email === "liliya.belogolov@gmail.com" && password === "12345") {
           activeUser = new User({fname:"Liliya", lname:"Belogolov", email:email})
           async.resolve(activeUser);
       } else {
           async.reject();
       }
        return async.promise;
   }
    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout
        }
   }
}) 

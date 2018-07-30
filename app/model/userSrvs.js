app.factory('user', function($http, $q) {

    var activeUser = null;

    function User(plainUser) {
       this.id = plainUser.id;
       this.first_name = plainUser.first_name;
       this.last_name = plainUser.last_name;
       this.email = plainUser.email;
       this.password = plainUser.password;
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
       
        $http.get(firstUserUrl).then(function(response) {
           var users = response.data;
           for(i = 0; i<users.length; i++ ){
                if(users[i].email == email && users[i].password == password){
                    activeUser = new User(users[i]);
                }
           }           
            async.resolve(activeUser);
        }, function(err) {
            async.reject(err);
        });    
        return async.promise;
      
   }
    return {
        login: login,
        isLoggedIn: isLoggedIn,
        logout: logout
        }   
}) 

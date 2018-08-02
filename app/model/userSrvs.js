app.factory('user', function($http, $q) {

    var activeUser = null;

    function User(plainUser) {
    //    this.id = plainUser.id;
       this.first_name = plainUser.first_name;
       this.last_name = plainUser.last_name;
       this.email = plainUser.email;
       this.password = plainUser.password;
   } 

   function User(first_name, last_name, email, password) {
    // this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
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

   function signUp(first_name, last_name, email, password) {
    var async = $q.defer();
    var firstUserUrl = "https://family-managment.herokuapp.com/users";        
    var user = new User(first_name, last_name, email, password);
     $http.post(firstUserUrl, user).then(function(response, status) {
        activeUser = response.data;       
        // users.push(user) ;          
        async.resolve(activeUser);
     }, function(err) {
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

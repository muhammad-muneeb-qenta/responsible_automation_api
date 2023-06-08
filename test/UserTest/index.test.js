describe('POST | Login Endpoints', function() {

    // it('should give valid token', function() {
    //     var login = require('./Valid_login.js');
    //     return login();
    // });

    it('create usr', function() {
        var login = require('./createUser.js');
        return login();
    });
    
});
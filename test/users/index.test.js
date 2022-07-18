describe('Users Endpoints', function() {
var seed;

    before(function() {
        return require('./before.test.js')().then((data)=>{
            seed = data;
        });
    });
    it('should give Not Authorized message', function() {
        var fetchUser = require('./fetchUser-withoutAuthToken');
        return fetchUser();
    });
    it('should give Invalid Authorization Token Message', function() {
        var fetchUser = require('./fetch-user-with-invalidAuth');
        return fetchUser();
    });
    it('should give Valid User Data on login', function() {
        var fetchUser = require('./fetch-user-on-login');
        return fetchUser(seed);
    });
});
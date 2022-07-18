describe('POST | Auth Endpoints', function() {

    it('should give valid token', function() {
        var auth = require('./login-valid-payload.js');
        return auth();
    });
    it('should give message "email or password is not valid"', function() {
        var auth = require('./login-bad-password.js');
        return auth();
    });
    it('should give message "Unable to verify Authorization Header"', function() {
        var auth = require('./login-invlaid-authtoken');
        return auth();
    });
});
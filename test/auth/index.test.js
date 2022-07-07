describe('POST | Auth Endpoints', function() {

    it('should give valid token', function() {
        return require('./login-valid-payload.js');
    });
    it('should give message "email or password is not valid"', function() {
        return require('./login-bad-password.js');
    });
    it('should give message "Unable to verify Authorization Header"', function() {
        return require('./login-invlaid-authtoken');
    });
});
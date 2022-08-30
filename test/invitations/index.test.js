describe('User Invitation End Points', function(){
var seed;
    before(function(){
        return require('./before.test.js')().then((data)=>{
            seed=data;
        })
    });
    it('Should invite a User', function(){
        var inviteAUser = require('./inviteAUserForSpecificOrg.js');
        return inviteAUser(seed.token_id, seed.org_id)
    });
    it('Should invite An Admin', function(){
        var inviteAnAdmin = require('./inviteAnAdminForSpecificOrg.js');
        return inviteAnAdmin(seed.token_id, seed.org_id)
    });
    it('Should show message "User Already exist"', function(){
        var inviteExistingUser = require('./inviteExistingUser.js');
        return inviteExistingUser(seed.token_id, seed.org_id)
    });
    it('Should show message "Forbidden"', function(){
        var inviteUserWithInvalidOrgId = require('./inviteUserwithInvalidOrgId');
        return inviteUserWithInvalidOrgId(seed.token_id)
    });
    it('Should show message "Unable to verify Authorization Header"', function(){
        var inviteUserWithInvalidAuth = require('./inviteUserWithInvalidAuth.js');
        return inviteUserWithInvalidAuth(seed.org_id)
    });
});
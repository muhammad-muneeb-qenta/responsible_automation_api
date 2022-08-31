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
    it('Should be able to Suspend User', function(){
        var suspenduser = require('./suspendUser.js');
        return suspenduser(seed.token_id, seed.org_id, seed.user_id)
    });
    it('Should not be able to Suspend already suspedned User', function(){
        var suspendalreadySuspendedUser = require('./suspendalreadySuspendedUser.js');
        return suspendalreadySuspendedUser(seed.token_id, seed.org_id, seed.user_id)
    });
    it('Should be able to Restore User', function(){
        var restoreUser = require('./restoreUser.js');
        return restoreUser(seed.token_id, seed.org_id, seed.user_id)
    });
    it('Should not be able to restore already restored User', function(){
        var suspendalreadySuspendedUser = require('./restoreAlreadyRestoredUser.js');
        return suspendalreadySuspendedUser(seed.token_id, seed.org_id, seed.user_id)
    });
    it('Should not be able to suspend loggedin User', function(){
        var suspendloggedinUser = require('./suspendloggedinUser.js');
        return suspendloggedinUser(seed.token_id, seed.org_id, seed.user_id_A)
    });
});
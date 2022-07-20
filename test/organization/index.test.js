describe('Organizations End Points', function() {
var seed;

    before(function() {
        return require('./before.test.js')().then((data)=>{
            seed = data;
        });
    });
        it('Shoud create Orgainzation with Type "MINER"', function(){
        var createAnOrg = require('./createAnOrg-with-valid-payload.js');
        return createAnOrg(seed.token_id, seed.user_id ,'Miner');
    });
        it('Shoud create Orgainzation with Type "REFINER"', function(){
        var createAnOrg = require('./createAnOrg-with-valid-payload.js');
        return createAnOrg(seed.token_id, seed.user_id ,'Refiner');
    });
        it('Shoud create Orgainzation with Type "Logistic Operator"', function(){
        var createAnOrg = require('./createAnOrg-with-valid-payload.js');
        return createAnOrg(seed.token_id, seed.user_id ,'Logistics Operator');
    });
        it('Shoud create Orgainzation with Type "Vault"', function(){
        var createAnOrg = require('./createAnOrg-with-valid-payload.js');
        return createAnOrg(seed.token_id, seed.user_id ,'Vault');
    });
        it('Shoud show message "Unable to verify Authorization Header"', function(){
        var createAnOrg = require('./createAnOrg-with-inValid-auth.js');
        return createAnOrg();
    });
        it('Shoud show message "Invalid Properties"', function(){
        var createAnOrg = require('./createAnOrg-without-Payload.js');
        return createAnOrg(seed.token_id);
    });
        it('Shoud show message "Forbiden"', function(){
        var createAnOrg = require('./createAnOrg-withOther-Orgtype.js');
        return createAnOrg('Miner');
    });
});
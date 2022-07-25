describe('Retire / Restore API END Points', function(){

let seed;

    before (function(){
        return require ('./before.test.js')().then((data)=>{
            seed = data;
        })
    })
    it('Should be able to Retire Product', function(){
        var retireProduct = require ('./retireProduct.js');
        return retireProduct (seed.token_id, seed.org_id, seed.product_id_retire)
    });
    it('Retire Product | Should give message "State Conflict / Already updated to active - false"', function(){
        var retireProduct = require ('./retire-already-retiredProduct.js');
        return retireProduct (seed.token_id, seed.org_id, seed.product_id_restore)
    });
    it('Retire Product | Should give message "Unable to verify Authorization Header"', function(){
        var retireProduct = require ('./retireProduct-invalidAuth.js');
        return retireProduct (seed.org_id, seed.product_id_retire)
    });
    it('Should be able to Restore Product', function(){
        var restoreProduct = require ('./restoreProduct.js');
        return restoreProduct (seed.token_id, seed.org_id, seed.product_id_restore)
    });
    it('Restore Product | Should give message "State Conflict / Already updated to active - true"', function(){
        var restoreProduct = require ('./retire-already-retiredProduct.js');
        return restoreProduct (seed.token_id, seed.org_id, seed.product_id_retire)
    });
    it('Restore Product | Should give message "Unable to verify Authorization Header"', function(){
        var restoreProduct = require ('./restoreProduct-invalidAuth.js');
        return restoreProduct (seed.org_id, seed.product_id_restore)
    });
});
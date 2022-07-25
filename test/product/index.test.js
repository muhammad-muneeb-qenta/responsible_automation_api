describe('Product GET end point', function () {
let seed;

    before (function(){
        return require ('./before.test.js')().then((data)=>{
            seed = data;
        })
    })

    it('Should give the list of product', function(){
        var getProductList = require('./get-product-list-with-validAuth.js');
        return getProductList(seed.token_id, seed.org_id);
    });
    it('Should give Message "Unable to verify Authorization Header"', function(){
        var getProductList = require('./get-product-list-with-InvalidAuth.js');
        return getProductList(seed.org_id);
    });
    it('Should give Message "Forbidden"', function(){
        var getProductList = require('./get-product-with-invalid-orgId.js');
        return getProductList(seed.token_id);
    });
    it('Should give Message "Not Authorized"', function(){
        var getProductList = require('./get-product-without-auth');
        return getProductList(seed.org_id);
    });
    it('Should give the specific number of records in product list', function(){
        var getProductList = require('./get-specificNumberOf-products.js');
        return getProductList(seed.token_id, seed.org_id);
    });
    it('Should give records of entered search value', function(){
        var getProductList = require('./get-product-using-searchValue.js');
        return getProductList(seed.token_id, seed.org_id);
    });
    it('Should give records of entered Invalid search value', function(){
        var getProductList = require('./get-product-using-inValid-searchValue.js');
        return getProductList(seed.token_id, seed.org_id);
    });
    it('Should run Product Overall Flow (Create-Restore-Retire)', function(){
        var getProductList = require('./create-retire-restore-product.js');
        return getProductList(seed.token_id, seed.org_id, 'Sample');
    });
});
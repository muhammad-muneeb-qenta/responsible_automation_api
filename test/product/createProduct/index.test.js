var exec = require ('./before.test.js')

describe('Product POST end point', function () {
let seed;
    before (function(){
        return exec.requiredDataForMiner().then((data)=>{
            seed = data;
        })
    }) 
    it('Should give "Unable to verify Authorization Header"', function(){
        var createProduct = require('./create-product-with-inValid-Auth.js');
        return createProduct(seed.company_prefix, "Doré");
    });

    it('Should give "Not Authorized"', function(){
        var createProduct = require('./create-product-without-auth');
        return createProduct(seed.company_prefix, "Doré");
    });

    it('Should be able to create Product without Asset Schema', function(){
        var createProduct = require('./create-product-without-assetSchema.js');
        return createProduct(seed.token_id, seed.company_prefix, "Doré");
    });
    it('Should be able to create Product without Shared properties', function(){
        var createProduct = require('./create-product-without-shared-properties.js');
        return createProduct(seed.token_id, seed.company_prefix, "Doré");
    });
    it('Should give message "invalid property"', function(){
        var createProduct = require('./create-product-with-itemRef-moreThen-6digit.js');
        return createProduct(seed.token_id, seed.company_prefix, "Doré");
    });
    it('Should give message "Duplicate Entity"', function(){
        var createProduct = require('./create-product-with-duplicate-itemRef.js');
        return createProduct(seed.token_id, seed.company_prefix, "Doré");
    });

describe ('Bullion Negative Test', function(){
    before (function(){
        return exec.requiredDataForRefiner().then((data)=>{
            seed = data;
        })
    });
    it('Should give message "Net Weight is missing"', function(){
        var createProduct = require('./create-product-bullion-without-netWeight.js');
        return createProduct(seed.token_id, seed.company_prefix, "Bullion");
    });
});

describe('Miner', function () {

    before (function(){
        return exec.requiredDataForMiner().then((data)=>{
            seed = data;
        })
    }) 
    it('Should create Doré product', function(){
        var createProduct = require('./create-products.js');
        return createProduct(seed.token_id, seed.company_prefix, "Doré");
    });
    it('Should create Sample product', function(){
        var createProduct = require('./create-products.js');
        return createProduct(seed.token_id, seed.company_prefix, "Sample");
    });
});
describe('Refiner', function () {
    before (function(){
        return exec.requiredDataForRefiner().then((data)=>{
            seed = data;
        })
    }) 
    it('Should create Batch product', function(){
        var createProduct = require('./create-products.js');
        return createProduct(seed.token_id, seed.company_prefix, "Batch");
    });
    it('Should create Bullion product', function(){
        var createProduct = require('./create-product-bullion.js');
        return createProduct(seed.token_id, seed.company_prefix, "Bullion");
    });
   
});
describe('Logistics Operator', function () {
    before (function(){
        return exec.requiredDataForLogistics().then((data)=>{
            seed = data;
        })
    }) 
    it('Should create Doré product', function(){
        var createProduct = require('./create-products.js');
        return createProduct(seed.token_id, seed.company_prefix, "Doré");
    });  
});
describe('Vault', function () {
    before (function(){
        return exec.requiredDataForvault().then((data)=>{
            seed = data;
        })
    }) 
    it('Should create Doré product', function(){
        var createProduct = require('./create-products.js');
        return createProduct(seed.token_id, seed.company_prefix, "Doré");
    });  
});
});
var exec = require ('./before.test.js')

describe('Product POST end point', function () {
let seed;

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
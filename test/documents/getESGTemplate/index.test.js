describe('ESG Document Upload EndPoints ', function() {

    it('Should give ESG template for Miner', function(){
        var getEsgTemplateMiner = require('./esgDocumentTemplate-Miner.js');
        return getEsgTemplateMiner('miner');
    });
    it('Should give ESG template for Refiner', function(){
        var getEgsTempalteRefiner = require('./esgDocumentTemplate-Refiner.js');
        return getEgsTempalteRefiner('refiner');
    });
    it('Should give ESG template for Vault', function(){
        var getEgsTempaltevault = require('./esgDocumentTemplate-Vault.js');
        return getEgsTempaltevault('vault');
    });
    it('Should give ESG template for Logistics Operator', function(){
        var getEgsTempalteLO = require('./esgDocumentTemplate-LO.js');
        return getEgsTempalteLO('lo');
    });
});
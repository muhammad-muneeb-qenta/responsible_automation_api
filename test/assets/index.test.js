var exec = require('./before.test.js')

describe('Create an Asset End Point - Miner', function () {
let seed;

    before (function(){
        return exec.requiredDataForMiner().then((data)=>{
            seed = data;
        })
    });

    it('Should Create an Asset - Dore', function(){
        var createAnAsset = require('./createAnAsset-Dore.js');
        return createAnAsset(seed.token_id, seed.org_id, seed.company_prefix, 'Dore');
    });

    it('Should Create an Asset - Sample', function(){
        var createAnAsset = require('./createAnAsset-Sample');
        return createAnAsset(seed.token_id, seed.org_id, seed.company_prefix, 'Sample');
    });
});

describe('Create an Asset End Point - Refiner', function () {
let seed;

    before (function(){
        return exec.requiredDataForRefiner().then((data)=>{
            seed = data;
        })
    });

    it('Should Create an Asset - Batch', function(){
        var createAnAsset = require('./createAnAsset-Batch.js');
        return createAnAsset(seed.token_id, seed.org_id, seed.company_prefix, 'Batch');
    });

    it('Should Create an Asset - Bullion', function(){
        var createAnAsset = require('./createAnAsset-Bullion');
        return createAnAsset(seed.token_id, seed.org_id, seed.company_prefix, 'Bullion');
    });
});
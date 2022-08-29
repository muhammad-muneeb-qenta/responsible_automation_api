var exec = require ('./before.test.js')

describe('Get ESG Accreditation Data and categories EndPoints ', function() {
let seed;
describe ('', function(){
    before (function(){
        return exec.requiredDataForMiner().then((data)=>{
            seed = data;
        })
    });
    it('Should give Accreditation Data and categories of Miner', function(){
        var getAccreditationData = require('./esgAccreditationAndCategories.js');
        return getAccreditationData(seed.token_id, seed.org_id);
    });
});
describe ('', function(){
    before (function(){
        return exec.requiredDataForRefiner().then((data)=>{
            seed = data;
        })
    });
    it('Should give Accreditation Data and categories of Refiner', function(){
        var getAccreditationData = require('./esgAccreditationAndCategories.js');
        return getAccreditationData(seed.token_id, seed.org_id);
    });
});
describe ('', function(){
    before (function(){
        return exec.requiredDataForLogistics().then((data)=>{
            seed = data;
        })
    });
    it('Should give Accreditation Data and categories of Logistics Operator', function(){
        var getAccreditationData = require('./esgAccreditationAndCategories.js');
        return getAccreditationData(seed.token_id, seed.org_id);
    });
});
describe ('', function(){
    before (function(){
        return exec.requiredDataForvault().then((data)=>{
            seed = data;
        })
    });
    it('Should give Accreditation Data and categories of Vault', function(){
        var getAccreditationData = require('./esgAccreditationAndCategories.js');
        return getAccreditationData(seed.token_id, seed.org_id);
    });
});
describe ('Negavtive Cases', function(){
    before (function(){
        return exec.requiredDataForMiner().then((data)=>{
            seed = data;
        })
    });
    it('Should give Forbidden Message', function(){
        var getAccreditationData = require('./esgAccreditationAndCategories-InavlidData.js');
        return getAccreditationData(seed.token_id);
    });
    it('Should give Not Authorized Message', function(){
        var getAccreditationData = require('./esgAccreditationAndCategories-withoutAuth.js');
        return getAccreditationData(seed.org_id);
    });
});
});
var exec = require ('./before.test.js')

describe('POST ESG Accreditation Data and categories EndPoints', function(){
let seed;

    describe('Miner Accreditations and ESG Factors', function(){
        before(function(){
            return exec.requiredDataForMiner().then((data)=>{
                seed=data;
            })
        })
        it('Should POST Accreditation Data for Miner', function(){
            var postAccreditationDataForMiner = require ('./postAccreditationDataForMiners.js');
            return postAccreditationDataForMiner(seed.token_id, seed.org_id);
        })
        it('Should POST Accreditation Data Along with category and Sub category for Miner', function(){
            var postAccreditationDataForMiner = require ('./postAccreditationDataWithCatSubCatForMiner.js');
            return postAccreditationDataForMiner(seed.token_id, seed.org_id);
        })
        it('Should show message "Accreditation Data not Found"', function(){
            var postAccreditationDataForMiner = require ('./postInvalidAccreditationDataForMiner.js');
            return postAccreditationDataForMiner(seed.token_id, seed.org_id);
        })
        it('Should show message "Category not Found"', function(){
            var postAccreditationDataForMiner = require ('./postInvalidCategoryForMiner.js');
            return postAccreditationDataForMiner(seed.token_id, seed.org_id);
        })
        it('Should show message "Sub Category not Found"', function(){
            var postAccreditationDataForMiner = require ('./postInvalidSubCategoryForMiner.js');
            return postAccreditationDataForMiner(seed.token_id, seed.org_id);
        })
    })
describe('Refiners Accreditations and ESG Factors', function(){
    let seed;
        before(function(){
            return exec.requiredDataForRefiner().then((data)=>{
                seed=data;
            })
        })
        it('Should POST Accreditation Data for Refiner', function(){
            var postAccreditationDataForRefiner = require ('./postAccreditationDataForRefiner.js');
            return postAccreditationDataForRefiner(seed.token_id, seed.org_id);
        })
        it('Should POST Accreditation Data Along with category and Sub category for Refiner', function(){
            var postAccreditationDataForRefiner = require ('./postAccreditationDataWithCatSubCatForRefiner.js');
            return postAccreditationDataForRefiner(seed.token_id, seed.org_id);
        })
        it('Should show message "Accreditation Data not Found"', function(){
            var postAccreditationDataForRefiner = require ('./postInvalidAccreditationDataForRefiner.js');
            return postAccreditationDataForRefiner(seed.token_id, seed.org_id);
        })
        it('Should show message "Category not Found"', function(){
            var postAccreditationDataForRefiner = require ('./postInvalidCategoryForRefiner.js');
            return postAccreditationDataForRefiner(seed.token_id, seed.org_id);
        })
        it('Should show message "Sub Category not Found"', function(){
            var postAccreditationDataForRefiner = require ('./postInvalidSubCategoryForRefiner.js');
            return postAccreditationDataForRefiner(seed.token_id, seed.org_id);
        })
    })
});
describe('Reports End Points', function() {
var seed;

    before(function() {
        return require('./before.test.js')().then((data)=>{
            seed = data;
        });
    });

    // it('Should give valid Report Data for Specific Org', function(){
    //     var fetchReportData = require('./fetch-reportData-with-valid-Auth.js');
    //     return fetchReportData(seed.token_id, seed.org_id);
    // });
    it('Shoud show message Unable to verify Authorization Header', function(){
        var fetchReportData = require('./fetch-reportData-with-invalid-auth.js');
        return fetchReportData(seed.org_id);
    });
    it('Should show unauthorized Message', function(){
        var fetchReportData = require('./fetch-reportData-without-auth.js');
        return fetchReportData(seed.org_id);
    });    
    // it('should show State Confilit Message', function(){
    //     var fetchReportData = require('./fetch-reportData-with-invalid-orgID');
    //     return fetchReportData(seed.token_id);
    // });
    it('Should show Orgization data', function(){
        var fetchOrgData = require('../organization/get-organization-data.js');
        return fetchOrgData(seed.token_id, seed.org_id);
    }); 
});
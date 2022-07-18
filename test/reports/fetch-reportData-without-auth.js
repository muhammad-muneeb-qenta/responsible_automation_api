require ('should');
const { assert } = require('chai');
const supertest =  require ('supertest');
const config = require ('../../config.json');
const request = supertest(config['BASE_URL'])


module.exports = fetchReportData;

async function fetchReportData(org_id) {
   
    const ORG_ID = org_id;
    const EXPECTED_RESPONSE = {
            "error": "10004",
            "message": "Not Authorized"
    }
    
    return await request 
        .get(`/2.0/organization/${ORG_ID}/report`)
        .expect(401)
        .then((resp)=>{
            assert.ok(resp);
            resp.body.should.containEql(EXPECTED_RESPONSE);
        });
};
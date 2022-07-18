require ('should');
const { assert } = require('chai');
const supertest =  require ('supertest');
const config = require ('../../config.json');
const request = supertest(config['BASE_URL'])


module.exports = fetchReportData;

async function fetchReportData(org_id) {
   
    const TOKEN = "abc123";
    const ORG_ID = org_id;
    // const EXPECTED_RESPONSE = {
    //         "error": "10004",
    //         "message": "Not Authorized"
    // }
    const EXPECTED_RESPONSE = {
        "reason": "Unable to verify Authorization Header"
    }
    
    return await request 
        .get(`/2.0/organization/${ORG_ID}/report`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(401)
        .then((resp)=>{
            assert.ok(resp);
            resp.body.should.containEql(EXPECTED_RESPONSE);
        })
};
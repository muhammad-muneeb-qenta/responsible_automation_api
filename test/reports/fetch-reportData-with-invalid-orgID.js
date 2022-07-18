const { assert } = require('chai');
const supertest =  require ('supertest');
const config = require ('../../config.json');
const request = supertest(config['BASE_URL'])


module.exports = fetchReportData;

async function fetchReportData(id_token) {
    
    const TOKEN = id_token;
    const ORG_ID = 'abc123';

    const EXPECTED_RESULT = {
            
    }

    return await request 
        .get(`/2.0/organization/${ORG_ID}/report`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200)
        .then((resp)=>{
            assert.ok(resp);
        })
};
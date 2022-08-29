const { assert } = require('chai');
const supertest  = require ('supertest');
const config = require('../../../config.json');
require('should')

const request = supertest(config['BASE_URL']);

module.exports = postAccreditationDataForRefiner ; 

async function postAccreditationDataForRefiner (token_id, org_id) {

    var TOKEN = token_id ; 
    var TEST_REQUEST = {
    "organization_id": org_id,
    "accreditation_data": [
                "rfa5",
                "rfa4"
            ]
    }

    const respAccreditation_data0 = TEST_REQUEST.accreditation_data[0];
    const respAccreditation_data1 = TEST_REQUEST.accreditation_data[1];

    return await request
        .post(`/2.0/organization/${org_id}/esg`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(201)
        .then((resp)=>{
            assert.ok(resp)
            assert.equal(resp.body.accreditation_data[0], respAccreditation_data0);
            assert.equal(resp.body.accreditation_data[1], respAccreditation_data1);
        })
};
const supertest  = require ('supertest');
const config = require('../../../config.json');
require('should')

const request = supertest(config['BASE_URL']);

module.exports = postInvalidAccreditationDataForMiner ; 

async function postInvalidAccreditationDataForMiner (token_id, org_id) {

    var TOKEN = token_id ; 
    var TEST_REQUEST = {
    "organization_id": org_id,
    "sub_categories": [
            "mnsbcat15",
            "mnsbcat25",
            "mnsbcat35",
            "mnsbcat55"
        ]
    }

    const EXPECTED_RESPONSE = {
            "error": "10001",
            "message": "Invalid Property",
            "detail": " Sub Category not Found "
        }

    return await request
        .post(`/2.0/organization/${org_id}/esg`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(400)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        })
};
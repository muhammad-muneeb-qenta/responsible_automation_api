const config = require ('../../config.json');
const supertest = require ('supertest');
require('should');
const request = supertest(config['BASE_URL']);

module.exports = inviteUserWithInvalidOrgId ; 

async function inviteUserWithInvalidOrgId (token_id) {

    var TOKEN = token_id;

    const TEST_REQUEST = {
            "email": "rgsctest+mat@gmail.com"
        };
    
    var EXPECTED_RESPONSE = {
            "error": "10005",
            "message": "Forbidden"
        }

    return await request
        .post(`/2.0/organization/fKHHAgZH/user?role=admin`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(403)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        })
};
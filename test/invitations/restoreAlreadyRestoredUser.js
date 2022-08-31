const config = require ('../../config.json');
const supertest = require ('supertest');
require('should');
const request = supertest(config['BASE_URL']);

module.exports = restoreAlreadyRestoredUser ; 

async function restoreAlreadyRestoredUser (token_id, org_id, user_id) {

    var EXPECTED_RESPONSE = {
            "error": "10009",
            "message": "State Conflict",
            "detail": "User 'fUUzar8', has been already restored "
        }

    return await request
        .post(`/2.0/organization/${org_id}/user/${user_id}/restore`)
        .set('Authorization', `Bearer ${token_id}`)
        .expect(409)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        })
};
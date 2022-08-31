const config = require ('../../config.json');
const supertest = require ('supertest');
require('should');
const request = supertest(config['BASE_URL']);

module.exports = suspendalreadySuspendedUser ; 

async function suspendalreadySuspendedUser (token_id, org_id, user_id) {

    var EXPECTED_RESPONSE = {
            "error": "10009",
            "message": "State Conflict",
            "detail": "User 'fUUzar8', has been already suspended "
        }

    return await request
        .post(`/2.0/organization/${org_id}/user/${user_id}/suspend`)
        .set('Authorization', `Bearer ${token_id}`)
        .expect(409)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        })
};
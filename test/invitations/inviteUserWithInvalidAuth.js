const config = require ('../../config.json');
const supertest = require ('supertest');
require('should');
const request = supertest(config['BASE_URL']);

module.exports = inviteUserWithInvalidAuth ; 

async function inviteUserWithInvalidAuth (org_id) {

    var TOKEN = "GVkX2lkIjoiZkxIZGVrZiIsIm9yZ19pZCI6WyJmS0hIQVpIIl0sInJvbGVzIjpbImFkbWluIl0sImZpcmViYXNlX2RhdGEiOnsidXNlcl9pZCI6ImZMSGRla2Yi";

    const TEST_REQUEST = {
            "email": "rgsctest+mat@gmail.com"
        };
    
    var EXPECTED_RESPONSE = {
            "reason": "Unable to verify Authorization Header"
        }

    return await request
        .post(`/2.0/organization/${org_id}/user?role=admin`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(401)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        })
};
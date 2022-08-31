const config = require ('../../config.json');
const supertest = require ('supertest');
require('should');
const request = supertest(config['BASE_URL']);

module.exports = suspendloggedinUser ; 

async function suspendloggedinUser (token_id, org_id, user_id_A) {

    var EXPECTED_RESPONSE = {
            "error": "10004",
            "message": "Not Authorized",
            "detail": "LoggedIn user is not allowed to suspend/restore this user"
        }

    return await request
        .post(`/2.0/organization/${org_id}/user/${user_id_A}/suspend`)
        .set('Authorization', `Bearer ${token_id}`)
        .expect(401)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        })
};
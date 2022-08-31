const config = require ('../../config.json');
const supertest = require ('supertest');
require('should');
const request = supertest(config['BASE_URL']);

module.exports = restoreUser ; 

async function restoreUser (token_id, org_id, user_id) {

    var EXPECTED_RESPONSE = {
                "user_id": "fUUzar8",
                "name": "rgsctest+mat1",
                "email": "rgsctest+mat1@gmail.com",
                "status": "active"
            }

    return await request
        .post(`/2.0/organization/${org_id}/user/${user_id}/restore`)
        .set('Authorization', `Bearer ${token_id}`)
        .expect(201)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        })
};
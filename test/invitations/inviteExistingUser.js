const config = require ('../../config.json');
const supertest = require ('supertest');
const { assert } = require('chai');
const request = supertest(config['BASE_URL']);

module.exports = inviteExistingUser ; 

async function inviteExistingUser (token_id, org_id) {

    var TOKEN = token_id;
    
    const TEST_REQUEST = {
            "email": "rgsctest+mat@gmail.com"
        };
    
    var respEmail = TEST_REQUEST.email;
    var respStatus = 409;
    var respReason ="User already exists";

    return await request
        .post(`/2.0/organization/${org_id}/user?role=admin`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(201)
        .then((resp)=>{
            assert.ok(resp)
            assert.equal(resp.body.invited_member.email, respEmail)
            assert.equal(resp.body.organization[0]._id, org_id)
            assert.equal(resp.body.status, respStatus)
            assert.equal(resp.body.reason, respReason)
        })
};
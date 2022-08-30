const config = require ('../../config.json');
const supertest = require ('supertest');
const { assert } = require('chai');
const request = supertest(config['BASE_URL']);

module.exports = inviteAnAdmin ; 

async function inviteAnAdmin (token_id, org_id) {

    var TOKEN = token_id;
    var NUM = Math.floor(Math.random() * 1000);

    const TEST_REQUEST = {
            "email": "rgsctest+api"+NUM+"@gmail.com"
        };
    
    var respEmail = TEST_REQUEST.email;
     var respRole = "admin";

    return await request
        .post(`/2.0/organization/${org_id}/user?role=admin`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(201)
        .then((resp)=>{
            assert.ok(resp)
            assert.equal(resp.body.invited_member.email, respEmail)
            assert.equal(resp.body.invited_member.role, respRole)
            assert.equal(resp.body.organization._id, org_id)
        })
};
require('should');
const supertest = require('supertest');
const config = require ('../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = createAnOrg;

async function createAnOrg (user_id, orgType) {

    const NUM = Math.floor(Math.random() * 100);
    const TOKEN = "abc123";

    const TEST_REQUEST = {
        "name": orgType+"API"+NUM,
        "type": orgType,
    };
    const EXPECTED_RESPONSE = {
        "reason": "Unable to verify Authorization Header"
    };
    return await request 
        .post(`/2.0/organization`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(401)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        });
};
require('should')
const supertest = require('supertest');
const config = require ('../../config.json');
const request = supertest(config['BASE_URL'])

module.exports = createAnOrg;

async function createAnOrg (orgType) {

    const NUM = Math.floor(Math.random() * 100);

    const TEST_REQUEST1 = {
            username: "rgsctest+ac@gmail.com",
            password: "@Welcome12345"
        };
        var response1 = await request
        .post(`/2.0/oauth/token`)
        .send(TEST_REQUEST1)
        var TOKEN_ID = response1.body.id_token;

    const TEST_REQUEST2 = {
        "invited_members":
        [{   
            "email":`rgsctest+api`+NUM+`@gmail.com`,
            "role":"admin"
        }],
        "name": orgType+"API"+NUM,
        "type": orgType,
        "can_redeem":false,
    };
    const EXPECTED_RESPONSE = {
        "error": "10005",
        "message": "Forbidden"
    };
    return await request 
        .post(`/2.0/organization`)
        .set('Authorization', `Bearer ${TOKEN_ID}`)
        .send(TEST_REQUEST2)
        .expect(403)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        });
};
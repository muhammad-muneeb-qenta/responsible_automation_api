require('should');
const supertest = require('supertest')
var assert = require('chai').assert;
var constants = require ('../../utility/constants.js')

const request = supertest(constants.BASE_URL);
describe ('', ()=>{

    it('Unable to verify Authorization Header', async ()=>{
        const TOKEN = 'abc123';
        
        const TEST_REQUEST = {
            username: "hussnain.nadeem+nodev@emergenttech.com",
            password: "@Welcome1234@123"
        };
        const EXPECTED_RESPONSE = {
            "reason": "Unable to verify Authorization Header"
        };
    
        const res = await request
        .post('/2.0/oauth/token')
        .expect(401)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
            // assert.equal(res.body.error, EXPECTED_RESPONSE.error);
            // assert.equal(res.body.message, EXPECTED_RESPONSE.message);
            // assert.equal(res.body.detail, EXPECTED_RESPONSE.detail);
            // assert.equal(res.body, EXPECTED_RESPONSE)
            res.body.should.containEql(EXPECTED_RESPONSE);
    });
});
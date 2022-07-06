import { assert } from "chai";
import supertest from "supertest";

const baseURL = 'https://api.dev.gmint.io/scr/api';
const request = supertest(baseURL);
describe ('POST', ()=>{

    it('should have success response', ()=>{
        const TEST_REQUEST = {
            username: "hussnain.nadeem+nodev@emergenttech.com",
            password: "@Welcome1234"
        };
        const EXPECTED_RESPONSE = {
            grant_type: "password",
            statusCode: "201",
        };
    
    return request
    .post('/2.0/oauth/token')
    .send(TEST_REQUEST)
    .then((res)=>{
        assert.equal(res.statusCode, EXPECTED_RESPONSE.statusCode)
        assert.equal(res.body.grant_type, EXPECTED_RESPONSE.grant_type)
        assert.equal(res.body.email, TEST_REQUEST.username )
    })
    });
});
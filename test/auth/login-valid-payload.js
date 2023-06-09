const supertest = require('supertest');
var assert = require('chai').assert;
var config = require ('../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = auth;

async function auth() {

        const TEST_REQUEST = {
            username: "hussnain.nadeem+nodev@emergenttech.com",
            password: "@Welcome1234"
        };
        const EXPECTED_RESPONSE = {
            grant_type: "password",
            statusCode: "201",
        };
    
        const res = await request
        .post('/2.0/oauth/token')
        .send(TEST_REQUEST)
            assert.equal(res.statusCode, EXPECTED_RESPONSE.statusCode)
            assert.equal(res.body.grant_type, EXPECTED_RESPONSE.grant_type)
            assert.equal(res.body.email, TEST_REQUEST.username )
};
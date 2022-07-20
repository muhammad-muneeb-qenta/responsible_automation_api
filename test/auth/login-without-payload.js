require('should')
const supertest = require('supertest');
var config = require ('../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = auth;

async function auth() {

        const TEST_REQUEST = {
        };
        const EXPECTED_RESPONSE = {
            "error": "10001",
            "message": "Missing Property",
            "detail": "The property 'password' is missing."
        };
    
        const res = await request
        .post('/2.0/oauth/token')
        .expect(400)
        .send(TEST_REQUEST)
            res.body.should.containEql(EXPECTED_RESPONSE);
};
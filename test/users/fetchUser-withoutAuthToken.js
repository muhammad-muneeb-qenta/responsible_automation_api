require('should');
const supertest = require('supertest');
const config = require ('../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = fetchUser;

async function fetchUser (){
        const EXPECTED_RESPONSE = {
            "error": "10004",
            "message": "Not Authorized"
        };
        const res = await request
        .get('/2.0/user')
        .expect(401)
            res.body.should.containEql(EXPECTED_RESPONSE);
};
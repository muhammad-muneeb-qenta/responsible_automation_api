require('should');
const supertest = require('supertest');
const config = require ('../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = fetchUser;

async function fetchUser(){
        const TOKEN = 'abc123';
        const EXPECTED_RESPONSE = {
            "reason": "Unable to verify Authorization Header"
        };
        const res = await request
        .get('/2.0/user')
        .set('Authorization', `Bearer${TOKEN}`)
        .expect(401)
            res.body.should.containEql(EXPECTED_RESPONSE);
};
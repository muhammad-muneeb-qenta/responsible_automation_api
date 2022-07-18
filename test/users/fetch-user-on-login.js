require('should');
const supertest = require('supertest');
const config = require ('../../config.json');
const request = supertest(config['BASE_URL']);
module.exports = fetchUser;

async function fetchUser(seed) {
    const TOKEN = seed;
        const EXPECTED_RESPONSE = {
            "user_id": "eiiwML1",
            "email": "hussnain.nadeem+nodev@emergenttech.com",
            "name": "Hussnain Nadeem",
            "status": "active",
        };
        return request
        .get('/2.0/user')
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(200)
        .then((res) =>{
            res.body.should.containEql(EXPECTED_RESPONSE);
        })
};
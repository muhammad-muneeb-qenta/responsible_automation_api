require('should');
const supertest = require('supertest');
const config = require ('../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = createAnOrg;

async function createAnOrg (id_token) {
    const TOKEN = id_token;
    const TEST_REQUEST = {};
    const EXPECTED_RESPONSE = {
        "message": "Invalid Properties",
        "detail": "[ { property: 'name', error_message: 'Path `name` is required.' } ]"
    }
    return await request 
        .post(`/2.0/organization`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
        .expect(400)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        });
};
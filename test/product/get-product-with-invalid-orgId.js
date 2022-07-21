require('should');
const supertest = require('supertest');
const config = require ('.././../config.json');
const request = supertest(config['BASE_URL']);

module.exports = getProductList;

async function getProductList (id_token) {

    const TOKEN = id_token;
    const ORG_ID = 'abc123';
    const EXPECTED_RESPONSE = {
        "error": "10005",
        "message": "Forbidden"
    }

    return await request 
    .get(`/2.0/organization/${ORG_ID}/product`)
    .set('Authorization', `Bearer ${TOKEN}`)
    .expect(403)
    .then((resp)=>{
        resp.body.should.containEql(EXPECTED_RESPONSE);
    });
};
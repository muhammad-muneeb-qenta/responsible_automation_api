require('should');
const supertest = require('supertest');
const config = require ('../../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = retireProduct;

async function retireProduct (id_token, org_id, product_id) {

    const TOKEN = id_token;
    const EXPECTED_RESPONSE = {
        "error": "10009",
        "message": "State Conflict",
        "detail": "Already updated to active - 'false'"
    };

    return await request 
        .post(`/2.0/organization/${org_id}/product/${product_id}/retire`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(409)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        });
};
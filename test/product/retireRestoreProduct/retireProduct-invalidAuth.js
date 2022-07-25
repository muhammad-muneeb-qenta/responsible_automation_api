require('should');
const supertest = require('supertest');
const config = require ('../../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = retireProduct;

async function retireProduct (org_id, product_id) {

    const TOKEN = "id_token";
    const EXPECTED_RESPONSE = {
    "reason": "Unable to verify Authorization Header"
    };

    return await request 
        .post(`/2.0/organization/${org_id}/product/${product_id}/retire`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(401)
        .then((resp)=>{
            resp.body.should.containEql(EXPECTED_RESPONSE);
        });
};
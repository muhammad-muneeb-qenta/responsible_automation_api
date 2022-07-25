const { assert } = require('chai');
const supertest = require('supertest');
const config = require ('../../../config.json');

const request = supertest(config['BASE_URL'])

module.exports = retireProduct;

async function retireProduct (id_token, org_id, product_id) {

    const TOKEN = id_token;
    const respActive = false;

    return await request 
        .post(`/2.0/organization/${org_id}/product/${product_id}/retire`)
        .set('Authorization', `Bearer ${TOKEN}`)
        .expect(201)
        .then((resp)=>{
            assert.ok(resp);
            assert.equal(resp.body.active, respActive);
        });
};
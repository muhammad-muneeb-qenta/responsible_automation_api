const supertest = require('supertest');
const config = require ('../../../config.json');
const request = supertest(config['BASE_URL']);
const Bluebird = require('bluebird');

module.exports = requiredDataForRetireRestoreProduct;

async function requiredDataForRetireRestoreProduct () {  

        const TEST_REQUEST = {
            username: "rgsctest+mat@gmail.com",
            password: "@Welcome1234"
        };
        var response1 = await request
        .post(`/2.0/oauth/token`)
        .send(TEST_REQUEST)
        var TOKEN_ID = response1.body.id_token;

        var response2 = await request
        .get('/2.0/user')
        .set('Authorization', `Bearer ${TOKEN_ID}`)
        .expect(200)
        var ORG_ID = response2.body.organization_ids[0];

        var response3 = await request
        .get(`/2.0/organization/${ORG_ID}/product?uses_template=true&active=true`)
        .set('Authorization', `Bearer ${TOKEN_ID}`)
        .expect(200)
        var PRODUCT_ID_RETIRE = response3.body[0].product_id;

        var response4 = await request
        .get(`/2.0/organization/${ORG_ID}/product?uses_template=true&active=false`)
        .set('Authorization', `Bearer ${TOKEN_ID}`)
        .expect(200)
        var PRODUCT_ID_RESTORE = response4.body[0].product_id;

        return Bluebird.props({
        token_id: TOKEN_ID,
        org_id: ORG_ID,
        product_id_retire: PRODUCT_ID_RETIRE,
        product_id_restore: PRODUCT_ID_RESTORE
        });
};
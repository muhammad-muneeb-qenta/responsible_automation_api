const supertest  = require ('supertest');
const config = require('../../../config.json');
const Bluebird = require ('bluebird');

const request = supertest(config['BASE_URL']);

exports.requiredDataForMiner = async function () {
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

        return Bluebird.props({
        token_id: TOKEN_ID,
        org_id: ORG_ID
        });
};

exports.requiredDataForRefiner = async function () {
        const TEST_REQUEST = {
            username: "rgsctest+rat@gmail.com",
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

        return Bluebird.props({
        token_id: TOKEN_ID,
        org_id: ORG_ID
        });
};
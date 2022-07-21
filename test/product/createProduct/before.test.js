const supertest = require('supertest');
const config = require ('../../../config.json');
const request = supertest(config['BASE_URL']);
const Bluebird = require('bluebird');


exports.requiredDataForRefiner = async function() {
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
        var USER_ID = response2.body.user_id;

        var response3 = await request
        .get(`/2.0/organization/${ORG_ID}`)
        .set('Authorization', `Bearer ${TOKEN_ID}`)
        .expect(200)
        var COMPANY_PREFIX = response3.body.company_prefix;

        return Bluebird.props({
        token_id: TOKEN_ID,
        org_id: ORG_ID,
        user_id: USER_ID,
        company_prefix: COMPANY_PREFIX
        });
};
exports.requiredDataForMiner = async function() {
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
        var USER_ID = response2.body.user_id;

        var response3 = await request
        .get(`/2.0/organization/${ORG_ID}`)
        .set('Authorization', `Bearer ${TOKEN_ID}`)
        .expect(200)
        var COMPANY_PREFIX = response3.body.company_prefix;

        return Bluebird.props({
        token_id: TOKEN_ID,
        org_id: ORG_ID,
        user_id: USER_ID,
        company_prefix: COMPANY_PREFIX
        });
};
exports.requiredDataForLogistics = async function() {
        const TEST_REQUEST = {
            username: "rgsctest+lat@gmail.com",
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
        var USER_ID = response2.body.user_id;

        var response3 = await request
        .get(`/2.0/organization/${ORG_ID}`)
        .set('Authorization', `Bearer ${TOKEN_ID}`)
        .expect(200)
        var COMPANY_PREFIX = response3.body.company_prefix;

        return Bluebird.props({
        token_id: TOKEN_ID,
        org_id: ORG_ID,
        user_id: USER_ID,
        company_prefix: COMPANY_PREFIX
        });
};

exports.requiredDataForvault = async function() {
        const TEST_REQUEST = {
            username: "rgsctest+vat@gmail.com",
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
        var USER_ID = response2.body.user_id;

        var response3 = await request
        .get(`/2.0/organization/${ORG_ID}`)
        .set('Authorization', `Bearer ${TOKEN_ID}`)
        .expect(200)
        var COMPANY_PREFIX = response3.body.company_prefix;

        return Bluebird.props({
        token_id: TOKEN_ID,
        org_id: ORG_ID,
        user_id: USER_ID,
        company_prefix: COMPANY_PREFIX
        });
};
const config = require ('../../config.json');
const supertest = require ('supertest')
const request = supertest(config['BASE_URL']);
const Bluebird = require('bluebird');

module.exports = requiredData ; 

async function requiredData () {

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
        var USER_ID_A = response2.body.user_id;

        var response3 = await request
        .get(`/2.0/organization/${ORG_ID}/user`)
        .set('Authorization', `Bearer ${TOKEN_ID}`)
        .expect(200)
        var USER_ID = response3.body.organization.admins[1]._id;

        return Bluebird.props({
        token_id: TOKEN_ID,
        org_id: ORG_ID,
        user_id: USER_ID,
        user_id_A: USER_ID_A
        });
};
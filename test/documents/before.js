const supertest = require('supertest');
const config = require ('../../config.json');

const request = supertest(config['BASE_URL']);
describe ('', ()=>{
    var ID_TOKEN;
    it.only('', async ()=>{
        const TEST_REQUEST = {
            username: "hussnain.nadeem+nodev@emergenttech.com",
            password: "@Welcome1234"
        };   
        const res = await request
        .post('/2.0/oauth/token')
        .send(TEST_REQUEST)
            ID_TOKEN = res.body.id_token;
            return ID_TOKEN;
    });
});
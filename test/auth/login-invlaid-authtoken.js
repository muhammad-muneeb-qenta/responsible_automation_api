require('should');
const supertest = require('supertest')
var config = require ('../../config.json')

const request = supertest(config['BASE_URL']);
describe ('', ()=>{

    it('Unable to verify Authorization Header', async ()=>{
        const TOKEN = 'abc123';
        
        const TEST_REQUEST = {
            username: "hussnain.nadeem+nodev@emergenttech.com",
            password: "@Welcome1234@123"
        };
        const EXPECTED_RESPONSE = {
            "reason": "Unable to verify Authorization Header"
        };
    
        const res = await request
        .post('/2.0/oauth/token')
        .expect(401)
        .set('Authorization', `Bearer ${TOKEN}`)
        .send(TEST_REQUEST)
            res.body.should.containEql(EXPECTED_RESPONSE);
    });
});
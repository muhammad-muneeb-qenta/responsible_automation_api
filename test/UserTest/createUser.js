require('should');
const supertest = require('supertest');
const config = require ('../../config.json');
const request = supertest(config['LOCAL_URL']);

module.exports = auth;

async function auth() {
    const TEST_REQUEST = {
            // username: "hussnain.nadeem+nodev@emergenttech.com",
            // password: "@Welcome1234@123"
        };
        const EXPECTED_RESPONSE = { 
            "Name": "muneeb"
        };
    
        const res = await request
        .post('createusers?Name=muneeb&Password=12345&Email=mmuneeb221qa1@gmail.com')
        .send(TEST_REQUEST)
            res.body.should.containEql(EXPECTED_RESPONSE);
}
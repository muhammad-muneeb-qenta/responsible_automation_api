require('should');
const supertest = require('supertest')
var constants = require ('../../utility/constants.js')

const request = supertest(constants.BASE_URL);
describe ('', ()=>{

    it('should give message "email or password is not valid', async ()=>{
        const TEST_REQUEST = {
            username: "hussnain.nadeem+nodev@emergenttech.com",
            password: "@Welcome1234@123"
        };
        const EXPECTED_RESPONSE = {
            "detail": "Your email or password is not valid",
            "error": "10001",
            "message": "Invalid Property"
        };
    
        const res = await request
        .post('/2.0/oauth/token')
        .send(TEST_REQUEST)
            res.body.should.containEql(EXPECTED_RESPONSE);
    });
});
require('should');
const { default: axios } = require('axios');
// const supertest = require('supertest');
const config = require ('../../config.json');
// const request = supertest(config['BASE_URL']);
var path = "https://api.dev.gmint.io/scr/api/2.0/user"
module.exports = usingScope;

async function usingScope() {
        const Authorization = {
            "scope": "write:organizations write:users",
            "chronicled_id": "network-operator"
        }
        const EXPECTED_RESPONSE = {
            "user_id": "eiiwML1",
            "email": "hussnain.nadeem+nodev@emergenttech.com",
            "name": "Hussnain Nadeem",
            "status": "active",
        };

        axios.get(path, {
            headers :{
                'Authorization' : Authorization
            }
        }).then(
        (response) => {
            var result = response.data;
            console.log(result);
        },
        (error) => {
            console.log(error);
        });
        // return request
        // .get('/2.0/user')
        // .set('Authorization', TOKEN)
        // .expect(200)
        // .then((res) =>{
        //     res.body.should.containEql(EXPECTED_RESPONSE);
        // })
};
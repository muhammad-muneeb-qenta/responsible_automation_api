const supertest = require('supertest');
const config = require ('../../config.json');
const request = supertest(config['BASE_URL']);

module.exports = createIdToken;

async function createIdToken () {      
        const TEST_REQUEST = {
            username: "hussnain.nadeem+nodev@emergenttech.com",
            password: "@Welcome1234"
        };
        return await request
        .post(`/2.0/oauth/token`)
        .send(TEST_REQUEST)
        .then((resp)=>{
            return resp.body.id_token;
        })
};

    // ============================ Using Promise ========================//

// describe('', ()=> {

//     it('HLO', ()=>{

//         const TEST_REQUEST = {
//             username: "hussnain.nadeem+nodev@emergenttech.com",
//             password: "@Welcome1234"
//         };

        
//         return request
//         .post('/2.0/oauth/token')
//         .send(TEST_REQUEST)
//         .then((res) =>{
//             assert.ok(res.body);
//             expect(res.body.email).to.be.equal("hussnain.nadeem+nodev@emergenttech.com")

//             ID_TOKEN = res.body.id_token;
//             return ID_TOKEN;
//         });
//     });

//     if (typeof window !== 'undefined') {
//     localStorage.setItem("ID",ID_TOKEN);
// }

// sessionStorage.setItem("ID",ID_TOKEN);
    // ============================ Using (Done) Function ========================//
    // it('HLO', (done)=>{

    //     const TEST_REQUEST = {
    //         username: "hussnain.nadeem+nodev@emergenttech.com",
    //         password: "@Welcome1234"
    //     };

        
    //     return request
    //     .post('/2.0/oauth/token')
    //     .send(TEST_REQUEST)
    //     .then((res) =>{
    //         assert.ok(res.body);
    //         expect(res.body.email).to.be.equal("hussnain.nadeem+nodev@emergenttech.com")

    //         // ID_TOKEN = res.body.id_token;
    //         done()
    //     }).catch(err =>{
    //         done(err)
    //     })
    // });

    // ============================ Using Async Await ========================//
    // it('HLO', async ()=>{

    //     const TEST_REQUEST = {
    //         username: "hussnain.nadeem+nodev@emergenttech.com",
    //         password: "@Welcome1234"
    //     };

        
    //     const res =await request
    //     .post('/2.0/oauth/token')
    //     .send(TEST_REQUEST)
    //         assert.ok(res.body);
    //         expect(res.body.email).to.be.equal("hussnain.nadeem+nodev@emergenttech.comm")
    //         ID_TOKEN = res.body.id_token;
    // });
//});
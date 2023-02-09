import Usermodel from "../models/user.model";
import db from "../database";
import user from "../types/users.type";
const usermodel = new Usermodel();
describe('Authnticate Users Module',()=>{
    describe('Test Method Runing',()=>{
it('Should Contain User Authincation',()=>{
    expect (usermodel.authenticate).toBeDefined();
})
    });
});
describe('Test Auth User',()=>{
    const user = {
        username:'Essam_Hewala',
        fname:'Essam Sayed Mohamed Hewala',
        password:'password'
    }as user
    beforeAll(async ()=>{
        const createuser = await  usermodel.create(user);
        user.id = createuser.id;
    });
    afterAll
})
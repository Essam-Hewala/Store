import Usermodel from "../models/user.model";
import db from "../database";
import user from "../types/users.type";
import { authenticate } from "../controllers/user.contoroller";
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
        fname:'Essam Sayed Mohamed Hewala'

    }as user
    beforeAll(async ()=>{
        const createuser = await  usermodel.create(user);
        user.id = createuser.id;
    });
    afterAll(async()=>{
        const connection = await db.connect();
        const sql = "delete from users";
        await connection.query(sql);
        connection.release();      
    });
    it('It Should Return The User',async ()=>{
    const authuser =  await  usermodel.authenticate(
    user.username as string,
    user.password as string
   );
   expect(authuser?.username).toBe(user.username);
   expect(authuser?.fname).toBe(user.fname);
    });
it('Should Return Wrong Data',async ()=>{
const authuser = await usermodel.authenticate(
    'Mohamed Ahmed',
    'Wrong Password'
);
expect(authuser).toBe(null);
});
});
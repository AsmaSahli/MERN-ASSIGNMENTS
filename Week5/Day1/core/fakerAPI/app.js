const express = require('express');
const app = express();
const port = 8000;


app.listen(port, () => console.log(`server up and running on port ${port}`));

const {faker}  = require('@faker-js/faker');


const createUser=()=>({
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker.person.lastName(),
        firstName:faker.person.firstName(),
        _id:faker.string.uuid(),

});


const createCompany = () => ({
    _id: faker.string.uuid(),
    name: faker.company.name(),
    address: {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),
    },
});


app.get("/api/user/new",(req,res)=>{
    const newUser= createUser();
    res.json(newUser);
})


app.get("/api/company/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company",(req,res)=>{
    const result={
        user: createUser(),
        company:createCompany(),
    }
    res.json(result)
})


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
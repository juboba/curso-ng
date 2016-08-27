const faker = require('Faker');
const restify= require('restify');
const server = restify.createServer()

server.use(restify.CORS())

const mails = []
const users = []

for (let i = 0; i < 10; i++) {
    users.push({
        id: i+1,
        nombres: faker.Name.firstName(),// + ' ' + faker.Name.firsName(),
        apellidos: faker.Name.lastName() + ' ' + faker.Name.lastName(),
        email: faker.Internet.email(),
        telefono: faker.PhoneNumber.phoneNumber(),
        direccion: faker.Address.streetAddress()
    })
}

let mailId = 0;

users.forEach(
    function(user) {
        let randomNumber = faker.random.number(10);

        for (let i = 0; i < randomNumber; i++) {
            mailId++;

            mails.push({
                id: mailId,
                asunto: faker.Lorem.sentence(),
                user_id: user.id,
                fecha: new Date(),
                remitente: user.nombres + ' ' + user.apellidos + ' <' + user.email + '>',
                cuerpo: faker.Lorem.paragraphs(randomNumber)
            })
        }
    }
)

server.get('/mail/:id', function(req, res) {
    let mail = mails.find(function(item) {
        return item.id === parseInt(req.params.id)
    })
    res.send(mail);
})

server.get('/mail', function(req, res) {
    res.send(mails);
})

server.listen(8080, function() {
    console.log('Listening on 8080...')
})

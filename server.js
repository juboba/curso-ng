const faker = require('Faker');
const restify= require('restify');
const server = restify.createServer();

server.use(restify.CORS());
server.use(restify.bodyParser());

let mails = [];
const users = [];

for (let i = 0; i < 10; i++) {
    users.push({
        id: i+1,
        nombres: faker.Name.firstName(),// + ' ' + faker.Name.firsName(),
        apellidos: faker.Name.lastName() + ' ' + faker.Name.lastName(),
        email: faker.Internet.email(),
        imagen: 'http://lorempixel.com/g/240/240/people/',
        telefono: faker.PhoneNumber.phoneNumber(),
        direccion: faker.Address.streetAddress()
    });
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
            });
        }
    }
);

server.get(/\/mail\/(\d+)/, function(req, res) {
    let id = req.params[0];

    let mail = mails.find(function(item) {
        return item.id === parseInt(id);
    });

    res.send(mail);
});

server.get('/mail', function(req, res) {
    res.send(mails.filter(function(item) {
        return !item.sent;
    }));
});

server.get('/user', function(req, res) {
    res.send(users);
});

server.get(/\/user\/(\d+)/, function(req, res) {
    let id = req.params[0];
    let user = users.find(function(item) {
        return item.id === parseInt(id);
    });
    res.send(user);
});

server.post('/mail', function(req, res) {
    let newEmail = req.params;

    newEmail.fecha = new Date();
    newEmail.id = mails.length + 1;
    newEmail.sent = true;
    newEmail.user_id = users[0].id;
    newEmail.remitente = users[0].nombres + ' ' + users[0].apellidos + ' <' + users[0].email + '>';

    mails.push(newEmail);

    res.send(newEmail);
});

server.get('/mail/sent', function(req, res) {
    res.send(mails.filter(function(item) {
        return item.sent;
    }));
});

server.listen(8080, function() {
    console.log('Listening on 8080...');
});

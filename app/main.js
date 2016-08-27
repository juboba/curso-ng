angular.module('clienteCorreo', [])

    .controller('inboxCtrl', function() {
        this.emails = [
            {
                id: 1,
                asunto: 'Aprender AngularJS',
                remitente: 'Rudolph Hess',
                fecha: new Date()
            },
            {
                id: 2,
                asunto: 'Aprender AngularJS',
                remitente: 'Winston Churchill',
                fecha: new Date()
            },
            {
                id: 3,
                asunto: 'Aprender AngularJS',
                remitente: 'Joseph Stalin',
                fecha: new Date()
            },
            {
                id: 4,
                asunto: 'Aprender AngularJS',
                remitente: 'Theodore Roosevelt',
                fecha: new Date()
            }
        ];
    });

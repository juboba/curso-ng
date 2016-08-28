angular
    .module('clienteCorreo')
    .component('ccComposer', {
        templateUrl: 'app/components/composer/composer-component.html',

        bindings: {
            senderEmail: '<' 
        },

        controller: function(mailSrv) {
            let composerCtrl = this;

            this.newMailTemplate = {
                remitente: this.senderEmail,
                destinatario: '',
                asunto: '',
                cuerpo: ''
            }

            this.newMail = angular.copy(this.newMailTemplate);

            this.sendMail = function() {
                mailSrv.send(composerCtrl.newMail)
                    .then(function(response) {
                        composerCtrl.message = 'Mail enviado!';
                        composerCtrl.newMail = angular.copy(composerCtrl.newMailTemplate);
                    });
            };
        }
    });

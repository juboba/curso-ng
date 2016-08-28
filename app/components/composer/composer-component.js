angular
    .module('clienteCorreo')
    .component('ccComposer', {
        templateUrl: 'app/components/composer/composer-component.html',
        controller: function($log) {
            let composerCtrl = this;

            this.newMail = {
                remitente: 'mymail@hotlinemail.com',
                destinatario: '',
                asunto: '',
                cuerpo: ''
            };
            /*
             * Agregamos una función para enviar los datos al servidor.
             * Por ahora sólo loguearemos a la consola.
             */
            this.sendMail = function() {
                $log.info('TODO: enviar email');
                $log.log(composerCtrl.newMail);
            };
        }
    });

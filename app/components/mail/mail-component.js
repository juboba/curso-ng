angular
    .module('clienteCorreo')
    .component('ccMail', {
        templateUrl: 'app/components/mail/mail-component.html',
        /*
         * Agregamos un bloque `bindings` que va a servir de interfaz
         * entre nuestro componente y el 'mundo exterior'.
         */
        bindings: {
            /*
             * Definimos un 'one-way' binding para mail ya que
             * sólo necesitamos leerlo.
             * Las opciones disponibles para un binding son:
             * 'one-way':     '<[nombre]'
             * 'two-way':     '=[nombre]'
             * 'string':      '@[nombre]'
             * 'expression':  '&[nombre]'
             *
             * En estricto rigor 'one-way' y 'two-way' funcionan
             * igual si lo entregado es un objeto (véase paso por referencia
             * en javascript). La diferencia es que Angular no escuchará a
             * los cambios sobre el objeto en el padre (de donde viene el binding).
             * Pero en el próximo ciclo (véase $digest) se aplicarán los cambios.
             *
             * En todos los casos el [nombre] es opcional. Si no está puesto se asumirá
             * el mismo nombre de la propiedad (usando camelCase, como en los
             * nombres de las directivas/componentes).
             */
            mail: '<mailDetails'
        },
        controller: function(mailSrv) {
            var Ctrl = this;

            mailSrv.getAll()
                .then(function(emails) {
                    Ctrl.emails = emails;
                });
        }
    });

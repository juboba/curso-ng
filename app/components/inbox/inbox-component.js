angular.module('clienteCorreo')

/*
 La creación de un componente require de 2 argumentos:
 - Nombre del componente en camelCase. Escogemos un nombre co un prefijo (cc, en
   este caso) para asegurarnos de no sobreescribir otros componentes que pudieran
   tener algunos plugins.
 - Objeto de configuración del componente. Lo describiremos por partes:
 */
    .component('ccInbox', {
        /*
         Existen 2 maneras de importar un template principalmente:
         - template: Pasar el template directamente.
             Ejemplo: '<div ng-bind="$ctrl.miNombre"></div>'
         - templateUrl: Url del template (como estamos usando aquí)

         Ambas opciones pueden recibir una función como argumento que debe devolver
         un template o un templateUrl en cada caso.
         Ejemplo:

         template: function() {
            return '<div ng-bind="$ctrl.miNombre"></div>'
         }
         */
        templateUrl: 'app/components/inbox/inbox-component.html',
        /*
         El controlador del componente manejará la lógica para preparar los datos
         para ser mostrados en la vista.
         En este caso sólo estamos usando un vector estático para mostrar los emails.
         */
        controller: function() {
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
        }
    });

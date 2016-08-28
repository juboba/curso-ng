angular
    .module('clienteCorreo')
    .config(function($routeProvider) {
        $routeProvider

            .when('/inbox', {
                template: '<cc-inbox></cc-inbox>'
            })

            .when('/mail/:id', {
                /*
                 * Ahora pasamos el objeto resuelto a nuestro nuevo componente
                 * que mostrará el detalle del correo:
                 */
                template: '<cc-mail mail-details="$resolve.mail"></cc-mail>',
                resolve: {
                    mail: function(mailSrv, $route) {
                        return mailSrv.getOne($route.current.params.id);
                    }
                }
            })

            .otherwise('/inbox');
    });

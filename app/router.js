angular
    .module('clienteCorreo')
    .config(function($routeProvider) {
        $routeProvider

            .when('/inbox', {
                template: '<cc-inbox></cc-inbox>'
            })

            .when('/mail/:id', {
                /*
                 * Ahora cambiamos el controller por un `resolve`.
                 * Esto permite que `$resolve.mail` esté disponible justo
                 * antes de cambiar de ruta:
                 * (Es decir, nuestra ruta nunca se cargará con datos vacíos,
                 * como si ocurre en `/inbox`, los datos se cargan después de
                 * cargar la ruta [en el componente]).
                 * Por ahora sólo mostramos el json de la respuesta
                 * (usando un filtro)
                 */
                template: '{{$resolve.mail | json}}',
                /*
                 * Podemos agregar tantos 'resolves' como queramos.
                 * Estarán disponibles en el ámbito de la ruta como:
                 * $resolve.[nombre]
                 */
                resolve: {
                    mail: function(mailSrv, $route) {
                        /*
                         * El valor no será la promesa que devolvemos
                         * sino el valor 'resuelto' de la promesa:
                         */
                        return mailSrv.getOne($route.current.params.id);
                    }
                }
            })

            .otherwise('/inbox');
    });

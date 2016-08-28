angular
    .module('clienteCorreo')
    .config(function($routeProvider) {
        $routeProvider

            .when('/inbox', {
                template: '<cc-inbox></cc-inbox>'
            })

        /*
         * Agregamos una ruta con un parámetro `id` que vamos a usar para
         * Encontrar el mail específico:
         */
            .when('/mail/:id', {
                template: 'Hello Mail {{mail.routeId}}!',
                controller: function($routeParams) {
                    this.routeId = $routeParams.id;
                },
                /*
                 * Notar que usamos (al igual que cuando usamos un controlador
                 * solo) la sintaxis 'controller as'.
                 * Anteriormente: `ng-controller="someCtrl as some"` en la vista
                 * Ahora: controllerAs: 'some' en la definición de la ruta.
                 * Ambos producen el mismo resultado.
                 */
                controllerAs: 'mail'
            })

            .otherwise('/inbox');
    });

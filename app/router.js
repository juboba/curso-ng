angular
    .module('clienteCorreo')
/*
 * Agregamos un bloque de configuración (puede haber múltiples en una aplicación)
 * para configurar las rutas:
 */
    .config(function($routeProvider) {
        $routeProvider

            .when('/inbox', {
                template: '<cc-inbox></cc-inbox>'
            })

            .when('/mail', {
                template: 'Hello Mail!'
            })

            /*
            Establece una ruta por defecto:
            */
            .otherwise('/inbox');
    });

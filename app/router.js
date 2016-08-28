angular
    .module('clienteCorreo')
    .config(function($routeProvider) {
        $routeProvider

            .when('/inbox', {
                template: '<cc-inbox></cc-inbox>'
            })

            .when('/mail/:id', {
                template: '<cc-mail mail-details="$resolve.mail"></cc-mail>',
                resolve: {
                    mail: function(mailSrv, $route) {
                        return mailSrv.getOne($route.current.params.id);
                    }
                }
            })

            .when('/user/:id', {
                template: '<cc-user user-details="$resolve.user"></cc-user>',
                resolve: {
                    user: function(userSrv, $route) {
                        return userSrv.getOne($route.current.params.id);
                    }
                }
            })

            .otherwise('/inbox');
    });

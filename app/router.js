angular
    .module('clienteCorreo')
    .config(function($routeProvider) {
        $routeProvider

            .when('/inbox', {
                template: '<cc-inbox title="Inbox" mails="$resolve.mails"></cc-inbox>',
                resolve: {
                    mails: function(mailSrv) {
                        return mailSrv.getAll();
                    }
                }
            })

            .when('/outbox', {
                template: '<cc-inbox title="Outbox" mails="$resolve.mails"></cc-inbox>',
                resolve: {
                    mails: function(mailSrv) {
                        return mailSrv.getAllSent();
                    }
                }
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

            .when('/compose', {
                template: '<cc-composer sender-email="$resolve.email"></cc-composer>',
                resolve: {
                    email: function(userSrv) {
                        return userSrv.getOne(1)
                            .then(function(user) {
                                return user.email;
                            });
                    }
                }
            })

            .otherwise('/inbox');
    });

angular
    .module('clienteCorreo')
    .service('mailSrv', function($http) {
        this.getAll = function() {
            return $http({
                url: 'http://localhost:8080/mail',
                method: 'GET'
            })
                .then(function(res) {
                    return res.data;
                });
        };

        /*
         Este otro método permitirá traer el detalle de un correo específico:
         */
        this.getOne = function(id) {
            return $http({
                url: 'http://localhost:8080/mail/' + id,
                method: 'GET'
            })
                .then(function(res) {
                    return res.data;
                });
        };
    });

angular
    .module('clienteCorreo')
    .service('userSrv', function($http) {
        this.getAll = function() {
            return $http({
                url: 'http://localhost:8080/user',
                method: 'GET'
            })
                .then(function(res) {
                    return res.data;
                });
        };

        this.getOne = function(id) {
            return $http({
                url: 'http://localhost:8080/user/' + id,
                method: 'GET'
            })
                .then(function(res) {
                    return res.data;
                });
        };
    });

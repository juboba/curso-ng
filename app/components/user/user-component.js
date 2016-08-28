angular
    .module('clienteCorreo')
    .component('ccUser', {
        templateUrl: 'app/components/user/user-component.html',
        bindings: {
            user: '<userDetails'
        }
    });

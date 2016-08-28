angular
    .module('clienteCorreo')
    .component('ccInbox', {
        templateUrl: 'app/components/inbox/inbox-component.html',
        bindings: {
            emails: '<mails',
            title: '@'
        }
    });

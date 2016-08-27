angular
    .module('clienteCorreo')
    .component('ccInbox', {
        templateUrl: 'app/components/inbox/inbox-component.html',
        controller: function(mailSrv) {
            var Ctrl = this;

            mailSrv.getAll()
                .then(function(emails) {
                    Ctrl.emails = emails;
                });
        }
    });

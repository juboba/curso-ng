/* Creación de un módulo (aplicación) de Angular.
 Esta aplicación se llamará `emailClient` y, de momento, no depende
 de módulos externos.
 La función `angular.module` es un setter (crea un módulo) cuando se usa
 de la forma: `angular.module(<nombre-modulo>, [dependencia1, dependencia2, ...])`
 O también un getter (obtiene una referencia a un módulo existente) cuando se usa
 sin dependencias: `angular.module(<nombre-modulo>)`:
 */
angular.module('clienteCorreo', [])

/*
 Un bloque `run` ejecuta una función justo después del 'bootstrap':
 */
    .run(function($rootScope) {
        $rootScope.miNombre = 'Gabrilo Princip'
    })
/*
 Podemos incluir múltiples bloques `run`.
 En este caso estamos 'inyectando' el 'contexto' global de la aplicación.
 El `$rootScope` funciona como el objeto `window` del navegador.
 El único cambio que estamos haciendo es dejar un valor por defecto a nuestra
 variable `miNombre`
 */

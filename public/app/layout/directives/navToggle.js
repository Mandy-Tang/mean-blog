/**
 * Created by mandy on 16-3-29.
 */
(function () {
  function navToggle ($timeout) {
    'ngInject';
    return {
      restrict: 'A',
      template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
      controller: function ($scope, $element) {
        $scope.minimalize = function () {
          $("body").toggleClass("mini-navbar");
          if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            $('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(
              function () {
                $('#side-menu').fadeIn(500);
              }, 100);
          } else if ($('body').hasClass('fixed-sidebar')){
            $('#side-menu').hide();
            setTimeout(
              function () {
                $('#side-menu').fadeIn(500);
              }, 300);
          } else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            $('#side-menu').removeAttr('style');
          }
        }
      }
    };
  }

  angular.module('app.layout').directive('navToggle', navToggle)
})();

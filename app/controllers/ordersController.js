(function() {
  
  var OrdersController = function ($scope, $routeParams, customersFactory) {
  // var OrdersController = function ($scope, $routeParams, customersService) {

    var customerId = $routeParams.customerId;
    $scope.customer = null;
    
    function init() {
      $scope.customer = customersFactory.getCustomer(customerId);
      // $scope.customer = customersService.getCustomer(customerId);
    }
    
    init();

  };
  
  OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];
  // OrdersController.$inject = ['$scope', '$routeParams', 'customersService'];

  angular.module('customersApp')
    .controller('OrdersController', OrdersController);
    
}());
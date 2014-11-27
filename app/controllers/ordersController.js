(function() {
  
  var OrdersController = function ($scope, $routeParams, customersFactory) {
  // var OrdersController = function ($scope, $routeParams, customersService) {

    var customerId = $routeParams.customerId;
    $scope.customer = null;
    
    function init() {
      customersFactory.getCustomer(customerId)
        .success(function(customer) {
          $scope.customer = customer;
        })
        .error(function(data, status, headers, config) {
          // error handling
        })

      // $scope.customer = customersService.getCustomer(customerId);
    }
    
    init();

  };
  
  OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];
  // OrdersController.$inject = ['$scope', '$routeParams', 'customersService'];

  angular.module('customersApp')
    .controller('OrdersController', OrdersController);
    
}());
(function() {
  
  var OrdersController = function ($scope, $routeParams, customersFactory) {

    var customerId = $routeParams.customerId;
    $scope.orders = null;
    
    function init() {
      //Search the customers for the customerId
      for (var i=0,len=$scope.customers.length;i<len;i++) {
       if ($scope.customers[i].id === parseInt(customerId)) {
         $scope.orders = $scope.customers[i].orders;
         break;
       }
      }

      $scope.customers = customersFactory.getCustomers();
      
    }
    
    init();

  };
  
  OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

  angular.module('customersApp')
    .controller('OrdersController', OrdersController);
    
}());
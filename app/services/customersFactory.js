(function() {

  var customersFactory = function($http) {

    // One way of doing it, where you just return 'factory', vs an object literal itself
    // var factory = {};
    // factory.getCustomers = function() {
    //   return customers;
    // }

    return {

      getCustomers: function() {
        return $http.get('/api/customers');
      },

      getCustomer: function(customerId) {
        return $http.get('/api/customers/' + customerId);
      },

      getOrders: function() {
          return $http.get('/orders');
      },
      
      deleteCustomer: function(customerId) {
          return $http.delete('/customers/' + customerId);
      }

    }

  };

  customersFactory.$inject = ['$http'];

  angular.module('customersApp').factory('customersFactory', customersFactory);

})();
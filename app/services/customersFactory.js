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

        for (var i = 0; i < customers.length; i++) {
          if (customers[i].id === parseInt(customerId)) {
            return customers[i];
          }
        }

        return null;
      }

    }

  };

  angular.module('customersApp').factory('customersFactory', customersFactory);

})();
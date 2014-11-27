angular.module('customersApp').value('appSettings', {
  title: 'Customers App',
  version: '1.0'
});

// Constant can be injected into config, value can't
// angular.module('customersApp').constant('appSettings', {
//   title: 'Customers App',
//   version: '1.0'
// });

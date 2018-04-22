var app = angular.module('Website', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  	.when('/', {
    	controller: 'HomeController',
    	templateUrl:  'views/home.html'
  	})
  	.when('/about', {
    	controller: 'AboutController',
    	templateUrl: 'views/about.html'
  	})
    .when('/projects', {
      controller: 'ProjectsController',
      templateUrl: 'views/projects.html'
    })
    .when('/blog', {
      controller: 'BlogController',
      templateUrl: 'views/blog.html'
    })
    .when('/contact', {
      controller: 'ContactController',
      templateUrl: 'views/contact.html'
    })
  	.otherwise({
    	redirectTo: '/'
  	});
});

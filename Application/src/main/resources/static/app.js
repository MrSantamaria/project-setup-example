// import angular from 'angular';
// import uiRouter from 'angular-ui-router';

// import scotchController from './scotch-controller';

// const Visualizer = window['ui-router-visualizer'].Visualizer;

var routerApp = angular.module('routerApp', ['ui.router']);

// routerApp.run(($uiRouter, $trace) => {

// 	//Ui Visualizer
//   // Auto-collapse children in state visualizer
//   const registry = $uiRouter.stateRegistry;
//   $uiRouter.stateRegistry.get().map(s => s.$$state())
//       .filter(s => s.path.length === 2 || s.path.length === 3)
//       .forEach(s => s._collapsed = true);
  
//   const pluginInstance = $uiRouter.plugin(Visualizer);
  
//   $trace.enable('TRANSITION');
// });

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'home/home.html'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'home/list/list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'about/about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'about/table-data.html',
                    controller: 'scotchController',
                }
            }
            
        });
        
});

routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});
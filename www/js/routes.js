angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    


  // .state('check',{
  //   url:'/check',
  //   templateUrl: 'templates/check.html',
  //   abstract: true,
  //   resolve : {
  //       resolvedUser : function checkForAuthenticatedUser(ParseService, $state){
  //         console.log("We are here");
  //              return ParseService.getCurrentUser().then(function (_user) {
  //               console.log("We are here", _user);
  //              // if resolved successfully return a user object that will set
  //             // the variable `resolvedUser`
  //                 return _user;
  //                 }, function (_error) {
  //                  $state.go('hUEvents');
  //                 })
  //            }
  //   }
  // })
    
      
        
    .state('hUEvents', {
      url: '/login',
      templateUrl: 'templates/hUEvents.html',
      controller: 'hUEventsCtrl'
    })
        
      
    
      
        
    .state('tabsController.allEvents', {
      url: '/allevents',
      views: {
        'tab1': {
          templateUrl: 'templates/allEvents.html',
          controller: 'allEventsCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.addEvent', {
      url: '/addevent',
      views: {
        'tab3': {
          templateUrl: 'templates/addEvent.html',
          controller: 'addEventCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.searchEvents', {
      url: '/search',
      views: {
        'tab2': {
          templateUrl: 'templates/searchEvents.html',
          controller: 'searchEventsCtrl'
        }
      }
    })      
    
      
        
    .state('tabsController.myProfile', {
      url: '/profile',
      views: {
        'tab4': {
      templateUrl: 'templates/myProfile.html',
      controller: 'myProfileCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })

        
      
    
      
        
    .state('searchResults', {
      url: '/searchResults/:category',
      templateUrl: 'templates/searchResults.html',
      controller: 'searchResultsCtrl'
    })
        
      
    
      
        
    .state('eventDetails', {
      url: '/eventDetails/:objectID',
      templateUrl: 'templates/eventDetails.html',
      controller: 'eventDetailsCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});
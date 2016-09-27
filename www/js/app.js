// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
      
   .state('tab.search', {
     url: '/search',
     views: {
        'tab-search': {
          templateUrl: 'templates/tab-search.html',
          controller: 'SearchCtrl'
        }
      }
   })
        
   .state('tab.camera', {
     url: '/camera',
     views: {
        'tab-camera': {
          templateUrl: 'templates/tab-camera.html',
          controller: 'CameraCtrl'
        }
       }
    })
        
    .state('tab.heart', {
      url: '/heart',
      views: {
        'tab-heart': {
            templateUrl: 'templates/tab-heart.html',
            controller: 'HeartCtrl'
        }
       }
    })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});




$scope.takePhotos = funtion()
{
    
    var options = {
        
        // Some common settings are 20, 50, and 100
        
    quality: 50,
        
    destinationType: Camera.DestinationType.FILE_URI,
        
    sourceType: Camera.PictureSourceType.CAMERA,
        
    encodingType: Camera.EncodingType.JPEG,
        
    mediaType: Camera.MediaType.PICTURE
        
    };
    
    navigator.camera.getPicture(function cameraSuccess(imageUri) {
                                
    // The use of $apply is required to make angular aware of the changed situation,
                                
    // without it you will not see the image on the screen as expected.
                                
    $scope.$apply(function(){
                                              
    $scope.camera.picture = imageUri;
                                              
    console.log(imageUri);
                                              
        });
                                
            }, function cameraError(error) {
                                
            console.debug("Unable to obtain picture: " + error, "app");
                                
    }, options);
    
}


angular.module('video-player').component('app', {
  templateUrl: 'src/templates/app.html',
  controller: VideosController
});

function VideosController () {
  var $ctrl = this;
  $ctrl.videos = window.exampleVideoData;
}



// function HeroListController($scope, $element, $attrs) {
//   var ctrl = this;

//   // This would be loaded by $http etc.
//   ctrl.list = [
//     {
//       name: 'Superman',
//       location: ''
//     },
//     {
//       name: 'Batman',
//       location: 'Wayne Manor'
//     }
//   ];

//   ctrl.updateHero = function(hero, prop, value) {
//     hero[prop] = value;
//   };

//   ctrl.deleteHero = function(hero) {
//     var idx = ctrl.list.indexOf(hero);
//     if (idx >= 0) {
//       ctrl.list.splice(idx, 1);
//     }
//   };
// }
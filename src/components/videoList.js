angular.module('video-player').component('videoList', {
  controller: videoListController,
  templateUrl: 'src/templates/videoList.html',
  bindings: {
    videos: '<'
  }
});

function videoListController ($scope) {
  var $ctrl = this;

  console.log('this is video list', $ctrl);

}


// function HeroDetailController() {
//   var ctrl = this;

//   ctrl.delete = function() {
//     ctrl.onDelete({hero: ctrl.hero});
//   };

//   ctrl.update = function(prop, value) {
//     ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value});
//   };
// }

// angular.module('heroApp').component('heroDetail', {
//   templateUrl: 'heroDetail.html',
//   controller: HeroDetailController,
//   bindings: {
//     hero: '<',
//     onDelete: '&',
//     onUpdate: '&'
//   }
// });
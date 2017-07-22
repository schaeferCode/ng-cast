angular.module('video-player').component('videoPlayer', {
  controller: videoPlayer,

  bindings: {
    video: '<'
  },

  templateUrl: 'src/templates/videoPlayer.html'
});

function videoPlayer ($scope) {
  var $ctrl = this;

  console.log('this is video player', this)
}

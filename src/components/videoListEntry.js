angular.module('video-player').component('videoListEntry', {
  controller: videoListEntry,

  bindings: {
    video: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'

});

function videoListEntry ($scope) {
  var $ctrl = this;
}
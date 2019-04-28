// (function (doc) {
console.log('content loaded!');
var doc = document;
var loadEl = doc.getElementById('pageLoading');
var fadeOut = doc.getElementById('fadeIn');
var vid = doc.getElementById('vid');

function onVideoPlayStart() {
	console.log('timeout completed');
	loadEl.style = 'animation-name: fadeOut';
	fadeOut.style = 'animation-name: fadeIn';
}

vid.onplay = function () {
	setTimeout(onVideoPlayStart, 1000)
};
// }(document))
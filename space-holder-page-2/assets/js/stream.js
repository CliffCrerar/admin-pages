(function (doc) {
	console.log('Getting stream');
	var vid = document.getElementById('vid');
	// var srcUrl = vid.children[0].src;
	var srcUrl = 'http://www.cdn-gloud-infinityarc.ga/videossets/videobackground1.mp4';
	//var media = new MediaSource();
	//var url = URL.createObjectURL(media);
	//vid.src = url;
	// var audioSrcBuffer = media.addSourceBuffer('audio/mp4; codecs="mp4a.40.2"');
	// var videoSrcBuffer = media.addSourceBuffer('video/mp4; codecs="avc1.64001e"');

	vid.onloadedmetadata = () => console.log('loadedmetadata');

	vid.onloadeddata = () => console.log('loadeddata');

	vid.onloadstart = () => console.log('loadstart');

	vid.oncanplay = () => console.log('canplay');

	vid.onplay = () => console.log('play');

	vid.onplaying = () => console.log('playing');


	// fetch(srcUrl).then(res => {
	// 	console.log('res: ', res);

	// })

	// media.onsourceopen = ev => {
	// 	console.log(ev);
	// 	vid.play()
	// }


	// console.log('vid: ', vid);
	// console.log('srcUrl: ', srcUrl);
	// console.log('media: ', media);
	// console.log('url: ', url);
	// console.log('vid.src: ', vid.src);
	// console.log('audioSrcBuffer: ', audioSrcBuffer);
	// console.log('videoSrcBuffer: ', videoSrcBuffer);

}(document))
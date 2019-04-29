const path = require('path');
const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3();


var stream = fs.readFileSync('./_oldfiles/PexelsVideos1472013.mp4')
//console.log('thisBUffer: ', thisBUffer);

var params = { Bucket: 'stream-media-aws-infinityarc.tk', Key: 'pagebackgroundvid1.mp4', Body: stream };
// const vid1Stream = fs.read

var upload = s3.upload(params, finish)
upload.on('httpUploadProgress', progress => console.log(progress));

function finish(err, data) {
	console.log(err, data);
}
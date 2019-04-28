const path = 'path';
const fs = 'fs';


var params = { Bucket: 'bucket', Key: 'key', Body: stream };
const vid1Stream = fs.read

s3.upload(params, function (err, data) {
	console.log(err, data);
});
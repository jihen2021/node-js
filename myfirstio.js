var fs=require(fs)
var file =fs.readFileSync(process.avg[2])
var str = file.toString();
var strArray = str.split('\n');
console.log(strArray.length - 1);
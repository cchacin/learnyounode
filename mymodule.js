module.exports = function(directory, ext, callback) {
    require('fs').readdir(directory, function (err, list) {
        if (err) return callback(err);
        list.filter(function(file){
            return require('path').extname(file) === '.' + ext;
        }).forEach(function(file, index) {
            callback(null, file);
        });
    });
}
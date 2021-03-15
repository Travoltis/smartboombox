var exec = require('child_process').exec;

// Create shutdown function
function shutdown(callback){
    exec('shutdown now', function(error, stdout) { callback(stdout); });
}

export default shutdown(function(output){
    console.log(output)
});

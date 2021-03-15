var exec = require('child_process').exec;

// Create reboot function
function reboot(callback){
    exec('shutdown -r now', function(error, stdout) { callback(stdout); });
}

export default reboot(function(output){
    console.log(output)
});

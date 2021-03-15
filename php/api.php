
<?php
// switch between the commands
switch($_GET['command']) {
    case 'shutdown':
        return "Raspberry Pi shutdown in 1. Minute!";
        exec ("/sbin/shutdown -h 1");
        break;
    case 'wifi':
        return "Wlan Modus wird aktiviert";
        exec ("sudo /var/www/html/Scripts/WLAN-Mode.sh");
        break;
    case 'restart':
        return "Raspberry Pi startet neu in 1. Minute!";
        exec ("/sbin/shutdown -r 1");
        break;
    default:
        return 'Nope';
        break;
}

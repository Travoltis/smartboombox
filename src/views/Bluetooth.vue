<template>
    <div class="container">
        <h1>Bluetooth</h1>
        <p>Verbindung zu Bluetooth aktivieren
        raspberrypi auswählen
        Pairing Request mit OK bestätigen
        Musik abspielen
        Enjoy it</p>
        <v-btn id="button" @click="requestDeviceChooser" depressed class="pink white--text"><v-icon>Koppeln</v-icon></v-btn>
    </div>
</template>

<script>
const requestDeviceChooser = () => {
    // Call navigator.bluetooth.requestDevice
    navigator.bluetooth.requestDevice({ filters: [{ services: ['device_information'] }] })
  .then(device => { console.log(device); })
  .catch(error => { console.log(error); });
}

export default {
    data() {
        return {
            requestDeviceChooser
        }
    }
}
</script>
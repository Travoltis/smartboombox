<template>
    <div class="container">
        <h1>Wifi</h1>
        <p id="msg" class="pa-1 text-center accent-1"></p>
        <v-btn id="btnWifi" v-on:click="test" depressed class="pink white--text hidden ma-auto">Wifi aktivieren</v-btn>
    </div>
</template>

<script>
// const msg = document.querySelector('#msg');

export default {
    methods: {
        test: () => {
            console.log('connecting...');
        },
        checkWifi: function() {
            let msg = document.querySelector('#msg');
            let btnWifi = document.querySelector('#btnWifi');
            if (msg && btnWifi) {
                if (navigator.onLine === true) {
                    msg.classList.remove('red');
                    msg.classList.add('green');
                    btnWifi.classList.add('hidden');
                    btnWifi.classList.remove('d-block');
                    msg.innerText = 'Smartboombox ist online.';
                } else {
                    msg.classList.add('red');
                    msg.classList.remove('green');
                    btnWifi.classList.remove('hidden');
                    btnWifi.classList.add('d-block');
                    msg.innerText = 'Smartboombox ist offline.';
                }
            }
        }
    },
    created() {
        setInterval(this.checkWifi, 1000);
    }
}
</script>
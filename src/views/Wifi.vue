<template>
    <div class="container">
        <h1>Wifi</h1>
        <p id="msg" class="pa-1 text-center accent-1"></p>
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
            if (msg) {
                if (navigator.onLine === true) {
                    msg.classList.remove('red');
                    msg.classList.add('green');
                    msg.innerText = 'Smartboombox ist online.';
                } else {
                    msg.classList.add('red');
                    msg.classList.remove('green');
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
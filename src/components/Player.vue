<template>
  <div class="player">
    <p>Radio32</p>
    <div>
        <v-btn id="playBtn" @click="play" depressed class="green white--text"><v-icon>{{playIcon}}</v-icon></v-btn>
        <v-btn id="pauseBtn" @click="pause" depressed class="hidden green white--text"><v-icon>{{pauseIcon}}</v-icon></v-btn>
        <v-btn @click="mute" depressed class="red white--text"><v-icon>{{muteIcon}}</v-icon></v-btn>
        <v-btn @click="volup" depressed class="blue white--text"><v-icon>{{volHighIcon}}</v-icon></v-btn>
        <v-btn @click="voldown" depressed class="blue white--text"><v-icon>{{volLowIcon}}</v-icon></v-btn>
    </div>
  </div>
</template>

<script>
// icons from https://materialdesignicons.com/ with prefix mdi
import { mdiPlay, mdiPause, mdiVolumeOff, mdiVolumeHigh, mdiVolumeMedium } from '@mdi/js'

export default {
    data() {
        return {
            playIcon: mdiPlay,
            pauseIcon: mdiPause,
            muteIcon: mdiVolumeOff,
            volHighIcon: mdiVolumeHigh,
            volLowIcon: mdiVolumeMedium,
            playing: false
        }
    },
    methods: {
        play: function() {
            document.querySelector('#playBtn').classList.add('hidden');
            document.querySelector('#pauseBtn').classList.remove('hidden');
            this.playing = true;
            console.log('Playing?', this.playing);
        },
        pause: function() {
            document.querySelector('#playBtn').classList.remove('hidden');
            document.querySelector('#pauseBtn').classList.add('hidden');
            this.playing = false;
            console.log('Playing?', this.playing);
        },
        mute: () => {
            console.log('Mute');
        },
        volup: () => {
            console.log('Voume +');
        },
        voldown: () => {
            console.log('Volume -');
        },
    }
}

// /**
//  *  Description:    This file handles the whole controls of the UI
//  *  File:           js/script.js
//  *  Author:         Marco Ris
//  *  Version:        1.0.0
//  *  Date:           01.11.2018
//  * 
//  */

// // get the radioplayer
// var radioInterface = document.getElementById('radiointerface');

// //----------------- settings start -----------------
// // set volume from 0 - 10
// var volume = 10;

// // show the radio name
// var showRadioName = false;

// // settings for the player
// radioInterface.autoplay = true;
// radioInterface.controls = false;
// radioInterface.loop = true;

// // here we define some radiostation streaming links as an object
// var radioStations = {
//     1: {
//         'name': 'Radio32',
//         'stream': 'http://stream.radio32.ch/radio32'
//     },
//     2: {
//         'name': 'DRS3',
//         'stream': 'http://stream.srg-ssr.ch/m/drs3/mp3_128'
//     },
//     3: {
//         'name': 'Vorarlberg',
//         'stream': 'http://webradio.antennevorarlberg.at:80/90er'
//     },
//     4: {
//         'name': 'Argovia Hitmix',
//         'stream': 'http://icecast.argovia.ch//argoviahitmix'
//     }
// }
// //----------------- settings end -----------------

// // set volume count depends on the volume variable
// var volCount = volume;

// // set volume of the player
// var volPlayer = volCount / 10;

// // set volcount memory
// var volCountMem = volCount / 10;

// // set volCount trigger
// var volCountTrigger = false;

// // set the volume up button to disabled if volume is 100%
// if (volPlayer == 1) {
//     document.getElementById("player-volumeup").disabled = true;
// } else {
//     radioInterface.volume = volPlayer;
// }

// // function to handle the radio stations and play them in the player
// function openStream(radio)
// {
//     // show the custom controls
//     document.getElementById("controls").style.display = 'block';

//     // display the play/pause button on autoplay = true
//     if (radioInterface.autoplay) {
//         // add class hide to the play button
//         document.getElementById("player-play").classList.add("hide");
    
//         // show the pause button
//         document.getElementById("player-pause").classList.remove("hide");
//     } else {
//         // add class hide to the play button
//         document.getElementById("player-play").classList.remove("hide");
    
//         // show the pause button
//         document.getElementById("player-pause").classList.add("hide");
//     }

//     // show the radio name
//     if (showRadioName) {
//         document.getElementById("radioname").innerHTML = radioStations[radio].name;
//     }
    
//     // remove the active class from all on air
//     for (let key in radioStations) {
//         document.getElementById("onair"+key).classList.remove("active");
//     }

//     // here we add the active class on the element
//     document.getElementById("onair"+radio).classList.add("active");

//     // set source of the stream
//     radioInterface.src = radioStations[radio].stream;
// }

// // the function of the player play button
// function play()
// {
//     // start player
//     radioInterface.play();
    
//     // add class hide to the play button
//     document.getElementById("player-play").classList.add("hide");

//     // show the pause button
//     document.getElementById("player-pause").classList.remove("hide");
// }

// // the function of the player pause button
// function pause()
// {
//     // pause the player
//     radioInterface.pause();

//     // add class hide to the play button
//     document.getElementById("player-pause").classList.add("hide");

//     // show the pause button
//     document.getElementById("player-play").classList.remove("hide");
// }

// // the function of the player mute button
// function mute()
// {
//     // check if the mute button was pressed before to enable the volume buttons and set back the volume
//     if (volCountTrigger) {
//         radioInterface.volume = volCountMem;
//         volCount = parseInt(volCountMem * 10);

//         // enable the player volume up button if the volume reached the maximum
//         if (volCount < 10) {
//             document.getElementById("player-volumeup").disabled = false;
//         }
//         if (volCount > 0) {
//             document.getElementById("player-volumedown").disabled = false;
//         }
//         volCountTrigger = false;
//     } else {
//         radioInterface.volume = 0;
//         volCount = 0;
//         document.getElementById("player-volumeup").disabled = true;
//         document.getElementById("player-volumedown").disabled = true;
//         volCountTrigger = true;
//     }
// }

// // the function of the player volume up button
// function volumeUp()
// {
//     // disable the player volume up button if the volume reached the maximum
//     if (volCount == 9) {
//         document.getElementById("player-volumeup").disabled = true;
//     }

//     // enable the player volume down button if the volume is under the maximum
//     if (volCount < 10) {
//         radioInterface.volume += .1;
//         volCountMem += .1;
//         volCount++;
//         document.getElementById("player-volumedown").disabled = false;
//         document.getElementById("player-mute").disabled = false;
//     }
// }

// // the function of the player volume up button
// function volumeDown()
// {
//     // disable the player volume down button if the volume reached the minimum
//     if (volCount == 1) {
//         document.getElementById("player-volumedown").disabled = true;
//         document.getElementById("player-mute").disabled = true;
//     }

//     // enable the player volume up button if the volume is over the minimum
//     if (volCount > 0) {
//         radioInterface.volume -= .1;
//         volCountMem -= .1;
//         volCount--;
//         document.getElementById("player-volumeup").disabled = false;
//     }
// }

</script>

<style lang="scss">
@import '../scss/style.scss';

.player {
    background: white;
    border-top: 1px solid gray;
    bottom: 0;
    left: 0;
    padding: 5px;
    position: fixed;
    text-align: center;
    width: 100%;

    p {
        margin: 0 !important;
    }

    button+button:nth-of-type(n+3) {
        margin-left: 5px;
    }
}

</style>

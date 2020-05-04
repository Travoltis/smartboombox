<template>
    <div id="nav" class="navigation">
        <router-link to="/"><v-icon>{{homeIcon}}</v-icon></router-link>
        <router-link to="/bluetooth"><v-icon>{{bluetoothIcon}}</v-icon></router-link>
        <router-link to="/wifi"><v-icon>{{wifiIcon}}</v-icon></router-link>
        <router-link to="/raspi"><v-icon>{{raspiIcon}}</v-icon></router-link>
        <router-link to="/settings"><v-icon>{{settingsIcon}}</v-icon></router-link>
        <router-link to="/about"><v-icon>{{aboutIcon}}</v-icon></router-link>
    </div>
</template>

<script>
// icons from https://materialdesignicons.com/ with prefix mdi
import { mdiHome, mdiCog, mdiBluetooth, mdiWifi, mdiRaspberryPi, mdiInformation } from '@mdi/js'

export default {
    name: 'Navbar',
    data: () => ({
        homeIcon: mdiHome,
        bluetoothIcon: mdiBluetooth,
        wifiIcon: mdiWifi,
        raspiIcon: mdiRaspberryPi,
        settingsIcon: mdiCog,
        aboutIcon: mdiInformation
    })
}
</script>

<style lang="scss">
@import '../scss/style.scss';

.navigation {
    box-shadow: 0 5px 10px $shadowColor;
    display: flex;
    line-height: 60px;
    position: fixed;
    text-align: center;
    width: 100%;
    z-index: 100;

    a {
        flex-grow: 1;
        text-decoration: none;

        &:hover,
        &:active,
        &:focus,
        &.router-link-exact-active.router-link-active {
            background-color: $whitesmokeColor;

            svg {
                fill: $blackColor;
            }
        }

        &+a {
            border-left: 1px solid $grayColor;
        }
    }
}
</style>

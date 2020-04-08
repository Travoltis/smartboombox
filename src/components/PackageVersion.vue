<template>
  <div style="display: inline-block;">v{{version}}</div>
</template>

<script>
import {version} from '../../package.json';

export default {
    name: 'PackageInfo',

    data() {
        return {
        version
        };
    }
}
</script>

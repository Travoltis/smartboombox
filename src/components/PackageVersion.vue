<template>
  <div style="display: inline-block;">v{{version}}</div>
</template>

<script>
import {version} from '../../package.json';

export default {
    data() {
        return {
        version
        };
    }
}
</script>

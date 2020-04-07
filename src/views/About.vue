<template>
  <div class="container about">
    <h1>About</h1>
    <table>
        <tr>
            <th>Information</th>
            <th></th>
        </tr>
        <tr>
            <td>App:</td>
            <td>{{ this.name }}</td>
        </tr>
        <tr>
            <td>Version:</td>
            <td>{{ this.version }}</td>
        </tr>
        <tr>
            <td>Author:</td>
            <td>{{ this.author }}</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>{{ this.description }}</td>
        </tr>
    </table>
  </div>
</template>

<script>
import {name, version, author, description} from '../../package.json';

export default {
  name: 'About',
  data() {
    return {
      name,
      version,
      author,
      description
    };
  }
}
</script>
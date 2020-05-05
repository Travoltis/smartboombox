<template>
  <div>
    <table>
        <tr>
            <th colspan="2">Information</th>
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
            <td>Programmer:</td>
            <td>{{ this.author }}</td>
        </tr>
        <tr>
            <td>Description:</td>
            <td>{{ this.description }}</td>
        </tr>
        <tr>
            <td>Organization:</td>
            <td>{{ this.organization }}</td>
        </tr>
        <tr>
            <td>Credits:</td>
            <td>{{ this.members }}</td>
        </tr>
    </table>
    <img src="../assets/travoltis_logo.png">
    <h2>Travoltis Inc</h2>
  </div>
</template>

<script>
  import { name, version, author, description, organization, members } from '../../package.json';

  export default {
    data() {
      return {
        name,
        version,
        author,
        description,
        organization,
        members
      };
    }
  }
</script>

<style lang="scss">
@import '../scss/style.scss';

table {
  border-collapse: collapse;
  font-family: arial, sans-serif;
  margin: auto;
}

th {
  background: #4CAF50;
}
td {
  width: 50%;
}

td, th {
  border: 1px solid $grayColor;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

img {
    display: block;
    margin: 20px auto;
}

h2 {
    text-align: center;
}
</style>
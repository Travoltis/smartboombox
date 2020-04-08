<template>
  <div>
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
    name: 'PackageInfo',

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

<style lang="scss">
table {
    background-color: white;
    border: 1px solid gray;
    border-collapse: collapse;
    display: block;
    margin: 12% auto;
    width: 960px;

    tr {
        display: block;

        &:nth-child(even) {
        background-color: #f2f2f2;
        }

        th {
        background-color: #4CAF50;
        color: white;
        padding-bottom: 12px;
        padding-top: 12px;
        text-align: left;
        }

        th,
        td {
        border: 1px solid #ddd;
        padding: 8px;
        width: 480px;
        }
    }
}
</style>
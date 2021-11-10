<template>
  <div class="row">
    <div class="col-md-12">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th>Case Manager</th>
            <th>Case Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Referrals</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in clients" :key="client._id">
            <td>{{ client.caseManager }}</td>
            <td>{{ client.caseNumber }}</td>
            <td>{{ client.generalInformation.firstName }}</td>
            <td>{{ client.generalInformation.lastName }}</td>
            <td>
              <b-button @click="getReferrals(client.caseManager, client.caseNumber, client.generalInformation.firstName, client.generalInformation.lastName)">Referrals</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [],
    };
  },
  methods: {
    getReferrals(casemanager, casenumber, firstname, lastname) {
      const url = `${this.$hostname}/client/referrals/${casemanager}/${casenumber}/${firstname}/${lastname}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
    },
  },
  // this is using created hook S
  created() {
    const url = `${this.$hostname}/client`;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => (this.clients = data))
      .catch((e) => console.log(e));
  },
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>

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
            <th>Start Date</th>
            <th>Legal Information</th>
            <th>Social Service Information</th>
            <th>Referrals</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="client in Clients" :key="client._id">
            <td>{{ client.caseManager }}</td>
            <td>{{ client.caseNumber }}</td>
            <td>{{ client.generalInformation.firstName }}</td>
            <td>{{ client.generalInformation.lastName }}</td>
            <td>{{ client.startDate }}</td>
            <td>{{ client.legalInformation }}</td>
            <td>{{ client.socialServiceInformation }}</td>

          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Clients: [],
    };
  },
  // this is using created hook S
  created() {
    let apiURL1 = `/client`; // 'http://localhost:3000/client';
    axios
      .get(apiURL1)
      .then((res) => {
        this.Clients = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>



<style>
.btn-success {
  margin-right: 10px;
}
</style>

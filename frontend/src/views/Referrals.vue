<template>
  <div>
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
    <modal v-if="showModal" @close="showModal = false">
      <template v-slot:header>
        <h3>Header!</h3>
      </template>
      <template v-slot:body>
        <table v-if="selectedClient !== null" class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Case Manager</th>
              <th>Date</th>
              <th>Used?</th>
              <th>Resolved?</th>
              <th>Type</th>
              <th>Time Spent</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in selectedClient.socialServiceReferrals" :key="r._id">
              <td>{{ r.caseManagerName }}</td>
              <td>{{ r.date }}</td>
              <td>{{ r.isReferralUsed }}</td>
              <td>{{ r.isResolved }}</td>
              <td>{{ r.type }}</td>
              <td>{{ r.timeSpent }}</td>
              <td>{{ r.notes }}</td>
            </tr>
          </tbody>
        </table>
      </template>
    </modal>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";
export default {
  components: {
    Modal,
  },
  data() {
    return {
      clients: [],
      selectedClient: null,
      showModal: false,
    };
  },
  methods: {
    getReferrals(casemanager, casenumber, firstname, lastname) {
      const url = `${this.$hostname}/client/referrals/${casemanager}/${casenumber}/${firstname}/${lastname}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          this.selectedClient = data;
        })
        .then(() => this.showModal = true)
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

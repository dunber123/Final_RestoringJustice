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
        <div>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(r, i) in selectedClient.socialServiceReferrals" :key="i">
                <!-- regular row, no editing -->
                <template v-if="edit === null || edit._id !== r._id">
                  <td>{{ r.caseManagerName }}</td>
                  <td>{{ r.date }}</td>
                  <td>{{ r.isReferralUsed }}</td>
                  <td>{{ r.isResolved }}</td>
                  <td>{{ r.type }}</td>
                  <td>{{ r.timeSpent }}</td>
                  <td>{{ r.notes }}</td>
                  <td><b-button @click="edit = r">Edit</b-button></td>
                </template>
                <!-- if edit was clicked, we set data.edit to this row, which shows this as the table data: -->
                <template v-if="edit !== null && edit._id === r._id">
                  <td><b-form-input v-model="r.caseManagerName"></b-form-input></td>
                  <td><input type="Date" class="form-control" v-model="r.date" /></td>
                  <td><b-form-select v-model="r.isReferralUsed" :options="[{ value: true, text: 'true' }, { value: false, text: 'false' }]"></b-form-select></td>
                  <td>{{ r.isResolved }}</td>
                  <td>{{ r.type }}</td>
                  <td>{{ r.timeSpent }}</td>
                  <td>{{ r.notes }}</td>
                  <td><b-button @click="save(r)">Save</b-button></td>
                </template>
              </tr>
            </tbody>
          </table>
        </div>
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
      edit: null,
    };
  },
  methods: {
    save(dataToSave) {
      console.log({dataToSave});
      // this is where you would call the update route to update the edited referral
      // Something like: (you will need to create the route in express)
      // fetch(`${this.$hostname}/update-referral/${this.selectedClient.caseNumber}/${dataToSave._id}`, { body: dataToSave, headers: { 'Content-Type': 'application/json' } });
    },
    setEdit(e) {
      this.edit = e;
      console.log(this.edit);
    },
    getReferrals(casemanager, casenumber, firstname, lastname) {
      const url = `${this.$hostname}/client/referrals/${casemanager}/${casenumber}/${firstname}/${lastname}`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          this.selectedClient = data[0];
        })
        .then(() => (this.showModal = true))
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

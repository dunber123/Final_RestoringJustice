<template>
  <div>
    <div class="m-2">
      <label for="caseNumber">Case Number:</label>
      <b-form-input
        id="caseNumber"
        v-model="caseNumber"
        placeholder="Enter Case #"
        trim
      ></b-form-input>
    </div>

    <div class="m-2">
      <label for="clientNumber">Client Number:</label>
      <b-form-input
        id="clientNumber"
        v-model="clientNumber"
        placeholder="Enter Client #"
        trim
      ></b-form-input>
    </div>

    <div class="m-2">
      <label for="startDatePicker">Start Date:</label>
      <input type="Date" class="form-control" v-model="startDate">
    </div>

    <div class="m-2">
      <label for="closeDatePicker">Close Date:</label>
      <input type="Date" class="form-control" v-model="closeDate">
    </div>

    <div>
      <h3>General Information</h3>

    </div>
  </div>
</template>

<script>
import 'bootstrap-vue-3'
  export default {
    // computed: {
    //   caseNumberState() {
    //     return this.name.length > 2 ? true : false
    //   }
    // },
    data() {
      return {
        caseNumber: '',
        clientNumber: '',
        startDate: null,
        closeDate: null,
        generalInformation: {
          lastName: '',
          firstName: '',
          middleName: '',
          birthdate: '',
          ssn: '',
          isUsCitizen: '',
          gender: '',
          identificationNumber: ''
        },
        residenceInformation: {
          streetAddress: '',
          city: '',
          state: '',
          zip: '',
          county: '',
          totalRent: '',
          isUtilitiesIncluded: '',
          isSubsidized: '',
          isSingleParent: '',
          heightWeight: '',
          isInCustody: '',
          inCustodyLocation: null,
          isAdelphoi: '',
          adelphoiName: '',
        },
        contactInformation: {
          
        }
      }
    }
  }
</script>

<style>

</style>
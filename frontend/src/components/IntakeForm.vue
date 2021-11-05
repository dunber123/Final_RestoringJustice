<template>
  <div>
    <label for="caseNumber">Case Number:</label>
    <b-form-input
      id="caseNumber"
      v-model="caseNumber"
      placeholder="Enter Case #"
      trim
    ></b-form-input>

    <label for="clientNumber">Client Number:</label>
    <b-form-input
      id="clientNumber"
      v-model="clientNumber"
      placeholder="Enter Client #"
      trim
    ></b-form-input>

    <label for="startDatePicker">Start Date:</label>
    <b-form-datepicker id="startDatePicker" v-model="startDate" class="mb-2"></b-form-datepicker>

    <label for="closeDatePicker">Close Date:</label>
    <b-form-datepicker id="closeDatePicker" v-model="closeDate" class="mb-2"></b-form-datepicker>

    <b-form-group label="Income Information">

    </b-form-group>
  </div>
</template>

<script>
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
      }
    }
  }
</script>

<style>

</style>
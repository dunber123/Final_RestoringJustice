<template>
  <b-container>
    <b-row class="justify-content-md-center">
      <b-col col md="5">
        <div class="my-2">
          <label for="caseNumber">Case Number:</label>
          <b-form-input id="caseNumber" v-model="caseNumber" placeholder="Enter Case #" trim></b-form-input>
        </div>
      </b-col>
      <b-col col md="5">
        <div class="my-2">
          <label for="clientNumber">Client Number:</label>
          <b-form-input id="clientNumber" v-model="clientNumber" placeholder="Enter Client #" trim></b-form-input>
        </div>
      </b-col>
    </b-row>

    <b-row class="justify-content-center">
      <b-col col md="5">
        <div class="my-2">
          <label for="startDatePicker">Start Date:</label>
          <input type="Date" class="form-control" v-model="startDate" />
        </div>
      </b-col>
      <b-col col md="5">
        <div class="my-2">
          <label for="closeDatePicker">Close Date:</label>
          <input type="Date" class="form-control" v-model="closeDate" />
        </div>
      </b-col>
    </b-row>

    <h3>General Information</h3>
    <b-row class="justify-content-center my-2">
      <b-col col md="4">
        <label for="general.firstName">First Name:</label>
        <b-form-input id="general.firstName" v-model="generalInformation.firstName" placeholder="First Name:" trim></b-form-input>
      </b-col>
      <b-col col md="4">
        <label for="general.lastName">Last Name:</label>
        <b-form-input id="general.lastName" v-model="generalInformation.lastName" placeholder="Last Name:" trim></b-form-input>
      </b-col>
      <b-col col md="4">
        <label for="general.middleName">Middle Name:</label>
        <b-form-input id="general.middleName" v-model="generalInformation.middleName" placeholder="Middle Name:" trim></b-form-input>
      </b-col>
    </b-row>

    <b-row class="justify-content-center my-2">
      <b-col col md="6">
        <label for="general.birthDate">Birth Date:</label>
        <input id="general.birthDate" type="Date" class="form-control" v-model="generalInformation.birthdate" />
      </b-col>
      <b-col col md="6">
        <label for="general.ssn">SSN:</label>
        <b-form-input id="general.ssn" v-model="generalInformation.ssn" placeholder="SSN" trim></b-form-input>
      </b-col>
    </b-row>

    <b-row class="justify-content-center my-2">
      <b-col col md="6">
        <label for="general.identificationNumber">ID/TX Drivers License:</label>
        <b-form-input id="general.identificationNumber" v-model="generalInformation.identificationNumber" placeholder="ID or TX DL" trim></b-form-input>
      </b-col>
      <b-col col md="3" style="border: 1px solid gray;">
        <label for="general.isUsCitizen">Is US Citizen?:</label>
        <b-form-radio-group id="general.isUsCitizen">
          <b-form-radio v-model="generalInformation.isUsCitizen" name="general.isUsCitizen.y" value="true">Yes</b-form-radio>
          <b-form-radio v-model="generalInformation.isUsCitizen" name="general.isUsCitizen.n" value="false">No</b-form-radio>
        </b-form-radio-group>
      </b-col>
      <b-col col md="3" style="border: 1px solid gray;">
        <label for="general.gender">Gender:</label>
        <b-form-radio-group id="general.gender">
          <b-form-radio v-model="generalInformation.gender" name="general.gender.f" value="female">Female</b-form-radio>
          <b-form-radio v-model="generalInformation.gender" name="general.gender.m" value="male">Male</b-form-radio>
        </b-form-radio-group>
      </b-col>
    </b-row>

  </b-container>
</template>

<script>
import "bootstrap-vue-3";
export default {
  computed: {
    isUsCitizenLabel() {
      if (this.generalInformation.isUsCitizen === null) return "";
      return this.generalInformation.isUsCitizen ? "Yes" : "No";
    },
  },
  data() {
    return {
      caseNumber: "",
      clientNumber: "",
      startDate: null,
      closeDate: null,
      generalInformation: {
        lastName: "",
        firstName: "",
        middleName: "",
        birthdate: "",
        ssn: "",
        isUsCitizen: null,
        gender: null,
        identificationNumber: "",
      },
      residenceInformation: {
        streetAddress: "",
        city: "",
        state: "",
        zip: "",
        county: "",
        totalRent: "",
        isUtilitiesIncluded: "",
        isSubsidized: "",
        isSingleParent: "",
        heightWeight: "",
        isInCustody: "",
        inCustodyLocation: null,
        isAdelphoi: "",
        adelphoiName: "",
      },
      contactInformation: {},
    };
  },
};
</script>

<style></style>

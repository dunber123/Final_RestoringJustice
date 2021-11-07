<template>
  <!-- START OF FORM -->
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

    <!-- ------------------------------------------------------------------------------------------------------------------ -->
    <!-- GENERAL INFORMATION -->
    <!-- ------------------------------------------------------------------------------------------------------------------ -->

    <div class="mt-4">
      <h1>General Information</h1>
      <!-- General Info : First row -->
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
      <!-- General Info : Second row -->
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
      <!-- General Info : Third row -->
      <b-row class="justify-content-center my-2">
        <b-col col md="6">
          <label for="general.identificationNumber">ID/TX Drivers License:</label>
          <b-form-input id="general.identificationNumber" v-model="generalInformation.identificationNumber" placeholder="ID or TX DL" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="general.isUsCitizen">Is US Citizen?:</label>
          <b-form-group id="general.isUsCitizen">
            <b-form-radio v-model="generalInformation.isUsCitizen" name="general.isUsCitizen.y" value="true">Yes</b-form-radio>
            <b-form-radio v-model="generalInformation.isUsCitizen" name="general.isUsCitizen.n" value="false">No</b-form-radio>
          </b-form-group>
        </b-col>
        <b-col col md="3">
          <label for="general.gender">Gender:</label>
          <b-form-group id="general.gender">
            <b-form-radio v-model="generalInformation.gender" name="general.gender.f" value="female">Female</b-form-radio>
            <b-form-radio v-model="generalInformation.gender" name="general.gender.m" value="male">Male</b-form-radio>
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <!-- ------------------------------------------------------------------------------------------------------------------ -->
    <!-- RESIDENCE INFORMATION -->
    <!-- ------------------------------------------------------------------------------------------------------------------ -->

    <div class="mt-4">
      <h1>Residence Information</h1>
      <!-- Residence Info : First row -->
      <b-row class="justify-content-center my-2">
        <b-col col md="6">
          <label for="residence.address">Street Address:</label>
          <b-form-input id="residence.address" v-model="residenceInformation.streetAddress" placeholder="Address" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="residence.city">City:</label>
          <b-form-input id="residence.city" v-model="residenceInformation.city" placeholder="City" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="residence.state">State:</label>
          <b-form-input id="residence.state" v-model="residenceInformation.state" placeholder="State" trim></b-form-input>
        </b-col>
      </b-row>
      <!-- Residence Info : Second row -->
      <b-row class="justify-content-center my-2">
        <b-col col md="3">
          <label for="residence.county">County:</label>
          <b-form-input id="residence.county" v-model="residenceInformation.county" placeholder="County" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="residence.heightWeight">Height\Weight:</label>
          <b-form-input id="residence.heightWeight" v-model="residenceInformation.heightWeight" placeholder="6 feet 9 inches 190lbs" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="residence.totalRent">Total Rent:</label>
          <b-form-input id="residence.totalRent" v-model="residenceInformation.totalRent" placeholder="Rent" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <b-form-checkbox v-model="residenceInformation.utilitiesIncluded" value="true">Utilties Included?</b-form-checkbox>
          <b-form-checkbox v-model="residenceInformation.rentSubsidized" value="true">Is your rent subsidized?</b-form-checkbox>
          <b-form-checkbox v-model="residenceInformation.singleParent" value="true">Are you a single parent?</b-form-checkbox>
        </b-col>
      </b-row>
      <!-- Residence Info : Third row -->
      <b-row class="justify-content-left my-2"> 
        <b-col col md="2">
          <b-form-checkbox v-model="residenceInformation.inCustody" value="true">In Custody?</b-form-checkbox>
          <b-form-checkbox v-model="residenceInformation.adelphoi" value="true">Adelphoi?</b-form-checkbox>
        </b-col>
      </b-row>
      <!-- Residence Info : Fourth row -->
      <b-row>
        <b-col v-if="residenceInformation.inCustody" col md="10">
          <label for="residence.inCustodyLocation">In Custody at Location:</label>
          <b-form-input id="residence.inCustodyLocation" v-model="residenceInformation.inCustodyLocation" placeholder="In Custody Location" trim></b-form-input>
        </b-col>
        <b-col v-if="residenceInformation.adelphoi" col md="10">
          <label for="residence.adelphoiName">Adelphoi Name:</label>
          <b-form-input id="residence.adelphoiName" v-model="residenceInformation.adelphoiName" placeholder="Adelphoi Name" trim></b-form-input>
        </b-col>
      </b-row>
    </div>

    <!-- ------------------------------------------------------------------------------------------------------------------ -->
    <!-- CONTACT INFORMATION -->
    <!-- ------------------------------------------------------------------------------------------------------------------ -->

    <div class="mt-4">
      <h1>Contact Information</h1>
      <!-- Contact Info : First row -->
      <b-row class="my-2">
        <b-col col md="3">
          <label for="contactInformation.homePhone">Home Phone:</label>
          <b-form-input id="contactInformation.homePhone" v-model="contactInformation.homePhone" placeholder="Home Phone" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="contact.work">Work Phone:</label>
          <b-form-input id="contact.work" v-model="contactInformation.work" placeholder="Work" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="contact.cell">Cell Phone:</label>
          <b-form-input id="contact.cell" v-model="contactInformation.cell" placeholder="Cell" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="contact.other">Other:</label>
          <b-form-input id="contact.other" v-model="contactInformation.other" placeholder="Other" trim></b-form-input>
        </b-col>
      </b-row>
      <!-- Contact Info : Second row -->
      <b-row class="my-2">
        <b-col col md="3">
          <label for="contact.personalEmail">Personal Email:</label>
          <b-form-input id="contact.personalEmail" v-model="contactInformation.personalEmail" placeholder="Personal Email" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="contact.otherEmail">Other Email:</label>
          <b-form-input id="contact.otherEmail" v-model="contactInformation.otherEmail" placeholder="Other Email" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="contact.language">Language:</label>
          <b-form-select v-model="selected.language" id="contact.language">
            <b-form-select-option value="">Select Language</b-form-select-option>
            <b-form-select-option value="spanish">Spanish</b-form-select-option>
            <b-form-select-option value="english">English</b-form-select-option>
            <b-form-select-option value="bilingual">Bilingual</b-form-select-option>
            <b-form-select-option value="other">Other</b-form-select-option>
          </b-form-select>
          <b-form-input v-if="selected.language === 'other'" id="contact.language" v-model="contactInformation.language" placeholder="Enter Language" trim></b-form-input>
        </b-col>
        <b-col col md="3">
          <label for="contact.ethnicity">Ethnicity:</label>
          <b-form-select v-model="selected.ethnicity" id="contact.ethnicity">
            <b-form-select-option value="">Select Ethnicity</b-form-select-option>
            <b-form-select-option value="hispanic\latino">Hispanic\Latino</b-form-select-option>
            <b-form-select-option value="african\american">African\American</b-form-select-option>
            <b-form-select-option value="white\nonhispanic">White\Non-Hispanic</b-form-select-option>
            <b-form-select-option value="other">Other</b-form-select-option>
          </b-form-select>
          <b-form-input v-if="selected.ethnicity === 'other'" id="contact.ethnicity" v-model="contactInformation.ethnicity" placeholder="Enter Ethnicity" trim></b-form-input>
        </b-col>
      </b-row>
      <!-- Contact Info : Third row -->
      <b-row class="my-2">
        <b-col col md="3" class="mt-2">
          <label for="contact.maritalStatus">Marital Status:</label>
          <b-form-group id="contact.maritalStatus">
            <b-form-radio v-model="contactInformation.maritalStatus" name="contact.maritalStatusRadio" value="single">Single</b-form-radio>
            <b-form-radio v-model="generalInformation.maritalStatus" name="contact.maritalStatusRadio" value="married">Married</b-form-radio>
            <b-form-radio v-model="generalInformation.maritalStatus" name="contact.maritalStatusRadio" value="separated">Separated</b-form-radio>
            <b-form-radio v-model="generalInformation.maritalStatus" name="contact.maritalStatusRadio" value="divorced">Divorced</b-form-radio>
            <b-form-radio v-model="generalInformation.maritalStatus" name="contact.maritalStatusRadio" value="widow">Widow</b-form-radio>
            <b-form-radio v-model="generalInformation.maritalStatus" name="contact.maritalStatusRadio" value="common law">Common Law</b-form-radio>
          </b-form-group>
        </b-col>
      </b-row>
    </div>

    <!-- ------------------------------------------------------------------------------------------------------------------ -->
    <!-- EMPLOYMENT INFORMATION -->
    <!-- ------------------------------------------------------------------------------------------------------------------ -->

    <div class="mt-4">
      <h1>Employment Information</h1>
      <b-row>
        <b-col col md="3" class="mt-2">
          <b-form-group id="empoloyment.group">
            <b-form-radio v-model="selected.employment" value="employed">Employed</b-form-radio>
            <b-form-radio v-model="selected.employment" value="unemployed">Unemployed</b-form-radio>
            <b-form-radio v-model="selected.employment" value="retired">Retired</b-form-radio>
            <b-form-radio v-model="selected.employment" value="housewife">Housewife</b-form-radio>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="4">
          <label v-if="selected.employment === 'employed'" for="employment.length">Employment Length:</label>
          <b-form-input v-if="selected.employment === 'employed'" id="employment.length" v-model="employmentInformation.employmentLength" placeholder="Employment Length" trim></b-form-input>
        </b-col> 
        <b-col col md="4">
          <label v-if="selected.employment === 'employed'" for="employment.employer">Employer:</label>
          <b-form-input v-if="selected.employment === 'employed'" id="employment.employer" v-model="employmentInformation.employer" placeholder="Employer" trim></b-form-input>
        </b-col> 
        <b-col col md="4">
          <label v-if="selected.employment === 'employed'" for="employment.occupation">Occupation:</label>
          <b-form-input v-if="selected.employment === 'employed'" id="employment.occupation" v-model="employmentInformation.occupation" placeholder="Occupation" trim></b-form-input>
        </b-col> 
        <b-col col md="4">
          <label v-if="selected.employment === 'unemployed'" for="employment.unemployedLength">Unemployed Length:</label>
          <b-form-input v-if="selected.employment === 'unemployed'" id="employment.unemployedLength" v-model="employmentInformation.unemployedLength" placeholder="Unemployed Length" trim></b-form-input>
        </b-col>
      </b-row>
    </div>

    <!-- END OF FORM -->
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      // this is for our form state, and should not be submitted to backend
      selected: {
        language: "",
        ethnicity: "",
        employment: "",
      },
      // this data can be submitted to backend
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
        utilitiesIncluded: false, // Default to false since we only use a checkbox
        rentSubsidized: false, // Default to false since we only use a checkbox
        singleParent: "",
        heightWeight: "",
        inCustody: false, // Default to false since we only use a checkbox
        inCustodyLocation: null,
        adelphoi: false, // Default to false since we only use a checkbox
        adelphoiName: null,
      },
      contactInformation: {
        homePhone: "",
        work: "",
        cell: "",
        other: "",
        personalEmail: "",
        otherEmail: "",
        maritalStatus: "",
        language: "",
        ethnicity: ""
      },
      employmentInformation: {
        employmentLength: "",
        employer: "",
        occupation: "",
        unemploymentLength: "",
        retirementLength: "",
        housewife: false,
      }
    };
  },
};
</script>

<style></style>

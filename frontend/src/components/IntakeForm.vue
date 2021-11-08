<template>
  <div>
    <div style="text-align: center; margin-bottom: 3rem;">
      <h1>Intake Form</h1>
    </div>
    <div class="form-container">
      <!-- START OF FORM -->
      <b-container fluid>
        <b-row class="justify-content-md-center">
          <b-col col md="5">
            <div class="form-floating">
              <b-form-input id="caseNumber" v-model="caseNumber" placeholder="Enter Case #" trim></b-form-input>
              <label for="caseNumber">Case Number:</label>
            </div>
          </b-col>
          <b-col col md="5">
            <div class="form-floating">
            <b-form-input id="clientNumber" v-model="clientNumber" placeholder="Enter Client #" trim></b-form-input>
             <label for="clientNumber">Client Number:</label>
             </div>
          </b-col>
        </b-row>

        <b-row class="justify-content-center">
          <b-col col md="5">
            <label for="startDatePicker">Start Date:</label>
            <input type="Date" class="form-control" v-model="startDate" />
          </b-col>
          <b-col col md="5">
            <label for="closeDatePicker">Close Date:</label>
            <input type="Date" class="form-control" v-model="closeDate" />
          </b-col>
        </b-row>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- GENERAL INFORMATION -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <div class="mt-4">
          <h2>General Information</h2>
          <!-- General Info : First row -->
          <b-row class="justify-content-center my-2">
            <b-col col md="4">
              <div class="form-floating">
              <b-form-input id="general.firstName" v-model="generalInformation.firstName" placeholder="First Name:" trim></b-form-input>
              <label for="general.firstName">First Name:</label>
              </div>
            </b-col>
            <b-col col md="4">
              <div class="form-floating">
              
              <b-form-input id="general.lastName" v-model="generalInformation.lastName" placeholder="Last Name:" trim></b-form-input>
              <label for="general.lastName">Last Name:</label>
              </div>
            </b-col>
            <b-col col md="4">
              <div class="form-floating">
              
              <b-form-input id="general.middleName" v-model="generalInformation.middleName" placeholder="Middle Name:" trim></b-form-input>
              <label for="general.middleName">Middle Name:</label>
              </div>
            </b-col>
          </b-row>
          <!-- General Info : Second row -->
          <b-row class="justify-content-center my-2">
            <b-col col md="6">
              <label for="general.birthDate">Birth Date:</label>
              <input id="general.birthDate" type="Date" class="form-control" v-model="generalInformation.birthdate" />
            </b-col>
            <b-col col md="6">
              <div class="form-floating">
           
              <b-form-input id="general.ssn" v-model="generalInformation.ssn" placeholder="SSN" trim></b-form-input>
              <label for="general.ssn">SSN:</label>
              </div>
            </b-col>
          </b-row>
          <!-- General Info : Third row -->
          <b-row class="justify-content-center my-2">
            <b-col col md="6">
              <div class="form-floating">
             
              <b-form-input id="general.identificationNumber" v-model="generalInformation.identificationNumber" placeholder="ID or TX DL" trim></b-form-input>
              <label for="general.identificationNumber">ID/TX Drivers License:</label>
              </div>
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
          <h2>Residence Information</h2>
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
          <h2>Contact Information</h2>
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
                <b-form-select-option value="african\american">African American</b-form-select-option>
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
                <b-form-radio v-model="contactInformation.maritalStatus" name="contact.maritalStatusRadio" value="married">Married</b-form-radio>
                <b-form-radio v-model="contactInformation.maritalStatus" name="contact.maritalStatusRadio" value="separated">Separated</b-form-radio>
                <b-form-radio v-model="contactInformation.maritalStatus" name="contact.maritalStatusRadio" value="divorced">Divorced</b-form-radio>
                <b-form-radio v-model="contactInformation.maritalStatus" name="contact.maritalStatusRadio" value="widow">Widow</b-form-radio>
                <b-form-radio v-model="contactInformation.maritalStatus" name="contact.maritalStatusRadio" value="common law">Common Law</b-form-radio>
              </b-form-group>
            </b-col>
          </b-row>
        </div>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- EMPLOYMENT INFORMATION -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <div class="mt-4">
          <h2>Employment Information</h2>
          <!-- Employment Info : First row -->
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
          <!-- Employment Info : Second row -->
          <b-row v-if="selected.employment === 'employed'">
            <b-col col md="4">
              <label for="employment.length">Employment Length:</label>
              <b-form-input id="employment.length" v-model="employmentInformation.employmentLength" placeholder="Employment Length" trim></b-form-input>
            </b-col>
            <b-col col md="4">
              <label for="employment.employer">Employer:</label>
              <b-form-input id="employment.employer" v-model="employmentInformation.employer" placeholder="Employer" trim></b-form-input>
            </b-col>
            <b-col col md="4">
              <label for="employment.occupation">Occupation:</label>
              <b-form-input id="employment.occupation" v-model="employmentInformation.occupation" placeholder="Occupation" trim></b-form-input>
            </b-col>
          </b-row>
          <b-row v-if="selected.employment === 'unemployed'">
            <b-col col md="4">
              <label for="employment.unemployedLength">Unemployed Length:</label>
              <b-form-input id="employment.unemployedLength" v-model="employmentInformation.unemployedLength" placeholder="Unemployed Length" trim></b-form-input>
            </b-col>
          </b-row>
          <b-row v-if="selected.employment === 'retired'">
            <b-col col md="4">
              <label for="employment.retirement">Retirement Length:</label>
              <b-form-input id="employment.retirement" v-model="employmentInformation.retirementLength" placeholder="Retired Length" trim></b-form-input>
            </b-col>
          </b-row>
        </div>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- EDUCATION INFORMATION -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <div class="mt-4">
          <h2>Education Information</h2>
          <!-- Education Info : First row -->
          <b-row>
            <b-col col md="4">
              <label for="education.attendedSchool">Did you attend school?:</label>
              <b-form-group id="education.attendedSchool">
                <b-form-radio v-model="educationInformation.attendedSchool" value="true">Yes</b-form-radio>
                <b-form-radio v-model="educationInformation.attendedSchool" value="false">No</b-form-radio>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Education Info : Second row -->
          <b-row v-if="educationInformation.attendedSchool === 'true'">
            <b-col col md="6">
              <label for="education.school">School:</label>
              <b-form-input id="education.school" v-model="educationInformation.school" placeholder="School" trim></b-form-input>
            </b-col>
            <b-col col md="6">
              <label for="education.lastGrade">Last Grade:</label>
              <b-form-input id="education.lastGrade" v-model="educationInformation.lastGrade" placeholder="Last Grade" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Education Info : Third row -->
          <b-row v-if="educationInformation.attendedSchool === 'true'" class="my-2">
            <b-col col md="4">
              <b-form-checkbox v-model="educationInformation.graduated" value="true">Graduated?</b-form-checkbox>
            </b-col>
            <b-col v-if="educationInformation.graduated === 'true'" col md="8">
              <b-form-checkbox v-model="selected.schoolsAttended" value="elementary">Elementary (0-8)</b-form-checkbox>
              <b-form-checkbox v-model="selected.schoolsAttended" value="highschoolOrGED">High School/GED</b-form-checkbox>
              <b-form-checkbox v-model="selected.schoolsAttended" value="college">Attend College</b-form-checkbox>
              <b-form-checkbox v-model="selected.schoolsAttended" value="technicalSchool">Technical School</b-form-checkbox>
              <b-form-checkbox v-model="selected.schoolsAttended" value="associateDegree">Associate Degree</b-form-checkbox>
              <b-form-checkbox v-model="selected.schoolsAttended" value="bachelorDegree">Bachelor Degree</b-form-checkbox>
              <b-form-checkbox v-model="selected.schoolsAttended" value="mastersDegree">Masters Degree</b-form-checkbox>
              <b-form-checkbox v-model="selected.schoolsAttended" value="phd">PHD</b-form-checkbox>
            </b-col>
          </b-row>
          <!-- Education Info : Fourth row -->
          <b-row>
            <b-col col md="10">
              <label for="education.certification">Certification:</label>
              <b-form-input id="education.certification" v-model="educationInformation.certification" placeholder="Certification" trim></b-form-input>
            </b-col>
          </b-row>
        </div>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- INCOME INFORMATION -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <div class="mt-4">
          <h2>Income Information</h2>
          <!-- Income Info : First row -->
          <b-row class="justify-content-left my-2">
            <b-col col md="2">
              <label for="income.monthly">Monthly Income:</label>
              <b-form-input id="income.monthly" v-model="incomeInformation.monthlyIncome" placeholder="Monthly Income" trim></b-form-input>
            </b-col>
            <b-col col md="2">
              <label for="income.other">Other Income:</label>
              <b-form-input id="income.other" v-model="incomeInformation.otherIncome" placeholder="Other Income" trim></b-form-input>
            </b-col>
            <b-col col md="2">
              <label for="income.spousal">Spousal Support:</label>
              <b-form-input id="income.spousal" v-model="incomeInformation.spousalSupport" placeholder="Spousal Support" trim></b-form-input>
            </b-col>
            <b-col col md="2">
              <label for="income.workerComp">Worker Comp:</label>
              <b-form-input id="income.workerComp" v-model="incomeInformation.workerComp" placeholder="Worker Comp" trim></b-form-input>
            </b-col>
            <b-col col md="2">
              <label for="income.childSupport">Child Support:</label>
              <b-form-input id="income.childSupport" v-model="incomeInformation.childSupport" placeholder="Child Support" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Income Info : Second row -->
          <b-row class="justify-content-left my-2">
            <b-col col md="2">
              <label for="income.tanf">TANF:</label>
              <b-form-input id="income.tanf" v-model="incomeInformation.tanf" placeholder="TANF" trim></b-form-input>
            </b-col>
            <b-col col md="2">
              <label for="income.ssi">SSI:</label>
              <b-form-input id="income.ssi" v-model="incomeInformation.ssi" placeholder="SSI" trim></b-form-input>
            </b-col>
            <b-col col md="2">
              <label for="income.unemployment">Unemployment:</label>
              <b-form-input id="income.unemployment" v-model="incomeInformation.unemployment" placeholder="Unemployment Income" trim></b-form-input>
            </b-col>
            <b-col col md="2">
              <label for="income.socialSecurity">Social Security:</label>
              <b-form-input id="income.socialSecurity" v-model="incomeInformation.socialSecurity" placeholder="Social Security" trim></b-form-input>
            </b-col>
          </b-row>
          <b-row class="justify-content-left my-2">
            <b-col col md="3">
              <b-form-checkbox v-model="incomeInformation.headHousehold" value="true">Are you head of household?</b-form-checkbox>
            </b-col>
            <b-col col md="3">
              <label for="income.needs">Do you need:</label>
              <b-form-group id="income.needs">
                <b-form-checkbox v-model="incomeInformation.doYouNeed" value="clothing">Clothing</b-form-checkbox>
                <b-form-checkbox v-model="incomeInformation.doYouNeed" value="personal care items">Personal care items</b-form-checkbox>
                <b-form-checkbox v-model="incomeInformation.doYouNeed" value="transportation assistance">Transportation Assistance</b-form-checkbox>
              </b-form-group>
            </b-col>
          </b-row>
        </div>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- HEALTH INSURANCE INFORMATION -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <div class="mt-4">
          <h2>Health Insurance Information</h2>
          <!-- Health Info : First row -->
          <b-row class="justify-content-left my-2">
            <b-col col md="4">
              <b-form-checkbox v-model="insuranceInformation.healthInsurance" value="true">Do you have health insurance?</b-form-checkbox>
            </b-col>
            <b-col v-if="insuranceInformation.healthInsurance" col md="8" class="mt-2">
              <label for="insurance.provider">Select Insurance Provider:</label>
              <b-form-group id="insurance.provider">
                <b-form-radio v-model="insuranceInformation.insuranceProvider" value="private">Private</b-form-radio>
                <b-form-radio v-model="insuranceInformation.insuranceProvider" value="medicaid">Medicaid</b-form-radio>
                <b-form-radio v-model="insuranceInformation.insuranceProvider" value="medicare">Medicare</b-form-radio>
                <b-form-radio v-model="insuranceInformation.insuranceProvider" value="chip">CHIP</b-form-radio>
                <b-form-radio v-model="insuranceInformation.insuranceProvider" value="goldcard">GoldCard</b-form-radio>
                <b-form-radio v-model="insuranceInformation.insuranceProvider" value="wic">WIC</b-form-radio>
                <b-form-radio v-model="insuranceInformation.insuranceProvider" value="other">Other</b-form-radio>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Health Info : Second row -->
          <b-row class="justify-content-left my-2">
            <b-col col md="4">
              <label for="insurance.foodstamps">Do you receive food stamps?:</label>
              <b-form-group id="insurance.foodstamps">
                <b-form-radio v-model="insuranceInformation.foodStamps" value="true">Yes</b-form-radio>
                <b-form-radio v-model="insuranceInformation.foodStamps" value="false">No</b-form-radio>
              </b-form-group>
            </b-col>
            <b-col v-if="insuranceInformation.foodStamps === 'true'" col md="8">
              <label for="insurance.howMuch">How Much?:</label>
              <b-form-input id="income.howMuch" v-model="incomeInformation.howMuch" placeholder="How much" trim></b-form-input>
            </b-col>
            <b-col v-if="insuranceInformation.foodStamps === 'false'" col md="8">
              <label for="insurance.whyNot">Why Not?:</label>
              <b-form-group id="insurance.whyNot">
                <b-form-radio v-model="insuranceInformation.whyNot" value="do not qualify">Do not qualify</b-form-radio>
                <b-form-radio v-model="insuranceInformation.whyNot" value="have not applied">Have not applied</b-form-radio>
                <b-form-radio v-model="insuranceInformation.whyNot" value="application in process">Application in process</b-form-radio>
                <b-form-radio v-model="insuranceInformation.whyNot" value="need help applying">Need help applying</b-form-radio>
              </b-form-group>
            </b-col>
          </b-row>
        </div>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- SUBSTANCE USE -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <div class="mt-4">
          <h2>Substance Use</h2>
          <!-- Substance Info : First row -->
          <b-row class="justify-content-left my-2">
            <b-col col md="4">
              <label for="substance.use">Do you use drugs or alcohol?:</label>
              <b-form-group id="substance.use">
                <b-form-radio v-model="substanceInformation.use" value="true">Yes</b-form-radio>
                <b-form-radio v-model="substanceInformation.use" value="false">No</b-form-radio>
              </b-form-group>
            </b-col>
            <b-col v-if="substanceInformation.use === 'true'" col md="8">
              <label for="substance.whatHowMuch">How Much?:</label>
              <b-form-input id="substance.whatHowMuch" v-model="substanceInformation.whatHowMuch" placeholder="What? How Much?" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Substance Info : Second row -->
          <b-row class="justify-content-left my-2">
            <b-col col md="4">
              <label for="substance.treatment">Do You Want Treatment?:</label>
              <b-form-group id="substance.treatment">
                <b-form-radio v-model="substanceInformation.treatment" value="true">Yes</b-form-radio>
                <b-form-radio v-model="substanceInformation.treatment" value="false">No</b-form-radio>
              </b-form-group>
            </b-col>
            <b-col v-if="substanceInformation.treatment === 'true'" col md="8">
              <label for="substance.notes">Notes:</label>
              <b-form-input id="substance.notes" v-model="substanceInformation.notes" placeholder="Notes" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Substance Info : Third row -->
          <b-row class="justify-content-left my-2">
            <b-col col md="12">
              <label for="substance.treatment">Treatment History:</label>
              <b-form-textarea id="substance.treatment"></b-form-textarea>
            </b-col>
          </b-row>
        </div>

        <!-- ------------------------------------------------------------------------------------------------------------------ -->
        <!-- LEGAL INFORMATION -->
        <!-- ------------------------------------------------------------------------------------------------------------------ -->

        <div class="mt-4">
          <h2>Legal Information</h2>
          <!-- Legal Info : First row -->
          <b-row class="justify-content-left">
            <b-col col md="3">
              <label for="legal.legalCaseNumber">Legal Case #:</label>
              <b-form-input id="legal.legalCaseNumber" v-model="legalInformation.legalCaseNumber" placeholder="Legal Case #" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="legal.fileDate">File Date:</label>
              <input type="Date" class="form-control" v-model="legalInformation.fileDate" />
            </b-col>
            <b-col col md="3">
              <label for="legal.priorAttorneyName">Prior Attorney Name:</label>
              <b-form-input id="legal.priorAttorneyName" v-model="legalInformation.priorAttorneyName" placeholder="Prior Attorney Name" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="legal.attorneyCaseload">Prior Attorney Caseload:</label>
              <b-form-input id="legal.attorneyCaseload" v-model="legalInformation.priorAttorneyCaseload" placeholder="Prior Attorney Caseload" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Legal Info : Second row -->
          <b-row class="justify-content-left my-2">
            <b-col col md="3">
              <label for="legal.mental">Mental Competency?:</label>
              <b-form-group id="legal.mental">
                <b-form-radio v-model="legalInformation.mentalCompetency" value="true">Yes</b-form-radio>
                <b-form-radio v-model="legalInformation.mentalCompetency" value="false">No</b-form-radio>
              </b-form-group>
            </b-col>
          </b-row>
          <!-- Legal Info : Third row -->
          <b-row class="justify-content-left">
            <b-col col md="3">
              <label for="legal.court">Current Court:</label>
              <b-form-input id="legal.court" v-model="legalInformation.currentCourt" placeholder="Current Court" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="legal.courtAddress">Court Address:</label>
              <b-form-input id="legal.courtAddress" v-model="legalInformation.courtAddress" placeholder="Court Address" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="legal.judgeName">Judge Name:</label>
              <b-form-input id="legal.judgeName" v-model="legalInformation.judgeName" placeholder="Judge Name" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="legal.courtType">Court Type:</label>
              <b-form-input id="legal.courtType" v-model="legalInformation.courtType" placeholder="Court Type" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Legal Info : Fourth row -->
          <b-row class="justify-content-left my-2">
            <b-col col md="4">
              <label for="legal.caseCompletionDate">Case Completion Date:</label>
              <input id="legal.caseCompletionDate" type="Date" class="form-control" v-model="legalInformation.caseCompletionDate" />
            </b-col>
            <b-col col md="4">
              <label for="legal.defendantStatus">Defendant Status:</label>
              <b-form-input id="legal.defendantStatus" v-model="legalInformation.defendantStatus" placeholder="Defendant Status" trim></b-form-input>
            </b-col>
            <b-col col md="4">
              <label for="legal.settlingDate">Next\Last Settling Date:</label>
              <input id="legal.settlingDate" type="Date" class="form-control" v-model="legalInformation.settlingDate" />
            </b-col>
          </b-row>
          <!-- CHARGES -->
          <!-- Legal Info : Fifth row -->
          <b-row class="justify-content-left">
            <h4 class="my-2">Charges</h4>
            <b-col col md="3">
              <label for="charge.0.charge">Charge:</label>
              <b-form-input id="charge.0.charge" v-model="legalInformation.charges[0].charge" placeholder="Charge" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.0.degree">Degree:</label>
              <b-form-input id="charge.0.degree" v-model="legalInformation.charges[0].degree" placeholder="Degree" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.0.punishmentRange">Punishment Range:</label>
              <b-form-input id="charge.0.punishmentRange" v-model="legalInformation.charges[0].punishmentRange" placeholder="Punishment Range" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.0.disposition">Disposition:</label>
              <b-form-input id="charge.0.disposition" v-model="legalInformation.charges[0].charge" placeholder="Disposition" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Legal Info : Sixth row -->
          <b-row class="justify-content-left">
            <b-col col md="3">
              <label for="charge.1.charge">Charge:</label>
              <b-form-input id="charge.1.charge" v-model="legalInformation.charges[1].charge" placeholder="Charge" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.1.degree">Degree:</label>
              <b-form-input id="charge.1.degree" v-model="legalInformation.charges[1].degree" placeholder="Degree" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.1.punishmentRange">Punishment Range:</label>
              <b-form-input id="charge.1.punishmentRange" v-model="legalInformation.charges[1].punishmentRange" placeholder="Punishment Range" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.1.disposition">Disposition:</label>
              <b-form-input id="charge.1.disposition" v-model="legalInformation.charges[1].charge" placeholder="Disposition" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Legal Info : Seventh row -->
          <b-row class="justify-content-left">
            <b-col col md="3">
              <label for="charge.2.charge">Charge:</label>
              <b-form-input id="charge.2.charge" v-model="legalInformation.charges[2].charge" placeholder="Charge" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.2.degree">Degree:</label>
              <b-form-input id="charge.2.degree" v-model="legalInformation.charges[2].degree" placeholder="Degree" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.2.punishmentRange">Punishment Range:</label>
              <b-form-input id="charge.2.punishmentRange" v-model="legalInformation.charges[2].punishmentRange" placeholder="Punishment Range" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.2.disposition">Disposition:</label>
              <b-form-input id="charge.2.disposition" v-model="legalInformation.charges[2].charge" placeholder="Disposition" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Legal Info : Eight row -->
          <b-row class="justify-content-left">
            <b-col col md="3">
              <label for="charge.3.charge">Charge:</label>
              <b-form-input id="charge.3.charge" v-model="legalInformation.charges[3].charge" placeholder="Charge" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.3.degree">Degree:</label>
              <b-form-input id="charge.3.degree" v-model="legalInformation.charges[3].degree" placeholder="Degree" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.3.punishmentRange">Punishment Range:</label>
              <b-form-input id="charge.3.punishmentRange" v-model="legalInformation.charges[3].punishmentRange" placeholder="Punishment Range" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.3.disposition">Disposition:</label>
              <b-form-input id="charge.3.disposition" v-model="legalInformation.charges[3].charge" placeholder="Disposition" trim></b-form-input>
            </b-col>
          </b-row>
          <!-- Legal Info : Ninth row -->
          <b-row class="justify-content-left">
            <b-col col md="3">
              <label for="charge.4.charge">Charge:</label>
              <b-form-input id="charge.4.charge" v-model="legalInformation.charges[4].charge" placeholder="Charge" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.4.degree">Degree:</label>
              <b-form-input id="charge.4.degree" v-model="legalInformation.charges[4].degree" placeholder="Degree" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.4.punishmentRange">Punishment Range:</label>
              <b-form-input id="charge.4.punishmentRange" v-model="legalInformation.charges[4].punishmentRange" placeholder="Punishment Range" trim></b-form-input>
            </b-col>
            <b-col col md="3">
              <label for="charge.4.disposition">Disposition:</label>
              <b-form-input id="charge.4.disposition" v-model="legalInformation.charges[4].charge" placeholder="Disposition" trim></b-form-input>
            </b-col>
          </b-row>
        </div>

        <!-- END OF FORM -->
      </b-container>
    </div>
    <div class="mt-5 submit-btn-container">
      <b-button @click="submitForm" size="lg">Submit</b-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    submitForm() {
      const dataToEmit = {
        caseNumber: this.caseNumber,
        clientNumber: this.clientNumber,
        startDate: this.startDate,
        closeDate: this.closeDate,
        generalInformation: {
          ...this.generalInformation,
        },
        residenceInformation: {
          ...this.residenceInformation,
        },
        contactInformation: {
          ...this.contactInformation,
          // ethnicity:  // We need too check if "other" was selected
                         // If it was, we need to get the value from it
        },
        employmentInformation: {
          ...this.employmentInformation,
        },
        educationInformation: {
          ...this.educationInformation,
        },
        incomeInformation: {
          ...this.incomeInformation,
          doYouNeed: this.incomeInformation.doYouNeed.join(", "),
        },
        insuranceInformation: {
          ...this.insuranceInformation,
        },
        substanceInformation: {
          ...this.substanceInformation,
        },
        legalInformation: {
          ...this.legalInformation,
        },
      };
      this.$emit("onSubmit", dataToEmit);
    },
  },
  emits: {
    onSubmit: (payload) => {
      console.log({ payload });
      // Validate fields before emitting
      return true;
    },
  },
  data() {
    return {
      // this is for our form state, and should not be submitted to backend
      selected: {
        language: "",
        ethnicity: "",
        employment: "",
        attendedSchool: "",
        graduated: "",
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
        ethnicity: "",
      },
      employmentInformation: {
        employmentLength: "",
        employer: "",
        occupation: "",
        unemploymentLength: "",
        retirementLength: "",
        housewife: false,
      },
      educationInformation: {
        attendedSchool: false, // default to false since we only use a checkbox
        school: "",
        lastGrade: "",
        graduated: "",
        certification: "",
      },
      incomeInformation: {
        headHousehold: false, // default to false since we only use a checkbox
        monthlyIncome: "",
        otherIncome: "",
        spousalSupport: "",
        workerComp: "",
        childSupport: "",
        tanf: "",
        ssi: "",
        unemployment: "",
        socialSecurity: "",
        doYouNeed: [],
      },
      insuranceInformation: {
        healthInsurance: false, // default to false since we only use a checkbox
        insuranceProvider: "",
        foodStamps: false,
        howMuch: "",
        whyNot: "",
      },
      substanceInformation: {
        use: false,
        whatHowMuch: "",
        treatment: "",
        notes: "",
        treatmentHistory: "",
      },
      legalInformation: {
        legalCaseNumber: "",
        mentalCompetency: "",
        fileDate: "",
        priorAttorneyName: "",
        priorAttorneyCaseload: "",
        currentCourt: "",
        courtAddress: "",
        judgeName: "",
        courtType: "",
        caseCompletionDate: "",
        defendantStatus: "",
        bondAmount: "",
        settlingDate: "",
        charges: [
          {
            charge: "",
            degree: "",
            punishmentRange: "",
            disposition: "",
          },
          {
            charge: "",
            degree: "",
            punishmentRange: "",
            disposition: "",
          },
          {
            charge: "",
            degree: "",
            punishmentRange: "",
            disposition: "",
          },
          {
            charge: "",
            degree: "",
            punishmentRange: "",
            disposition: "",
          },
          {
            charge: "",
            degree: "",
            punishmentRange: "",
            disposition: "",
          },
        ],
      },
    };
  },
};
</script>

<style>
.form-container {
  height: 60vh;
  overflow: auto;
}
</style>

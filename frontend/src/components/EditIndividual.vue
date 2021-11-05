<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Individual</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>1.   For which distribution are you signing up?</label>
                    <div id="v-model-select">
                      <select class="form-control" v-model="individual.eventType">
                        <option disabled value="">Please select one</option>
                        <option v-for="event in EventSelection" :key="event._id" > {{event.eventType}}</option>
                      </select>
                    </div>  
                </div>
                <div class="form-group">
                    <label>2.   First Name</label>
                    <input type="text" class="form-control" v-model="individual.firstName" required/>
                </div>

                <div class="form-group">
                    <label>3.   Last Name</label>
                    <input type="text" class="form-control" v-model="individual.lastName" required/>
                </div>

                <div class="form-group">
                    <label>4.   Phone Number</label>
                    <input type="phoneNumber" class="form-control" v-model="individual.phoneNumber" required/>
                </div>
                    <b-form-text id="password-help-block">
                        Your phone number must be 10 digits long. Do not include dashes "-".
                    </b-form-text>
                <div class="form-group">
                    <label>5.   Residence Address</label>
                    <input type="text" class="form-control" v-model="individual.street" required/>
                </div>
                <div class="form-group">
                    <label>6.   City</label>
                    <input type="text" class="form-control" v-model="individual.city" required/>
                </div>
                <div class="form-group">
                    <label>7.   State</label>
                    <input type="text" class="form-control" v-model="individual.state" required/>
                </div>

                <div class="form-group">
                    <label>8.   ZipCode</label>
                    <input type="number" class="form-control" v-model="individual.zipCode" required/>
                </div>

                <div class="form-group">
                    <label>9.  How did you hear about our distribution?</label>
                    <div class="form-check form-switch"  id="v-model-select">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="individual.mediaChannel" value = "Facebook"/> Facebook
                    </div>
                    <div class="form-check form-switch" id="v-model-select">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="individual.mediaChannel" value = "Instagram"/>Instagram
                    </div>
                    <div class="form-check form-switch" id="v-model-select">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="individual.mediaChannel" value = "Twitter"/>Twitter
                    </div>
                    <div class="form-check form-switch" id="v-model-select">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="individual.mediaChannel" value ="Word of Mouth"/>Word of Mouth
                    </div>
                    <div class="form-check form-switch" id="v-model-select">
                      <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" v-model="individual.mediaChannel" value = "KMAZ 102.5fm"/>KMAZ 102.5fm
                    </div>
                    <div class="form-group" >
                      <p>Other<input type="text" class="form-control" v-model="individual.mediaChannel" required/></p>
                    </div>
                </div>

                <div class="form-group">
                    <label>10.  Have you received the COVID vaccine? *</label>
                    <div id="v-model-select">
                      <select class="form-control" v-model="individual.vaccine">
                        <option disabled value="">Please select one</option>
                         <option value = "yes">Yes</option>
                         <option value = "no">No</option>
                      </select>
                    </div>
                </div>
                 <div class="form-group">
                    <label>11.  Would you like the COVID vaccine on during the distribution? *</label>
                    <div id="v-model-select">
                      <select class="form-control" v-model="individual.vaccineBackground">
                        <option disabled value="">Please select one</option>
                         <option value = "yes">Yes</option>
                         <option value = "no">No</option>
                      </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>12.  Which COVID vaccine would you prefer to receive? *</label>
                    <div id="v-model-select">
                      <select class="form-control" v-model="individual.vaccineType">
                        <option disabled value="">Please select one</option>
                         <option>Moderna</option>
                         <option>Pfizer</option>
                      </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>13.  Are you in need of additional supportive services (e.g., utility assistance, rental assistance,housing, nutritional support, etc.)? *</label>
                    <div id="v-model-select">
                      <select class="form-control" v-model="individual.additionalServices">
                        <option disabled value="">Please select one</option>
                         <option value = "yes">Yes</option>
                         <option value = "no">No</option>
                      </select>
                    </div>
                </div>

                <div class="form-group">
                    <label>14.  Number of Children In Household *</label>
                    <input type="number" class="form-control" v-model="individual.numberChildren" required/>
                </div>

                <div class="form-group">
                    <label>15.  Are you or anyone in your household 65+ in age? *</label>
                     <div id="v-model-select">
                      <select class="form-control" v-model="individual.overSixtyfive">
                        <option disabled value="">Please select one</option>
                         <option value = "yes">Yes</option>
                         <option value = "no">No</option>
                      </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>16.  Are you a veteran? *</label>
                    <div id="v-model-select">
                      <select class="form-control" v-model="individual.veteran">
                        <option disabled value="">Please select one</option>
                         <option value = "yes">Yes</option>
                         <option value = "no">No</option>
                      </select>
                    </div>
                </div>
                <div class="form-group">
                    <label>17.  Which of the following best describes you? *</label>
                    <div id="v-model-select">
                      <select class="form-control" v-model="individual.ethnicity">
                        <option disabled value="">Please select one</option>
                        <option>Asian or Pacific Islander</option>
                        <option>Black or African American</option>
                        <option>Hispanic or Latino</option>
                        <option>Native American or Alaskan Native</option>
                        <option>White or Caucasian</option>
                        <option>Multiracial or Biracial</option>
                        <option>A race/ethnicity not listed here</option>
                      </select>
                    </div> 
                </div>
                <button class="btn btn-success mt-3">Update</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                individual: { },
                event : {},
                EventSelection: [],
            }
        },
        created() {
        let apiURL = `http://localhost:3000/edit-individual/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.individual = res.data;
        });
        let apiURL1 = `http://localhost:3000/events`;
            axios.get(apiURL1).then((res) => {
            this.EventSelection = res.data;
                });
    },
        methods: {
            handleUpdateForm() {
            let apiURL = `http://localhost:3000/update-individual/${this.$route.params.id}`;
                axios.put(apiURL, this.individual).then((res) => {
                    console.log(res)
                  this.$router.push('/viewindividual')
                }).catch(error => {
                    console.log(error)
                });
            }
        }   
    }
</script>
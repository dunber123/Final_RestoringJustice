<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Add Event</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>1.   Event Type</label>
                    <input type="text" class="form-control" v-model="event.eventType" required>
                </div><br>

                <div class="form-group">
                    <label>2.   Event Date</label>
                    <input type="Date" class="form-control" v-model="event.eventDate" required>
                </div><br>

                <div class="form-group">
                    <label>3.   Event Center</label>
                    <input type="text" class="form-control" v-model="event.eventCenter" required>
                </div><br>

                <div class="form-group">
                    <label>4.   Event Location</label>
                    <input type="text" class="form-control" v-model="event.location" required>
                </div>
                <button class="btn btn-success mt-3">Create</button>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        data() {
            return {
                event: {
                   eventType: '',
                   eventDate: '',
                   eventCenter: '',
                   location: ''
                }
            }
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3000/event';
                axios.post(apiURL, this.event).then(() => {
                    //changing the view to the list
                  this.$router.push('/viewevent')
                  this.event = {
                    eventType: '',
                    eventDate: '',
                    eventCenter: '',
                    location: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
           
    }
</script>

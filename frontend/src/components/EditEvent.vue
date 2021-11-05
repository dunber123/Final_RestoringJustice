<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Event</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Event Type</label>
                    <input type="text" class="form-control" v-model="event.eventType" required>
                </div>
                <div class="form-group">
                    <label>Event Date</label>
                    <input type="Date" class="form-control" v-model="event.eventDate" required>
                </div>

                <div class="form-group">
                    <label>Event Center</label>
                    <input type="text" class="form-control" v-model="event.eventCenter" required>
                </div>

                <div class="form-group">
                    <label>Event Location</label>
                    <input type="text" class="form-control" v-model="event.location" required>
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
                event: { }
            }
        },
        created() {
        let apiURL = `http://localhost:3000/edit-event/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.event = res.data;
        })
    },
        methods: {
            handleUpdateForm() {
            let apiURL = `http://localhost:3000/update-event/${this.$route.params.id}`;
                axios.put(apiURL, this.event).then((res) => {
                    console.log(res)
                  this.$router.push('/viewevent')
                }).catch(error => {
                    console.log(error)
                });
            }
        }   
    }
</script>
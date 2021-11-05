<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                 <thead class="thead-dark">
                    <tr>
                        <th>Event Type</th>
                        <th>Event Date</th>
                        <th>Event Center</th>
                        <th>Event Location</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="event in Events" :key="event._id">
                        <td>{{ event.eventType }}</td>
                        <td>{{ event.eventDate }}</td>
                        <td>{{ event.eventCenter }}</td>
                        <td>{{ event.location }}</td>
                        <td>
                            <router-link :to="{name: 'viewevent', params: { id: event._id }}" class="btn btn-success">Edit</router-link>
                            <router-link :to="{name: 'atthisevent', params: { eventType: event.eventType, eventDate: event.eventDate }}" class="btn btn-success">Individuals Attended</router-link>
                            <button @click.prevent="deleteEvent(event._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
           
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Querys: [],
                Events: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3000/viewbyevent';
            axios.get(apiURL).then(res => {
                this.Querys = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL1 = 'http://localhost:3000/events';
            axios.get(apiURL1).then(res => {
                this.Events = res.data;
            }).catch(error => {
                console.log(error)
            });
        }
    }
</script>



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>

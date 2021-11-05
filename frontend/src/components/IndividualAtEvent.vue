<template>
    <div class="row">
        <div class="col-md-12">
             <h3 class="text-center">Add Eveent</h3>
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Zip Code</th>
                        <th>Phone</th>
                        <th>Event Type</th>
                        <th>Event Date</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="summaryevents in Querys" :key="summaryevents.id">
                        <td>{{ summaryevents.firstName }}</td>
                        <td>{{ summaryevents.lastName }}</td>
                        <td>{{ summaryevents.zipCode }}</td>
                        <td>{{ summaryevents.phoneNumber }}</td>
                        <td>{{ summaryevents.eventType }}</td>
                        <td>{{ summaryevents.events.eventDate }}</td>
                        <td>{{ summaryevents.COUNT }}</td>
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
                Etype: []
            }
        },
        // this is using created hook 
        created() {

            let apiURL = `http://localhost:3000/match/${this.$route.params.eventType}`;
            axios.post(apiURL, this.query).then(res => {
                this.Querys = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL1 = `http://localhost:3000/summarybyevents/${this.$route.params.eventType}`;
            axios.get(apiURL1, this.query).then(res => {
                this.Querys = res.data;
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

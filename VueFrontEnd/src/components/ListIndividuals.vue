<template>
    <div class="row justify-content-center">
        <div class="col-md-14">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                        <th>Media Channel</th>
                        <th>Vaccination Status</th>
                        <th>Vaccine Type</th>
                        <th>Want Vaccine</th>
                        <th>Additional Services Requested</th>
                        <th>Children In Houshold</th>
                        <th>Seniors Over 65</th>
                        <th>Veteran Status</th>
                        <th>Ethnicity</th>
                        <th>Event Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="individual in Individuals" :key="individual._id">
                        <td>{{ individual.firstName }}</td>
                        <td>{{ individual.lastName }}</td>
                        <td>{{ individual.phoneNumber}}</td>
                        <td>{{ individual.street }}</td>
                        <td>{{ individual.city }}</td>
                        <td>{{ individual.state }}</td>
                        <td>{{ individual.zipCode }}</td>
                        <td>{{ individual.mediaChannel.join(', ') }}</td>
                        <td>{{ individual.vaccine }}</td>
                        <td>{{ individual.vaccineType }}</td>
                        <td>{{ individual.vaccineBackground }}</td>
                        <td>{{ individual.additionalServices }}</td>
                        <td>{{ individual.numberChildren }}</td>
                        <td>{{ individual.overSixtyfive }}</td>
                        <td>{{ individual.veteran }}</td>
                        <td>{{ individual.ethnicity }}</td>
                        <td>{{ individual.eventType }}</td>
                        <td>
                            <router-link :to="{name: 'edit-individual', params: { id: individual._id }}" class="btn btn-success">Edit</router-link>
                            <button @click.prevent="deleteIndividual(individual._id)" class="btn btn-danger">Delete</button>
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
                Individuals: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3000/individuals';
            axios.get(apiURL).then(res => {
                this.Individuals = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteIndividual(id){
                console.log(id)
                let apiURL = `http://localhost:3000/delete-individual/${id}`;
                let indexOfArrayItem = this.Individuals.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Individuals.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>

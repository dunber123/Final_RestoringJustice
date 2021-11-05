<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                 <thead class="thead-dark">
                    <tr>
                        <th>Case Manager</th>
                        <th>Case Number</th>
                        <th>Start Date</th>
                        <th>Last Name</th>
                  
                    </tr>
                </thead>
                <tbody>
                  
                    <tr v-for="client in Clients" :key="client._id">
                        <td>{{ client.caseManager}}</td>
                        <td>{{ client.caseNumber }}</td>
                        <td>{{ client.startDate }}</td>
                        <td>{{ client.generalInformation.lastName }}</td>
                    
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
                Clients: []
            }
        },
        // this is using created hook S
        created() {
           

            let apiURL1 = `${this.$hostname}/client`; // 'http://localhost:3000/client';
            axios.get(apiURL1).then(res => {
                this.Clients = res.data;
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

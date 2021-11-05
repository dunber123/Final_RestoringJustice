<template>
  <div>
    <button @click="fetchAllClients()">Click me</button>
    <pre v-if="!loading && apiData && apiData.length">
      {{ JSON.stringify(apiData, null, 2) }}
    </pre>
    <p v-if="loading">loading..</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GetAllClients",
  props: {},
  setup() {
    const apiData = ref(null);
    const loading = ref(false);
    const error = ref(null);

    function fetchAllClients() {
      loading.value = true;
      error.value = null;
      apiData.value = null;
      fetch("http://localhost:4000/client")
        .then((resp) => resp.json())
        .then((jsonData) => (apiData.value = jsonData))
        .catch((err) => (error.value = err))
        .then(() => (loading.value = false));
    }

    return {
      apiData, loading, error, fetchAllClients
    }
  }
};
</script>

<style>
</style>
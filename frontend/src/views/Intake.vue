<template>
  <div>
    <intake-form @onSubmit="handleOnSubmit"></intake-form>
  </div>
</template>

<script>
import IntakeForm from "../components/IntakeForm.vue";

export default {
  name: "Intake",
  components: {
    IntakeForm,
  },
  methods: {
    handleOnSubmit: (data) => {
      console.log('data from intake view', data);
    }
  }
};
</script>

<style>
  .submit-btn-container {
    text-align: center;
  }
</style>

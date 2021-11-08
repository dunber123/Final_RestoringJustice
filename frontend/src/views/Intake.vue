<template>
  <div>
    <intake-form @onSubmit="handleSubmit"></intake-form>
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
    handleSubmit: (data) => {
      console.log('submitted data', data);
    }
  }
};
</script>

<style>
  .submit-btn-container {
    text-align: center;
  }
</style>

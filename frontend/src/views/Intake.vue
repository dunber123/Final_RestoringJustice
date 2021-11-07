<template>
  <div>
    <div style="text-align: center; margin-bottom: 3rem;">
      <h1>Intake Form</h1>
    </div>
    <intake-form></intake-form>
    <div class="mt-5 submit-btn-container">
      <b-button size="lg">Submit</b-button>
    </div>
  </div>
</template>

<script>
import IntakeForm from "../components/IntakeForm.vue";

export default {
  name: "Intake",
  components: {
    IntakeForm,
  },
};
</script>

<style>
  .submit-btn-container {
    text-align: center;
  }
</style>

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
    async handleSubmit(data) {
      console.log(this.$hostname);
      const res = await fetch(`${this.$hostname}/client/submit-intake`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
    },
  },
};
</script>

<style>
.submit-btn-container {
  text-align: center;
}
</style>

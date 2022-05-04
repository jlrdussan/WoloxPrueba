<template>
  <div>
    <section id="Home"><Home /></section>
    <section id="Benefits"><Benefits /></section>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import Benefits from "../components/Benefits.vue";
export default {
  components: { Home, Benefits },
  setup() {},
};
</script>

<style scope>
section {
  width: 100%;
  height: 100vh !important;
}
</style>

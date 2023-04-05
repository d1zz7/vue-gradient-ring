<template>
  <div id="app">
    <GradientRing
        size="200"
        ring-height="30"
        :value="75"
        :colors="['#B1E1FF', '#AFB4FF', '#9C9EFE', '#A66CFF']"
    />
  </div>
</template>

<script>
import GradientRing from './components/GradientRing.vue'

export default {
  name: 'App',
  components: {
    GradientRing
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: space-between;
}
</style>

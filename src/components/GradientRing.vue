<template>
  <div
      class="gradient-ring flex"
      :style="styleRing"
  >
    <div
        class="ring-content flex"
        :style="styleRingContent"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script src="./GradientRing.js"></script>

<style scoped>
.gradient-ring {
  position: relative;
  border-radius: 50%;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);
}

.ring-content {
  border-radius: 50%;
  background: white;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}
</style>

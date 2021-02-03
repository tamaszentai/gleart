<template>
  <div class="grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(5, 200px);
  justify-content: center;
  align-content: center;
  grid-gap: 20px;
}
</style>
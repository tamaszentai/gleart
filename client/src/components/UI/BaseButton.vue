<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  border-style: solid 3px;
  background-color: rgb(2, 56, 2);
  width: 5rem;
  height: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: white;

}
</style>
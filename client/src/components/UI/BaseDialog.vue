<template>
<div>
  <teleport to="body">
    <div @click="$emit('close')"></div>
    <dialog open>
      <header>
        <slot name="header">
          <h2>{{ title }}</h2>
        </slot>
      </header>
      <section>
        <slot></slot>
      </section>
      <menu>
        <slot name="actions">
        </slot>
      </menu>
    </dialog>
     
  </teleport>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false,
    },
  },
  emits: ['close'],
};
</script>

<style scoped>
div {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  width: 20%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: auto;
  overflow: hidden;
}

header {
  background-color: #3b3d3a;
  color: white;
  width: 100%;
  padding: 1rem;
  text-align: center;
}

header h2 {
  margin: 0;
}

section {
  padding: 1rem;
}

menu {
  padding: 1rem;
  margin: auto;
  text-align: center;
}

/* @media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
} */
</style>
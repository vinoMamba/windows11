<template>
  <div class="desktop-wrapper">
    <main class="desktop-main">desktop</main>
    <nav class="desktop-nav">
      <ul class="nav-menu">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="nav-notice">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Desktop'
});
</script>
<style lang="scss" scoped>
.desktop {
  &-wrapper {
    width: 100vw;
    height: 100vh;
    background: url("/src/assets/wallet.jpg") center;
    display: flex;
    flex-direction: column;
  }

  &-main {
    flex-grow: 1;
  }

  &-nav {
    padding: 4px;
    display: grid;
    grid-template-columns:25% 40% 25%;
    grid-template-rows: 100%;
    justify-content: space-between;
    border-radius: 8px;
    width: 100%;
    height: 5vh;
    background: #d6dff4;
    opacity: .8;

    .nav-menu {
      grid-column-start: 2;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      background: #304455;
    }

    .nav-notice {
      border-radius: 4px;
      width: 100%;
      height: 100%;
      background: blue;
    }
  }
}
</style>
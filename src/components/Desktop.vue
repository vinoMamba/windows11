<template>
  <div class="desktop-wrapper">
    <main class="desktop-main">desktop</main>
    <nav class="desktop-nav">
      <ul>
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
    border-radius: 8px;
    width: 100%;
    height: 5vh;
    background: #d6dff4;
    opacity: .8;
  }
}
</style>
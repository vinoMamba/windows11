<template>
  <div class="desktop-wrapper">
    <main class="desktop-main" @contextmenu="clickUseRight"></main>
    <nav class="desktop-nav">
      <ul class="nav-menu">
        <li>
          <SvgIcon name="microsoft"></SvgIcon>
        </li>
        <li>
          <SvgIcon name="excel"></SvgIcon>
        </li>
        <li>
          <SvgIcon name="outlook"></SvgIcon>
        </li>
        <li>
          <SvgIcon name="powerpoint"></SvgIcon>
        </li>
        <li>
          <SvgIcon name="word"></SvgIcon>
        </li>
        <li>
          <SvgIcon name="Edge"></SvgIcon>
        </li>
      </ul>
      <ul class="nav-notice">
        <li>

        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import SvgIcon from "./SvgIcon.vue";

export default defineComponent({
  name: 'Desktop',
  components: {SvgIcon},
  setup() {
    const clickUseRight = (e: MouseEvent) => {
      e.preventDefault();
      console.log(e);
    };
    return {
      clickUseRight
    };
  }

});
</script>
<style lang="scss" scoped>
.desktop {
  &-wrapper {
    width: 100vw;
    height: 100vh;
    background: url("/src/assets/wallet2.jpg") border-box center no-repeat;
    display: flex;
    flex-direction: column;
  }

  &-main {
    flex-grow: 1;
  }

  &-nav {
    padding: 4px;
    display: grid;
    grid-template-columns:25% auto 25%;
    grid-template-rows: 100%;
    justify-content: space-between;
    border-radius: 8px;
    width: 100%;
    height: 5vh;
    background: #d6dff4;
    opacity: .9;

    .nav-menu {
      grid-column-start: 2;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;

      li {
        width: 36px;
        height: 36px;
        margin: 0 4px;
        padding: 0 4px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      li:hover {
        background: white;
      }

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
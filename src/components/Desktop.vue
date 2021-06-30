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
          <SvgIcon name="up"></SvgIcon>
        </li>
        <li>
          <SvgIcon name="speaker"></SvgIcon>
        </li>
        <li>
          <SvgIcon name="wifi"></SvgIcon>
        </li>
        <li>
          <div class="date-picker">
            <span>17:50</span>
            <span>2021/6/30</span>
          </div>
        </li>
        <li>
          <SvgIcon name="drawer"></SvgIcon>
        </li>
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
    padding: 0 4px;
    display: grid;
    grid-template-columns:20% auto 20%;
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
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-radius: 4px;
      width: 100%;
      height: 100%;

      li {
        height: 100%;
        margin: 0 4px;
        padding: 0 4px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          width: 1em;
          height: 1em;
        }
      }

      li:hover {
        background: white;
      }
    }
  }
}

.date-picker {
  font-size: 14px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
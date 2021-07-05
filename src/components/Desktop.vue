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
          <div class="system-component">
            <ToolTip tip-content="Internet access">
              <SvgIcon name="wifi"/>
            </ToolTip>
            <ToolTip tip-content="扬声器/听筒:56%">
              <SvgIcon name="speaker"/>
            </ToolTip>
            <Battery/>
          </div>
        </li>
        <li>
          <DatePicker/>
        </li>
        <li>
          <SvgIcon name="drawer"></SvgIcon>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import SvgIcon from "./SvgIcon.vue";
import Battery from "./Battery.vue";
import ToolTip from "./ToolTip.vue";
import DatePicker from "./DatePicker.vue";

export default defineComponent({
  name: "Desktop",
  components: {DatePicker, ToolTip, Battery, SvgIcon},
  setup() {
    const clickUseRight = (e: MouseEvent) => {
      e.preventDefault();
    };
    return {
      clickUseRight,
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
    grid-template-columns:20% auto 20%;
    grid-template-rows: 100%;
    justify-content: space-between;
    border-radius: 8px;
    width: 100%;
    height: 5vh;
    background: #d6dff4;
    opacity: .85;

    li {
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

        &::v-deep(svg) {
          width: 1.3em;
          height: 1.3em;
        }
      }

      .system-component {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        &::v-deep(svg) {
          margin: 0 4px;
        }
      }

    }
  }
}


</style>

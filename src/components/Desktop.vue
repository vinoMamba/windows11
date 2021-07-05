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
            <SvgIcon name="wifi"></SvgIcon>
            <SvgIcon name="speaker"></SvgIcon>
            <Battery/>
          </div>
        </li>
        <li>
          <div class="date-picker">
            <span>{{ currentTime }}</span>
            <span>{{ currentDate }}</span>
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
import {defineComponent, onMounted, ref} from "vue";
import SvgIcon from "./SvgIcon.vue";
import dayjs from "dayjs";
import Battery from "./Battery.vue";
import ToolTip from "./ToolTip.vue";

export default defineComponent({
  name: "Desktop",
  components: {ToolTip, Battery, SvgIcon},
  setup() {
    const currentTime = ref(dayjs().format("HH:mm"));
    const currentDate = ref(dayjs().format("YYYY/MM/DD"));
    onMounted(() => {
      setInterval(() => {
        currentTime.value = dayjs().format("HH:mm");
        currentDate.value = dayjs().format("YYYY/MM/DD");
      }, 1000);
    });
    const clickUseRight = (e: MouseEvent) => {
      e.preventDefault();
    };
    return {
      clickUseRight,
      currentTime,
      currentDate
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

        ::v-deep svg {
          width: 1.5em;
          height: 1.5em;
        }
      }

      .system-component {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        svg {
          margin: 0 4px;
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
    }
  }
}


</style>

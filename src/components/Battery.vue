<template>
  <ToolTip :tip-content="tipContent">
    <SvgIcon :name="batteryName"/>
  </ToolTip>
</template>
<script lang="ts">
import {defineComponent, ref, watchEffect} from "vue";
import SvgIcon from "./SvgIcon.vue";
import ToolTip from "./ToolTip.vue";
import {useBattery} from "../hooks/useBattery";

export default defineComponent({
  name: "Battery",
  components: {ToolTip, SvgIcon},
  setup: function () {
    const batteryName = ref("battery");
    const tipContent = ref("100%");
    const {level, charging} = useBattery();
    const changeBatteryName = () => charging.value ? "battery100" : level.value >= .9 ? "battery" : level.value > .5 && level.value < .9 ? "battery50" : "battery25";
    watchEffect(() => {
      tipContent.value = level.value === 1 ? `电量充满(100%)` : `${Math.floor(level.value * 100)}%剩余${charging ? "(电源已接通)" : ""}`;
      batteryName.value = changeBatteryName();
    });
    return {
      tipContent,
      charging,
      level,
      batteryName
    };
  }
});
</script>

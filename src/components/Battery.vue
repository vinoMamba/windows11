<template>
  <ToolTip :tip-content="tipContent">
    <SvgIcon name="battery100" v-if="charging"></SvgIcon>
    <SvgIcon name="battery" v-else-if="level >= .9"></SvgIcon>
    <SvgIcon name="battery50" v-else-if="level > .5 && level < .9"></SvgIcon>
    <SvgIcon name="battery25" v-else-if="level < .5"></SvgIcon>
    <SvgIcon name="battery" v-else></SvgIcon>
  </ToolTip>
</template>
<script lang="ts">
import {defineComponent, ref, watchEffect} from "vue";
import SvgIcon from "./SvgIcon.vue";
import ToolTip from "./ToolTip.vue";
import {useBattery} from "../hooks/useBattery";

export default defineComponent({
  name: 'Battery',
  components: {ToolTip, SvgIcon},
  setup() {
    const tipContent = ref('100%');
    const {level, charging} = useBattery();
    watchEffect(() => {
      tipContent.value = level.value === 1 ? `电量充满(100%)` : `${level.value * 100}%剩余`;
    });
    return {
      tipContent,
      charging,
      level
    };
  }
});
</script>

<style lang="scss" scoped>
</style>

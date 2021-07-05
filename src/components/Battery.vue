<template>
  <ToolTip :tip-content="tipContent">
    <SvgIcon name="battery"></SvgIcon>
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
    const {level} = useBattery();
    watchEffect(() => {
      tipContent.value = level.value === 1 ? `电量充满(100%)` : `${level.value * 100}%剩余`;
    });
    return {
      tipContent
    };
  }
});
</script>

<style lang="scss" scoped>
</style>

<template>
  <ToolTip tool-tip="battery">
    <SvgIcon name="battery"></SvgIcon>
  </ToolTip>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import SvgIcon from "./SvgIcon.vue";
import ToolTip from "./ToolTip.vue";

export default defineComponent({
  name: 'Battery',
  components: {ToolTip, SvgIcon},
});
</script>

<style lang="scss" scoped>
</style>

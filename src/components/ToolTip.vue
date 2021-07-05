<template>
  <span class="tool-tip" :tip="tipContent">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ToolTip",
  props: {
    tipContent: {
      type: String,
      default: ""
    }
  },
});
</script>
<style lang="scss" scoped>
.tool-tip {
  position: relative;
  cursor: pointer;
}

[tip]:after {
  content: attr(tip);
  visibility: hidden;
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all .3s;
  opacity: 0;
  white-space: pre;
  font-size: 14px;
  padding: 6px;
  background: white;
  border-radius: 4px;
  color: black;
  box-shadow: 1px 1px 14px rgba(0, 0, 0, 0.1)
}

[tip]:hover {
  /* ie兼容 */
  overflow: visible
}

.tool-tip:hover:after {
  opacity: 1;
  transition: all .3s;
  //transform: translate(5px, -50%);
  visibility: visible;
  display: block;
}
</style>

<template>
  <span class="tool-tip" :tip="toolTip">
    <slot></slot>
  </span>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'ToolTip',
  props: {
    toolTip: {
      type: String,
      default: ''
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
  top: 0;
  left: 100%;
  transform: translate(-5px, -50%);
  transition: all .3s;

  opacity: 0;
  /* 空白问题 */
  white-space: pre;
  font-size: 14px;
  padding: 4px;
  background-color: #ffffff;
  border: 1px solid black;
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

<template>
  <div class="date-picker">
    <span>{{ currentTime }}</span>
    <span>{{ currentDate }}</span>
  </div>
</template>
<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
import dayjs from "dayjs";

export default defineComponent({
  name: "DatePicker",
  setup() {

    const currentTime = ref(dayjs().format("HH:mm"));
    const currentDate = ref(dayjs().format("YYYY/MM/DD"));
    onMounted(() => {
      setInterval(() => {
        currentTime.value = dayjs().format("HH:mm");
        currentDate.value = dayjs().format("YYYY/MM/DD");
      }, 1000);
    });
    return {
      currentTime,
      currentDate,
      currentDateZh
    };
  }
});
</script>
<style lang="scss" scoped>

.date-picker {
  font-size: 14px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
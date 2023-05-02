<template>
  <button
    class="aside-toggle-btn"
    :disabled="props.disabled"
    @click="
      () => {
        props.toggleSwitch!(true);
      }
    "
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  disabled: boolean;
  toggleSwitch?: (value: boolean) => void;
}

const props = defineProps<Props>();
</script>

<style scoped lang="scss">
.aside-toggle-btn {
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid #dae9f4;
  border-radius: 16px;
  background-color: #ffffff;
  span {
    background-color: #4f5864;
    width: 28px;
    height: 2px;
  }
  cursor: pointer;
}
</style>

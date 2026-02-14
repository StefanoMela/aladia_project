<script setup>
import { sizeClasses, variantClasses } from "~/utils/constants/button-variants";

const props = defineProps({
  size: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: false,
  },
});

const buttonClasses = computed(() => {
  const size = sizeClasses[props.size] ?? sizeClasses.md;
  const variant = variantClasses[props.variant] ?? variantClasses.primary;
  return `${size} ${variant}`; 
});
</script>

<template>
  <button :class="['rounded flex justify-center items-center', buttonClasses]">
    {{ text }}
  </button>
</template>

<style scoped></style>

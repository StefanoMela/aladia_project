<script setup>
import { sizeClasses, variantClasses } from '~/utils/constants/button-variants'

const props = defineProps({
  size: {
    type: String,
    required: false
  },
  text: {
    type: String,
    required: false
  },
  variant: {
    type: String,
    required: false
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  const size = sizeClasses[props.size] ?? sizeClasses.md
  const variant = variantClasses[props.variant] ?? variantClasses.primary
  return `${size} ${variant}`
})
</script>

<template>
  <button
    type="button"
    :class="['flex items-center justify-center rounded', buttonClasses]"
    :aria-label="ariaLabel || text || undefined"
    @click="emit('click')"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

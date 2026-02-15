<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  ariaLabel: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'input'])

function onInput(event) {
  const value = event.target.value
  emit('update:modelValue', value)
  emit('input', value)
}
</script>

<template>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    :aria-label="ariaLabel || undefined"
    class="w-full rounded-md border border-gray-300 p-2 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
    @input="onInput"
  />
</template>

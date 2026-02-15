<script setup>
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  ariaLabel: {
    type: String,
    default: ''
  },
  ariaDescribedby: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'input'])

const inputId = useId()

function onInput(event) {
  const value = event.target.value
  emit('update:modelValue', value)
  emit('input', value)
}
</script>

<template>
  <div class="flex w-full items-center gap-2">
    <slot name="prefix" />
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :aria-label="ariaLabel || undefined"
      :aria-describedby="ariaDescribedby || undefined"
      class="w-full rounded-md border border-gray-300 p-2 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
      @input="onInput"
    />
    <slot name="suffix" />
  </div>
</template>

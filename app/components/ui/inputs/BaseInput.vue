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
  },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'ghost'].includes(v)
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
  <div
    class="relative flex w-full min-w-0 items-center gap-2 transition-colors"
    :class="variant === 'ghost'
      ? 'border-b border-white/80 text-white focus-within:border-white'
      : 'rounded-md border border-gray-300 focus-within:border-black focus-within:ring-1 focus-within:ring-black'"
  >
    <slot name="prefix" />
    <input
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :aria-label="ariaLabel || undefined"
      :aria-describedby="ariaDescribedby || undefined"
      class="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none md:text-base"
      :class="variant === 'ghost'
        ? 'text-white placeholder:text-white/50'
        : 'rounded-md p-2 placeholder:text-gray-500'"
      @input="onInput"
    />
    <slot name="suffix" />
  </div>
</template>

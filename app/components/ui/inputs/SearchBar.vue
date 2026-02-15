<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'search'])

function onInput(event) {
  const value = event.target.value
  emit('update:modelValue', value)
}

function onKeydown(event) {
  if (event.key === 'Enter') {
    emit('search', event.target.value)
  }
}
</script>

<template>
  <div class="relative flex min-h-10 flex-1 min-w-0 max-w-md items-center gap-2 text-white">
    <Icon name="ph:magnifying-glass" class="size-6 shrink-0" aria-hidden="true" />
    <input
      type="search"
      maxlength="100"
      class="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/50"
      placeholder="Cerca tutto..."
      aria-label="Cerca"
      name="search-bar"
      :value="modelValue"
      @input="onInput"
      @keydown.enter="onKeydown"
    />
    <div class="absolute bottom-0 left-0 right-0 h-px w-full bg-white/80" aria-hidden="true"></div>
  </div>
</template>

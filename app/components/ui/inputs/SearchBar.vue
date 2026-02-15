<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue', 'search'])

function onSubmit(event) {
  event.preventDefault()
  emit('search', props.modelValue)
}
</script>

<template>
  <form
    class="flex min-w-0 flex-1"
    @submit.prevent="onSubmit"
  >
    <BaseInput
      :model-value="modelValue"
      type="search"
      placeholder="Cerca tutto..."
      aria-label="Cerca"
      variant="ghost"
      @update:model-value="(v) => emit('update:modelValue', v)"
    >
      <template #prefix>
        <Icon
          name="ph:magnifying-glass"
          class="size-5 shrink-0 text-white md:size-6"
          aria-hidden="true"
        />
      </template>
    </BaseInput>
  </form>
</template>

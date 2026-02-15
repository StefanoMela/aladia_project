<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

function close() {
  isOpen.value = false
}

function handleKeydown(event) {
  if (event.key === 'Escape') {
    close()
  }
}

function onOverlayClick() {
  close()
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="isOpen"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="title ? 'modal-title' : undefined"
      aria-describedby="modal-content"
      class="fixed inset-0 z-50 flex items-center justify-center p-4"
      @keydown.escape="handleKeydown"
    >
      <div
        class="fixed inset-0 bg-black/50"
        aria-hidden="true"
        @click="onOverlayClick"
      />
      <div
        class="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-xl"
        role="document"
      >
        <button
          type="button"
          class="absolute right-4 top-4 rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          aria-label="Chiudi"
          @click="close"
        >
          <Icon name="ph:x" class="size-5" />
        </button>
        <header v-if="title || $slots.header" class="mb-4 pr-8">
          <slot name="header">
            <h2
              id="modal-title"
              class="text-lg font-semibold text-gray-900"
            >
              {{ title }}
            </h2>
          </slot>
        </header>
        <div id="modal-content" class="text-gray-600">
          <slot />
        </div>
        <footer v-if="$slots.footer" class="mt-6">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>

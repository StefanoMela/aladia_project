<script setup>
import { toastVariants } from '~/utils/constants/toast-variants'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 3000
  },
  variant: {
    type: String,
    default: 'info'
  }
})

const toastVariantClasses = computed(
  () => toastVariants[props.variant] ?? toastVariants.info
)

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

let autoCloseTimer = null

function close() {
  isOpen.value = false
}

function clearTimer() {
  if (autoCloseTimer) {
    clearTimeout(autoCloseTimer)
    autoCloseTimer = null
  }
}

watch(
  () => props.modelValue,
  (value) => {
    clearTimer()
    if (value) {
      autoCloseTimer = setTimeout(() => close(), props.duration)
    }
  },
  { immediate: true }
)

onUnmounted(() => clearTimer())
</script>

<template>
  <Teleport to="body">
    <Transition name="toast">
      <div
        v-if="isOpen"
        role="status"
        aria-live="polite"
        class="fixed bottom-4 right-4 z-50 max-w-sm"
      >
        <div
          class="flex items-start gap-3 rounded-lg border p-4 shadow-lg"
          :class="toastVariantClasses"
        >
          <div class="min-w-0 flex-1">
            <h3 v-if="title" class="text-sm font-semibold text-gray-900">
              {{ title }}
            </h3>
            <p v-if="message" class="mt-0.5 text-sm text-gray-600">
              {{ message }}
            </p>
          </div>
          <button
            type="button"
            class="shrink-0 rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-black"
            aria-label="Chiudi"
            @click="close"
          >
            <Icon name="ph:x" class="size-4" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>

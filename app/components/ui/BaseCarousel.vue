<script setup>
const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator: (value) =>
      value.every(
        (img) =>
          typeof img === 'object' && img !== null && 'src' in img && typeof img.src === 'string'
      )
  },
  autoplay: {
    type: Boolean,
    default: false
  },
  autoplayInterval: {
    type: Number,
    default: 5000
  }
})

const currentIndex = ref(0)
let autoplayTimer = null

function goTo(index) {
  currentIndex.value = ((index % props.images.length) + props.images.length) % props.images.length
}

function startAutoplay() {
  if (!props.autoplay || props.images.length <= 1) return
  autoplayTimer = setInterval(() => goTo(currentIndex.value + 1), props.autoplayInterval)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

onMounted(() => startAutoplay())
onUnmounted(() => stopAutoplay())

watch(
  () => props.autoplay,
  (enabled) => (enabled ? startAutoplay() : stopAutoplay())
)
</script>

<template>
  <div
    class="relative w-full max-h-[650px] overflow-hidden"
    role="region"
    aria-roledescription="carousel"
    :aria-label="`Carousel con ${images.length} immagini`"
  >
    <div class="relative aspect-video w-full bg-gray-900">
      <div
        v-for="(img, index) of images"
        :key="img.src"
        class="absolute inset-0 transition-opacity duration-500"
        :class="currentIndex === index ? 'opacity-100' : 'pointer-events-none opacity-0'"
      >
        <NuxtImg
          :src="img.src"
          :alt="img.alt ?? `Slide ${index + 1}`"
          class="size-full object-cover"
          fit="cover"
        />
      </div>
    </div>
  </div>
</template>

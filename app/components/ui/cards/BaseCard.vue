<script setup>
const cardId = useId()

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  /** 'eager' per above-the-fold, 'lazy' per below-the-fold */
  loading: {
    type: String,
    default: 'eager'
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <article
    class="flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
    role="button"
    tabindex="0"
    :aria-labelledby="`${cardId}-title`"
    :aria-describedby="`${cardId}-desc`"
    @click="emit('click')"
    @keydown.enter="emit('click')"
    @keydown.space.prevent="emit('click')"
  >
    <slot name="image">
      <div v-if="image" class="relative aspect-video w-full bg-gray-200">
        <NuxtImg
          :src="image"
          :alt="title"
          :loading="loading"
          class="size-full object-cover"
        />
      </div>
    </slot>
    <div class="flex flex-1 flex-col gap-2 p-4">
      <slot name="header">
        <h3 :id="`${cardId}-title`" class="text-lg font-bold text-gray-900">
          {{ title }}
        </h3>
      </slot>
      <slot name="description">
        <p :id="`${cardId}-desc`" class="text-sm text-gray-500">
          {{ description }}
        </p>
      </slot>
      <slot />
    </div>
  </article>
</template>

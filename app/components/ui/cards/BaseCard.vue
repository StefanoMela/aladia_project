<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["click"]);
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-4">
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-2 text-center">
        <h3 class="text-lg font-bold">{{ title }}</h3>
        <p class="text-sm text-gray-500">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

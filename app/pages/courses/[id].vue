<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "courses",
});
</script>

<template>
  <div class="bg-black text-white text-center w-full h-80">
    <h3>COURSE PAGE {{ id }}</h3>
  </div>
</template>

<style scoped></style>

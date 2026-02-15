<script setup>
const { id } = useRoute().params
definePageMeta({
  layout: 'courses'
})
</script>

<template>
  <div class="flex flex-col min-h-screen items-center p-4 bg-black/90 text-white">
    <h1 class="text-center text-4xl font-bold my-4 uppercase">course {{ id }}</h1>
    <BaseCard
      :title="`Course ${id}`"
      :description="`Course ${id} description`"
      image="https://picsum.photos/id/1/1920/1080"
    />
    <div class="container mx-auto text-center mt-8">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est asperiores molestias
        consequatur veritatis! Beatae omnis ab architecto maxime adipisci laborum sequi voluptates,
        quia enim! Rem fugit, consectetur, minima nemo repellendus doloribus molestias laboriosam,
        et esse dolor vitae rerum asperiores?
      </p>
    </div>
  </div>
</template>

<style scoped></style>

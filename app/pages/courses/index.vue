<script setup>
definePageMeta({
  layout: 'courses'
})
</script>

<template>
  <div class="flex flex-col min-h-screen items-center p-4 bg-black/90 text-white">
    <h1 class="text-center text-4xl font-bold my-8 uppercase">courses list</h1>
    <div class="flex flex-col sm:flex-row justify-center align-center gap-4 container w-full my-8 p-4">
      <BaseCard
        title="Web Development"
        description="Web Development course for beginners"
        image="https://picsum.photos/id/1/1920/1080"
        @click="navigateTo('/courses/1')"
      />
      <BaseCard
        title="AI Development"
        description="AI Development course for beginners"
        image="https://picsum.photos/id/2/1920/1080"
        @click="navigateTo('/courses/2')"
      />
      <BaseCard
        title="Cybersecurity"
        description="Cybersecurity course for beginners"
        image="https://picsum.photos/id/3/1920/1080"
        @click="navigateTo('/courses/3')"
      />
    </div>
    <div class="container mx-auto text-center">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est asperiores molestias
        consequatur veritatis! Beatae omnis ab architecto maxime adipisci laborum sequi voluptates,
        quia enim! Rem fugit, consectetur, minima nemo repellendus doloribus molestias laboriosam,
        amet libero quidem velit illum unde quaerat? Incidunt eaque nostrum cumque nesciunt hic
        voluptatem assumenda minima.
      </p>
    </div>
  </div>
</template>

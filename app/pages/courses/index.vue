<script setup>
import BaseCard from "~/components/ui/cards/BaseCard.vue";

definePageMeta({
  layout: "courses",
});
</script>

<template>
  <div class="w-full h-full flex flex-col justify-between p-4 my-12">
    <h1 class="text-center text-4xl font-bold my-4">COURSES INDEX PAGE</h1>

    <div class="flex justify-center align-center my-8 gap-4 container">
      <div class="w-1/3 h-1/3">
        <BaseCard
          title="Course 1"
          description="Course 1 description"
          image="https://via.placeholder.com/150"
        />
      </div>
      <div class="w-1/3 h-1/3">
        <BaseCard
          title="Course 2"
          description="Course 2 description"
          image="https://via.placeholder.com/150"
        />
      </div>
      <div class="w-1/3 h-1/3">
        <BaseCard
          title="Course 3"
          description="Course 3 description"
          image="https://via.placeholder.com/150"
        />
      </div>
    </div>
    <div class="container mx-auto text-center">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta est
        asperiores molestias consequatur veritatis! Beatae omnis ab architecto
        maxime adipisci laborum sequi voluptates, quia enim! Rem fugit,
        consectetur, minima nemo repellendus doloribus molestias laboriosam,
        amet libero quidem velit illum unde quaerat? Incidunt eaque nostrum
        cumque nesciunt hic voluptatem assumenda minima.
      </p>
    </div>
  </div>
</template>

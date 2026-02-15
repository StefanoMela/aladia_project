<script setup>
definePageMeta({
  layout: 'courses'
})

const route = useRoute()
const { getCourseById } = useCourses()
const course = computed(() => getCourseById(route.params.id))
</script>

<template>
  <div class="flex flex-col items-center p-4">
    <h1 class="text-center text-4xl font-bold my-4 uppercase">{{ course?.title }}</h1>
    <BaseCard :title="course?.title" :description="course?.description" :image="course?.image" />
  </div>
</template>

<style scoped></style>

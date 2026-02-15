<script setup>
definePageMeta({
  layout: 'courses'
})

const { coursesByTag } = useCourses()
const sections = coursesByTag()

function navigateToCourse(course) {
  navigateTo(`/courses/${course.id}`)
}
</script>

<template>
  <div class="flex min-h-screen flex-col items-center p-4">
    <h1 class="my-8 text-center text-4xl font-bold uppercase">courses list</h1>

    <div class="w-full space-y-12 px-4">
      <section v-for="section in sections" :key="section.tag" class="w-full">
        <h2 class="mb-4 text-xl font-semibold">
          {{ section.tag }}
        </h2>
        <div
          class="overflow-x-auto overflow-y-hidden scroll-smooth"
          style="scrollbar-width: thin; scrollbar-color: white white"
        >
          <div class="flex gap-4 pb-4 snap-x snap-mandatory">
            <BaseCard
              v-for="course in section.courses"
              :key="`${section.tag}-${course.id}`"
              :title="course.title"
              :description="course.description"
              :image="course.image"
              class="w-full h-max-12 sm:min-w-[280px] sm:max-w-[320px] shrink-0 snap-center"
              @click="navigateToCourse(course)"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

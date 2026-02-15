<script setup>
const activeTab = ref('spaces')

const heroImages = [
  { src: 'https://picsum.photos/id/1/1920/1080', alt: 'Corsi e formazione' },
  { src: 'https://picsum.photos/id/10/1920/1080', alt: 'Impara ovunque' },
  { src: 'https://picsum.photos/id/20/1920/1080', alt: 'Esperienza di apprendimento' }
]

const tabs = [
  {
    id: 'spaces',
    label: 'Spaces',
    icon: 'ph:folder-open',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    heading: 'Spaces',
    description:
      'Create and manage all the spaces you need. Organize your content, collaborate with your team, and keep everything accessible in one place.'
  },
  {
    id: 'courses',
    label: 'Courses',
    icon: 'ph:book-open',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    heading: 'Courses',
    description:
      'Personalize your learning, monitor your progress, and track your performance. Create and publish content with ease for your audience.'
  },
  {
    id: 'events',
    label: 'Events',
    icon: 'ph:calendar',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
    heading: 'Events',
    description:
      'Organize live webinars, workshops, and engaging training sessions. Schedule, manage, and track attendance effortlessly.'
  }
]
</script>

<template>
  <!-- hero section -->
  <section class="py-12">
    <!-- title -->
    <div class="text-center">
      <span
        class="mb-3 inline-block rounded-full border border-yellow-500 bg-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-yellow-500"
      >
        Premium Learning
      </span>
      <h1 class="text-3xl font-bold text-white-900 md:text-4xl lg:text-5xl">Our Courses</h1>
      <p class="mx-auto mt-4 max-w-2xl text-base text-white-600 md:text-lg p-4">
        Unlock your potential with expert-led courses designed to transform your skills and
        accelerate your career growth.
      </p>
    </div>
    <!-- buttons -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
      <BaseButton
        text="Browse Courses"
        size="lg"
        variant="primary"
        class="text-black hover:ring-1 hover:ring-offset-1 hover:ring-offset-transparent hover:ring-pink-500"
        @click="navigateTo('/courses')"
      />
      <BaseButton
        text="View Top Picks"
        size="lg"
        variant="primary"
        class="rounded-full text-black hover:ring-1 hover:ring-offset-1 hover:ring-offset-transparent hover:ring-pink-500"
        @click="navigateTo('/courses')"
      />
    </div>
    <!-- hero carousel -->
    <div class="relative left-1/2 my-12 w-screen -translate-x-1/2">
      <BaseCarousel :images="heroImages" :autoplay="true" :autoplay-interval="4000" />
    </div>
  </section>
  <section class="p-6">
    <div class="mx-auto max-w-7xl">
      <div class="mb-14 text-center">
        <span
          class="mb-3 inline-block rounded-full border border-yellow-500 bg-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-yellow-500"
        >
          Boost Your Productivity
        </span>
        <h2 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Powerful Tools At Your Fingertips
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base text-white/60 md:text-lg">
          Everything you need to learn, collaborate, and grow — all in a single platform.
        </p>
      </div>
      <BaseTabs v-model="activeTab" :tabs="tabs" />
    </div>
  </section>
</template>

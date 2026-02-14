<script setup>
const activeTab = ref("spaces");

const tabs = [
  {
    id: "spaces",
    label: "Spaces",
    icon: "ph:folder-open",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    heading: "Spaces",
    description:
      "Create and manage all the spaces you need. Organize your content, collaborate with your team, and keep everything accessible in one place.",
  },
  {
    id: "courses",
    label: "Courses",
    icon: "ph:book-open",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    heading: "Courses",
    description:
      "Personalize your learning, monitor your progress, and track your performance. Create and publish content with ease for your audience.",
  },
  {
    id: "events",
    label: "Events",
    icon: "ph:calendar",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    heading: "Events",
    description:
      "Organize live webinars, workshops, and engaging training sessions. Schedule, manage, and track attendance effortlessly.",
  },
];
</script>

<template>
  <!-- hero section -->
  <section class="px-6 py-20 md:py-28 bg-black text-white">
    <!-- title -->
    <div class="mb-14 text-center">
      <span
        class="mb-3 inline-block rounded-full border border-yellow-500 bg-white/20 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-yellow-500"
      >
        Premium Learning
      </span>
      <h1 class="text-3xl font-bold text-white-900 md:text-4xl lg:text-5xl">
        Our Courses
      </h1>
      <p class="mx-auto mt-4 max-w-2xl text-base text-white-600 md:text-lg">
        Unlock your potential with expert-led courses designed to transform your
        skills and accelerate your career growth.
      </p>
    </div>
    <!-- buttons -->
    <div class="flex items-center justify-center gap-6">
      <BaseButton
        text="Browse Courses"
        size="lg"
        variant="primary"
        class="text-black hover:ring-1 hover:ring-offset-1 hover:ring-offset-transparent hover:ring-shadow hover:ring-pink-500"
      />
      <BaseButton
        text="View Top Picks"
        size="lg"
        class="rounded-full bg-white text-black hover:ring-2 hover:ring-offset-1 hover:ring-pink-500"
      />
    </div>
    <!-- hero  -->
    <div class="w-full h-full"></div>
  </section>
  <!-- tabs section -->
  <section class="px-6 py-20 md:py-28">
    <div class="mx-auto max-w-7xl">
      <div class="mb-14 text-center">
        <span
          class="mb-3 inline-block rounded-full border border-black/30 bg-black/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-black"
        >
          Boost Your Productivity
        </span>
        <h2 class="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
          Powerful Tools At Your Fingertips
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
          Everything you need to learn, collaborate, and grow — all in a single
          platform.
        </p>
      </div>

      <BaseTabs v-model="activeTab" :tabs="tabs" />
    </div>
  </section>
</template>

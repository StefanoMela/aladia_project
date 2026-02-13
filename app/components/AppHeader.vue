<script setup></script>

<template>
  <header
    class="container mx-auto flex justify-between items-center p-4 border-4 w-full bg-red"
  >
    <div class="flex items-center gap-4">
      <div class="">
        <img src="/favicon.ico" alt="Logo" />
      </div>
      <div class="">
        <h1>Aladia</h1>
      </div>
    </div>
    <div class="">
      <ul class="flex gap-4">
        <NuxtLink to="/" class="text-gray-500">Home</NuxtLink>
        <NuxtLink to="/courses" class="text-gray-500">Courses</NuxtLink>
        <NuxtLink to="/about" class="text-gray-500">About</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-500">Contact</NuxtLink>
      </ul>
    </div>
    <div class="flex gap-4">
      <button class="btn btn-primary"><BaseButton /></button>
      <button class="btn btn-secondary"><BaseButton /></button>
    </div>
  </header>
</template>

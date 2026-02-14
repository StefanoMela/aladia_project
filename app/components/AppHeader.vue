<script setup></script>

<template>
  <header class="flex justify-between items-center p-2 bg-black">
    <NuxtImg
      class="h-12 py-2.5 pl-0.5 md:h-14"
      src="/aladia_logo.svg"
      alt="Logo"
    />
    <SearchBar />
    <BaseButton text="Sign In" size="sm" variant="primary" />
  </header>
</template>

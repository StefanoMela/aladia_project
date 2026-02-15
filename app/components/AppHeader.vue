<script setup>
const search = ref('')

function onSearch(value) {
  console.log(value)
  navigateTo(`/search?query=${value}`)
}
</script>

<template>
  <header class="flex justify-between items-center p-2 bg-black">
    <NuxtImg
      class="h-12 py-2.5 pl-0.5 md:h-14 cursor-pointer"
      src="/aladia_logo.svg"
      alt="Logo"
      @click="navigateTo('/')"
    />
    <div class="flex flex-1 min-w-0 max-w-md">
      <SearchBar v-model="search" @search="onSearch" />
    </div>
    <BaseButton text="Sign In" size="sm" variant="secondary" />
  </header>
</template>

<script setup>
function clickedBar() {
  window.alert("click");
}
</script>

<template>
  <header class="flex justify-between items-center p-2 bg-black">
    <NuxtImg
      class="h-12 py-2.5 pl-0.5 md:h-14"
      src="/aladia_logo.svg"
      alt="Logo"
    />
    <div
      class="relative flex min-h-10 flex-1 min-w-0 max-w-md items-center gap-2 text-white"
    >
      <Icon name="ph:magnifying-glass" class="size-6 shrink-0" />
      <input
        type="text"
        maxlength="100"
        class="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/50"
        placeholder="Cerca tutto..."
        aria-label="Cerca"
        name="search-bar"
        @click="clickedBar()"
      />
      <div
        class="absolute bottom-0 left-0 right-0 h-px w-full bg-white/80"
      ></div>
    </div>
    <BaseButton text="Sign In" size="sm" variant="secondary" />
  </header>
</template>

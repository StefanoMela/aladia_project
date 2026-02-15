<template>
  <div class="flex min-h-screen flex-col bg-black/90 text-white">
    <header>
      <AppHeader />
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

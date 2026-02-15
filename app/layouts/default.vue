<template>
  <div>
    <header>
      <AppHeader />
    </header>

    <main class="bg-black/90 text-white">
      <slot />
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>

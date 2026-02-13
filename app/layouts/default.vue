<template>
  <div class="w-full h-full flex flex-col justify-between align-center">
    <header>
      <AppHeader />
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <AppFooter />
    </footer>
  </div>
</template>
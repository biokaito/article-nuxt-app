<template>
  <div>
    <div :style="isDarkMode ? { backgroundColor: 'black' } : null">
      <Nav />
      <Heading />
      <Cards />
    </div>
  </div>
</template>

<script setup lang="ts">
const { isDarkMode } = useDarkMode();
</script>

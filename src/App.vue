<template>
  <div id="app" class="min-h-screen">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "tailwindcss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a2e1f;
}

::-webkit-scrollbar-thumb {
  background: #E1B46A;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #F4D03F;
}
</style>
